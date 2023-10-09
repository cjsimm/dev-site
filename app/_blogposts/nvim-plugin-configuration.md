---
title: 'Neovim Plugin Quickstart'
summary: 'Learn the basics of Lua-based plugin installation and configuration'
date: '2023-07-30'
---
If you've been learning vim motions, using [my advice](https://www.csimm..dev/blog/how-to-learn-vim) or any other method, you've probably noticed by now that base versions of vim are lacking in terms of modern development workflow functionality and convenience.  This article is concerned with teaching the basics of neovim plugin configuration using the built-in Lua engine to elevate neovim quality of life and workflow features to the standard that you are used to. After you have increased neovim functionality to match that of a modern editor through plugins, there will be very few reasons to choose anything but neovim for editing text unless you want the full-blown IDE experience that a program such as [Visual Studio](https://visualstudio.microsoft.com/) offers. 

Our goal here is to bring the base installation of neovim up to roughly equal with the workflow convenience of VSCode. The aim is not to port over exact feature parity from VSCode to neovim, although this is possible. The goal is to bring across the most positive aspects of VSCode, such as language servers and auto-complete, while maintaining the keyboard and buffer-driven development workflow of neovim. We'll build a basic config, learning general nvim Lua configuration practice on the way, so that you are prepared to expand your own version out in any direction that you see fit in the future. 

# Getting Started

There's a lot to do, and it can be quite overwhelming if you're not used to getting stuck into config files.  Don't be afraid to do this in chunks, and don't get worried if you get through it slowly - the configs that other people make available publicly online, either posted on reddit or rewritten line-by-line from another screen in an ASMR coding video, are all the result of the same slow and  confusing grind that you're about to go through. Your perfect config will be the result of iteration. Our goal is to get neovim into a usable and aesthetically pleasing state. We want a foundation that you can build your true config out from. 

It goes without saying that you should be looking to do all of this coming configuration *with* neovim. If you've been using the VSCode plugin or some other solution to practice with, now's the time to dump it. You're making the jump today, and you're going to configure it with itself!

# Config Structure

There's nothing stopping you dumping every config setting, plugins and all, into one monolithic file. If you like to plan ahead, however, I wouldn't say that this is a great idea. It's best to separate out your config concerns into distinct files and then have one master 'init' file bring them all together when you boot up vim. Along with this, it's handy to have your nvim dotfiles in the same parent directory as your other ones (like your bash and tmux configs). This enables you to easily create a remote repo using a version control of your choice and grab your config files on whatever machine you happen to be working on.

With these thoughts in mind, let's create a `nvim` folder in the `.config` directory in your `$HOME`.

` mkdir ~/.config/nvim/`

inside that, we'll implement the multi-file config structure that will enable quick editing.  at the base directory, create `init.lua` this will be the entry point for nvim to load you config. Also create the directory `lua/`.  Any files placed inside this directory can be imported from `init.lua`. 

NOTE: For Lua (and many plugins to work correctly) make sure that you are on neovim 0.7.0 or higher. The neovim package in Debian-based distros is still using ~0.6. A quick for this is to add the unstable ppa, found [here](https://launchpad.net/~neovim-ppa/+archive/ubuntu/unstable). This way you'll always be up to date. Unstable can be, well, unstable. Most have found the unstable branch to be very safe to daily drive. If you're uncomfortable with this, build any version you want from [source](https://github.com/neovim/neovim)

Here's a file structure for the `lua/` directory that separates concerns quite nicely 

| Filename | Use |
| --- | --- |
| remap.lua | file for vim rebinds |
| options.lua | file for vim settings |
| lazy-config.lua | file for configuring plugins using the lazy.nvim plugin manager. IMPORTANT: don't call this just 'lazy' because it will create a conflict with the plugin itself |
| plugins/ | directory for holding plugins to be managed by lazy.nvim. This will be explained below |
| plugins/lsp/ | directory for holding lsp plugins to be managed by lazy.nvim. This will be explained below |

in our `init.lua` file, let's `require` all of these lua files so that nvim can gather our config together.

```lua
---------------------------------------------------------------
-- Base Vim Config
---------------------------------------------------------------
require("remap")
require("options")
---------------------------------------------------------------
-- Plugins
---------------------------------------------------------------
require("lazy-config")
```

Always make sure to import your plugins file after your default vim settings and binds. Lets work on the plugins first

# Managing plugins with lazy.nvim 

At the time of writing (September 2023), [lazy.nvim](https://github.com/folke/lazy.nvim) is one of the best maintained and most popular plugin managers for neovim. We're going to bootstrap it in the `lazy-config.lua` file using a code snippet found on the [github page](https://github.com/folke/lazy.nvim#-installation). 

```lua
-- bootstrap lazy.nvim https://github.com/folke/lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)
--setup function installs each string/table inside the outer function passed to the table 
require("lazy").setup({import = "plugins"})
```

Notice how we've passed the `plugins` directory to the lazy setup function. This is so that we can maintain a clean file structure for each one of our plugins. For any plugin that you want to install, create a separate lua file in the plugins directory where the installation and configuration of said plugin will be managed 

## Telescope Example

Here's an example using the popular [telescope]() plugin.

In plugins, we simply create a new file called `telescope.lua` and copy the recommended lazy.nvim code snippet from the [github repo page](https://github.com/nvim-telescope/telescope.nvim#installation). Directions of installation and configuration for lazy.nvim will almost always be clearly displayed somewhere on the page. 

```lua
return {
    'nvim-telescope/telescope.nvim', tag = '0.1.3',
    --plugins that MUST be installed and loaded before the plugin being defined 
      dependencies = { 'nvim-lua/plenary.nvim' }, 
      config = {}
    }
```

The installation info and config options for each of our plugins are stored cleanly and separately in each `.lua` file in the `plugins/` directory and are passed to the setup function that we added into `lazy-config.lua`. Nice. 

But what about plugin configuration and keybinds? The best way  to manage it is to add a callback function as value of `config`. There are some benefits to this. This portion of the your config (related to the plugin) will only be loaded when the plugin is. This way, you always only load the configuration that you need when you open neovim.  Here's an example of a config callback function for telescope

```lua
return {
    'nvim-telescope/telescope.nvim', tag = '0.1.3',
      dependencies = { 'nvim-lua/plenary.nvim', 'BurntSushi/ripgrep' },
      config = function()
	    local builtin = require("telescope.builtin")
	    --fuzzy search for all files in directory
	    vim.keymap.set('n', '<leader>ff', builtin.find_files, {})
	    --grep for all files in directory
		vim.keymap.set('n', '<leader>fg', builtin.live_grep, {}) 
      end
}
```

When you save the file and either `:so` or restart nvim, lazy.vvim will get to work installing and loading your plugins. You can load the built in UI and manually install with the `:Lazy` command.

Here, I've only shown one example of a plugin install, but feel free to research and add in as many as you'd like. Over time, your plugin count will likely grow as you look to solve problems or inconveniences in your dev workflow. Here's a short list of plugins that you may be interested in:

| Plugin |  Priority | Description |
| -|-|-|
| [Telescope](https://github.com/nvim-telescope/telescope.nvim) | Vital | A file and grep fuzzyfinder. search for a string across all the files in your project directory |
| [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter) | Vital |  Parsing system that improves syntax highlighting, code folding, code navigation, code analysis. Basically improves vim's understanding of your code  |
| [nvim-tree](https://github.com/nvim-tree/nvim-tree.lua) | Useful | A file directory tree plugin to navigate your directory visually in a similar manner to VSCode |
| [git-fugitive](https://github.com/tpope/vim-fugitive) | Useful | A git wrapper. Call :Git to open a window displaying dirty and modified files |
| [colorizer](https://github.com/norcalli/nvim-colorizer.lua) | Aesthetic | Display colours of defined hexadecimal and rgb colors |
| [web-devicons](https://github.com/nvim-tree/nvim-web-devicons) | Aesthetic | File type icons in next to file names | 

Some plugins will need to utilize other programs on your system to work correctly. Always check the system requirements and dependencies for a plugin that you want to install and make sure you have them if you want to avoid headaches. 

There are some more plugins that I'm going to recommend and show installation of in the sections below: first, we are going to deal with unaesthetic theming of default nvim. Following that, we're going to dive into the LSP setup - a key group of plugins that is going give us feature-parity with other IDEs and managed editors like VSCode.  But first, let's quickly take a look at the rest of our non-plugin settings. 

# remap.lua

With the core plugin structure implemented and out of the way, we can move on to the organization of your regular vim config. We can set all of our non-plugin keybinds and remaps in `remap.lua`.   If you're yet to make any keybinds or don't know how they work, reading this snippet will give you the intuition of how to get started. Remaps in vim can be extremely powerful. There's a few really good ones in the snippet below that I recommend you try out. 

You can map and overwrite any combination of keys in vim, but generally it's best to set you own custom keybinds that extend vim functionality to beginning with the `<leader>` key. I've set mine to spacebar in the config below. 

```lua
vim.g.mapleader = " " -- set leader key to spacebar

-- open directory for currently open file ( p[roject]v[iew] ) 
vim.keymap.set("n", "<leader>pv", vim.cmd.Ex) 

-- always center cursor in middle of screen on page jumps 
vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
vim.keymap.set("n", "<C-b>", "<C-b>zz")
vim.keymap.set("n", "<C-f>", "<C-f>zz")

-- keep search terms hits in middle of screen
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")

--unbind Q (relatively useless and prone to misclicks) 
vim.keymap.set("n", "Q", "<nop>") 

-- global replace current cursor word 
vim.keymap.set("n", "<leader>s", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]]) 

-- keeps the text you just pasted in the register if you overwrote something
vim.keymap.set("x","<leader>p", "\"_dP") 
```
# options.lua

I like to place all of my non-keybind related settings in an `options.lua` file. Again, no details or recommendations of what you should change from default. There's a code snippet below with my file in it - feel free to use it or make your own from scratch. 

I would, however, recommend that you at least add the `vim.opt.termguicolors = true` line to your config. This uses a better colour formatting if the terminal you open. Who doesn't want better colours? 

```lua
--------------------------------------------------
-- Line Numbering
--------------------------------------------------
vim.opt.number = true
vim.opt.relativenumber = true
--------------------------------------------------
-- Space/Tab and Indentation 
--------------------------------------------------
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.softtabstop = 4
vim.opt.expandtab = true
vim.opt.smartindent = true
--------------------------------------------------
-- Search
--------------------------------------------------
-- sets whether all search matches are highlighted 
vim.opt.hlsearch = false  
vim.opt.incsearch = true 
--------------------------------------------------
-- Colors and Style
--------------------------------------------------
-- better coloring
vim.opt.termguicolors = true 
-- add column to encourage line limits 
-- vim.opt.colorcolumn = "80" 
-- offset page moving up and down by 8 lines
vim.opt.scrolloff = 8 
-- reduce interval after input that data is written to disk
vim.opt.updatetime = 50
```

We're getting close to making nvim a premium code editing experience. Next, let's explore how to on how to address nvim's look.

# Color Theme

This is where things are going to become the most subjective. What you like, may not be what I like. I'm going to show an example of a color theme installation, but there are many to choose from, and sometimes their installation methodology can change slightly. Broadly, they operate no differently to any other plugin. Use the same methodology that you've followed so far in this guide. Sometimes it's ok to just shove a new lua file in the plugins folder, other times you'll have to set a theme up more specifically within the config callback function. Usually you can figure out the details in the specific color theme github repo.  Your choice of terminal, OS, and wrapper programs (like tmux) can all affect or interfere with your desired theme effects and look. If it doesn't look how you expect, start googling with details of all 3 layers. Someone else has surely run into the same problem as you before. 

You can find a fairly nice list of popular themes [here](https://github.com/topics/neovim-colorscheme)

There's a couple of settings that we should always set inside the lua file. One thing that we must always do is set the vim color theme in the config callback function. 

```lua
vim.cmd[[ colorscheme {color scheme name here} ]]
```

Along with this, you should also set lazy loading to false and set the priority to a high number (like 1000) to make sure that your theme is loaded before any of your other plugins. 

Here's an example lua file that installs the popular tokyonight theme.

```lua
return {
    "folke/tokyonight.nvim",
    name = "tokyonight",
    lazy = false,
    priority = 1000,
    configure = function()
        vim.cmd[[ colorscheme tokyonight-storm ]]
    end
}
```

There are even plugins that enable you to create you own theme in lua, or modify one installed with a plugin. Check out [colorbuddy](https://github.com/tjdevries/colorbuddy.nvim) if you want to create your own.  

# Language Server Protocol 

We're almost there. We've reached the last hurdle - installing language servers.

What is an LSP? It's the live syntax tree that determines whether you've got an error in your code or not before you run it. You might know it as intellisense in VSCode terms. In fact, VSCode had the original implementation of the protocol, but Microsoft have since open sourced the underlying technology. The LSP is going to use your downloaded language servers to give you auto-complete on your code, syntax error highlighting, inter-file definition jumping, and all of the useful visual indicators and algorithmic shortcuts that you're used to having. 

Neovim has an LSP built in. That's means our only real task is to download, manage, and interface our chosen language servers with the LSP. We'll use a couple of different plugins for this. Below I'm going to detail a manual setup, but there is also a handy plugin called [lsp-zero](https://github.com/VonHeikemen/lsp-zero.nvim/tree/v3.x) that can do a lot of the work for you and significantly reduce the amount you need to understand. The reason why I have opted to show you a manual installation is because you will often find yourself fiddling with your LSP, and abstracting away the complexity from the outset is probably a bad long term decision. Just know that the option is there if you want to get this over and done with.

Now, let's walk through what we're going to need to get the LSP working. We're going to use the official [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) plugin to configure our downloaded language servers correctly with neovim. We'll use [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) as our completion engine (displaying suggestions from the language server on the screen), and finally we'll use [mason](https://github.com/williamboman/mason.nvim) and [mason-lspconfig](https://github.com/williamboman/mason-lspconfig.nvim) to download and interface language servers with lspconfig. These four plugins combined will give us a complete LSP experience.

## Initial nvim-cmp setup 

Because nvim-cmp isn't *strictly* related to the LSP, let's install and configure that first.

create a `nvim-cmp.lua` file in your plugins directory and paste in the code below. Make sure that you read the comments so that you understand what's happening.

```lua
return {
    "hrsh7th/nvim-cmp",
    event = "InsertEnter", --load plugin on an event
    dependencies = {
        "hrsh7th/cmp-buffer", --source for the completion engine's recommended text
        "hrsh7th/cmp-path", --source for recommended filesystem paths
        "L3MON4D3/LuaSnip", --snippet engine
        "saadparwaiz1/cmp_luasnip", --auto completion source for snippets
        "rafamadriz/friendly-snippets", --better snippets 
    },
    config = function()
        local cmp = require("cmp")
        local luasnip = require("luasnip")
        --ensures comparatibilty of friendly snipets with luasnip
        require("luasnip.loaders.from_vscode").lazy_load()
        --setup for nvim cmp
        cmp.setup({
            --configure how completion menu works 
            completion = {
                completeopt = "menu,menuone,preview,noselect",
            },
            --configure interaction with luasnip
            snippet = {
                expand = function(args)
                    luasnip.lsp_expand(args.body)
                end,
            },
            --key mappings for completion menu
            mapping = cmp.mapping.preset.insert({
                --scroll through completion options 
                ['<C-k>'] = cmp.mapping.select_prev_item(),
                ['<C-j>'] = cmp.mapping.select_next_item(),
                --scroll up and down through doc snippet
                ['<C-b>'] = cmp.mapping.scroll_docs(-4),
                ['<C-f>'] = cmp.mapping.scroll_docs(4),
                --auto complete
                ['<C-Space>'] = cmp.mapping.complete(),
                --exit completion menu
                ['<C-e>'] = cmp.mapping.abort(),
                -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
                ['<CR>'] = cmp.mapping.confirm({ select = false }),          
            }),
            --sources for autocompletion. order of sources control priority in completion
            sources = cmp.config.sources({
                { name = "luasnip" }, --snippets
                { name = "buffer" }, -- text inside buffer
                { name = "path" }, -- system paths
            }),
        })
    end
}
```

We've successfully created the means to insert our language server (and other) suggestions into neovim while we're editing. We'll come back and insert some more options into this file once we get the LSP set up.

## LSP setup

### LSP Sub-Directory 

It's probably best to organize your LSP plugins in a sub directory of your plugins folder. This'll make it easier to remember which plugins are used in your LSP config when you come back to it in the future. To make sure your top-level `init.lua` file imports everything correctly, we'll have to make a change to `lazy-config.lua` to make sure the new directory is included in the import

First, create the new `lsp` directory under plugins, then edit your `lazy-config.lua` file to pass a *table* of arguments to the `setup()` function instead of just `"plugins"` .

Your `lazy-config.lua` file should now look like this:

```lua
-- bootstrap lazy.nvim https://github.com/folke/lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

--setup function installs each string/table inside the outer function passed to the table 
require("lazy").setup({ {import = "plugins"}, {import = "plugins.lsp"} })
```

### Language Server Management

Now, we're going to use the Mason plugin to download and manage our language servers from within nvim. 

All throughout this tutorial, plugins have been using other programs on your system to either bootstrap themselves or provide functionality. Mason is no exception. Make sure you meet the [minimum system requirements](https://github.com/williamboman/mason.nvim#requirements) before you start trying to install language servers.

Create `mason.lua` in your new `lsp` sub-directory. Again, read the comments carefully to understand what's happening. I have filled in the `ensure_installed` argument with the language servers that I need for my dev workflow. 

```lua
return {
    "williamboman/mason.nvim",
    dependencies = {
    "williamboman/mason-lspconfig.nvim", --lets mason-sourced servers be configured with lsp-config plugin
    },
    config = function()
        local mason = require("mason")
        local mason_lspconfig = require("mason-lspconfig")

        mason.setup({
            --ui icons
            ui = {
                icons = {
                    package_installed = "✓",
                    package_pending = "➜",
                    package_uninstalled = "✗"
                },
            }
        })
        
        --setup to pass downloaded language servers to lspconfig.
        mason_lspconfig.setup({
	        --masoon will always check if these are installed and pass download them on startup if they are missing 
            ensure_installed = {
                --webdev
                "html",
                "cssls",
                "emmet_ls",
                --js/ts
                "tsserver",
                "eslint",
                --other
                "pyright",
                "lua_ls",
                "clangd",
                "rust_analyzer",
            },
            --setting to automatically servers that are configured 
            automatic_installations = true,
        })

    end,
}
```

Restart nvim. Lazy will install mason and mason-lspconfig. Following that, mason will start automatically downloading your specified language servers.

You can access the Mason menu with the command `:Mason` and install any other language server you need from within this UI. Mason does not have an exhaustive list of language servers. If you need a server for a language that is missing in mason (for me it was [GLSL]([https://github.com/svenstaro/glsl-language-server](https://github.com/svenstaro/glsl-language-server)) ) you can get it installed onto your system and continue with the next steps to get it working with nvim.

### LSP Configuration

On to the hardest part. We have our language servers downloaded and management solution in place, now we need to configure them to work with nvim.  We're going to setup our LSP configuration with a low amount of automation, but a high amount of configurability. 

Create the `lspconfig.lua` file in the `lsp` subdirectory and use the example below to create your configuration. Significant differences will appear in the language server configuration and keybind sections, depending on what you want/need to use 

```lua
return {
    "neovim/nvim-lspconfig",
    event = { "BufReadPre", "BufNewFile" }, -- Load LS when opening existing or new file 
    dependencies = {
        "hrsh7th/cmp-nvim-lsp", --completion source
    },
    config = function()
        --required imports 
        local lspconfig = require("lspconfig")
        local cmp_nvim_lsp = require("cmp_nvim_lsp")
        --set keybinds for language server features. modify opts before each bind to describe what it does 
        local opts = { noremap = true, silent = true }
        local on_attach = function(client, bufnr)
            opts.buffer = bufnr
            --display 
            opts.desc = "Go to declaration"
            vim.keymap.set("n", "gD", vim.lsp.buf.declaration, opts) 
            opts.desc = "See available code actions"
            vim.keymap.set({ "n", "v" }, "<leader>ca", vim.lsp.buf.code_action, opts)
            --modify
            opts.desc = "Smart rename"
            vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts)
            --diagnostics
            opts.desc = "Go to previous diagnostic"
            vim.keymap.set("n", "[d", vim.diagnostic.goto_prev, opts) 
            opts.desc = "Go to next diagnostic"
            vim.keymap.set("n", "]d", vim.diagnostic.goto_next, opts)
            --lsp management
            opts.desc = "Restart LSP"
            vim.keymap.set("n", "<leader>lr", ":LspRestart<CR>", opts)
        end
        --default capabilities from the completion engine that we will assign to most language servers
        local capabilities = cmp_nvim_lsp.default_capabilities()
        --diagnostic symbols to appear in the gutter
        local signs = { Error = "E", Warn = "W", Hint = "H", Info = "I" }
        for type, icon in pairs(signs) do
            local hl = "DiagnosticSign" .. type
            vim.fn.sign_define(hl, { text = icon, texthl = hl, numhl = "" })
        end 
        --individual language server configurations
        lspconfig["html"].setup({
            capabilities = capabilities, --pass the completion engine capabilities in
            on_attach = on_attach, -- pass our on-attach keybinds in, 
        })
        lspconfig["cssls"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
        })
        lspconfig["emmet_ls"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
            filetypes = { 
                "html", 
                "typescriptreact", 
                "javascriptreact", 
                "css", 
                "sass", 
                "scss", 
                "less",
            },
        })
        lspconfig["tsserver"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
        })
        lspconfig["eslint"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
        })
        lspconfig["pyright"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
        })
        lspconfig["clangd"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
        })
        lspconfig["rust_analyzer"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
        })
        --specific config for lua to help with nvim config
        lspconfig["lua_ls"].setup({
            capabilities = capabilities,
            on_attach = on_attach,
            settings = { 
                Lua = {
                    -- make the language server recognize "vim" global
                    diagnostics = {
                        globals = { "vim" },
                    },
                    workspace = {
                        -- make language server aware of runtime files
                        library = {
                            [vim.fn.expand("$VIMRUNTIME/lua")] = true,
                            [vim.fn.stdpath("config") .. "/lua"] = true,
                        },
                    },
                },
            },
        })
    end
}
```

You can see in the example that the emmet language server has been passed an additional argument detailing which files to associate the language server with. This is why I advise you to explicitly setup each of your chosen language servers.  It will enable to you quickly go into your config file in the future and change how your specific language servers interact with different file types and create differences between how each of the language servers interact with neovim when they are attached to a buffer. If you do not explicitly set an argument in the setup table, the defaults are used. You can view the default for every lsp-config supported language server [here](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#tsserver)

You can either restart nvim or manually request lazy.nvim to install and launch the newly configured LSP.

Check to see that it's configured properly.  Enter the `:LspInfo` command with a `.lua` file opened and check that the lua language server has correctly attached.  If you start typing nonsense, the language server should notice and start filling the gutter with symbols and embedding advice into the UI the next time you enter normal mode. 

If this doesn't happen, double check that your configuration is syntactically correct and complete. If you still have problems, check `:LspInfo` again for clues as to what's gone wrong and check the [troubleshooting section](https://github.com/neovim/nvim-lspconfig/tree/master#troubleshooting) on github. 

## nvim-cmp Changes

Our LSP is working! Now, let's go back to our nvim-cmp configuration and start passing language server output into our completion engine as a source. open `nvim-cmp.lua` and find the sources section

```lua 
sources = cmp.config.sources({
	{ name = "nvim_lsp" }, -- language server
	{ name = "luasnip" }, --snippets
	{ name = "buffer" }, -- text inside buffer
	{ name = "path" }, -- system paths
}),
```

# One final aesthetic change

I'm including this final plugin to give you inspiration and to help you understand the level of customizability available in neovim. Let's move the prompt that appears when you try to execute a rename, or select between multiple options away from the bottom of the screen and closer to the cursor. When I start to rename a function using the `smart rename` binding defined in the `lsp-config.lua` file, I want the prompt to appear close to my cursor so that I don't to move my eyes to a different portion of the screen. We can achieve this (and several other aesthetic changes) using the [dressing.nvim](https://github.com/stevearc/dressing.nvim). 

Create a `dressing.lua` file in your plugins directory. No complex configuration for this one

```lua
return {
  "stevearc/dressing.nvim",
  event = "VeryLazy",
}
```

When you reload vim and use the smart rename function, a box will appear next to your cursor that holds the new name that you want to use. Dressing makes aesthetic changes to quite a few different menus and plugins (if you have them installed), but is also highly customizable. Check out the github page if you want to get fiddly. 

Making small quality of life changes to your config like this is what can really personalize your config to your own needs. 

# Ya' did it, champ

You've done it. You've learnt to use vim motions, you've made the switch to neovim, and now you've installed everything you need to bring it to feature parity with other modern IDEs. Learning new tooling and configuring it can be slow and demanding at times, but if you've made it this far, you've seen almost of the of complexity involved with vim short of writing your own plugins and have internalized universal configuration skills along the way. Editing your bash file or configuring some other program in text files will feel like a breeze, now. 
The key to continuing on your neovim journey is to learn to not dismiss an annoyance or complaint with your editor or workflow when it appears in the wild like you would have before. Unlike when using a closed editing program, you are now in the position to do whatever you want with your editor. 

# Sources 

[ThePrimeagen Neovim RC from Scratch](https://www.youtube.com/watch?v=w7i4amO_zaE)
[neovim docs lua guide](https://neovim.io/doc/user/lua-guide.html)
[Official neovim LSP docs](https://neovim.io/doc/user/lsp.html)
[Josean Martinez LSP Setup](https://www.youtube.com/watch?v=NL8D8EkphUw&list=PLnu5gT9QrFg36OehOdECFvxFFeMHhb_07&index=8)
[lsp-config language server configuration docs](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md)

