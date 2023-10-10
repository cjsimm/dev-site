---
title: 'Getting started with tmux'
summary: 'Adding tmux to your system and combining it with vim can lead to a powerful workflow'
date: '2023-08-15'
---
This post follows on from my [vim introduction article](https://www.csimm.dev/blog/how-to-learn-vim). If you haven't read that and/or aren't already comfortable in vim, I recommend that you focus on that program first.  
Without a doubt,  the best path to achieving the full command-line workflow is to introduce things in stages and avoid overloading yourself with too many new tools all at once. Adopting vim (or some similar text editor) is by far the most important and difficult step to take towards achieving this goal. You're leaving behind a whole computing paradigm and adopting a new one. For most, it doesn't come easily.  However, like almost everyone else who has persisted through the learning curve and come out the other side, I'll tell you that the rewards are well worth the investment.  
So, if you haven't gotten vim under your belt yet, go read my article and other sources to help you get started on *that* journey and swing back around to this page later. 

# tmux - A Brief Introduction 

tmux is an incredibly powerful command-line program and one of the essential tools for a dev looking to maximize their productivity in a command-line workflow. tmux is a terminal multiplexer that allows you to create multiple panes in the same terminal window. Multiple windows can be opened that are all held together in one session. The session is long lived, meaning that you can leave it (deattach) and come back to it later (reattach) and everything will be in the same state as it was before you left. tmux sessions will persist (unless the server is explicitly exited) until your computer is restarted. 
When combined with a powerful keyboard and command-line focused text editor such as vim, a world of productivity opens up. Many devs also adopt a window or workspace manager, creating one further multiplex abstraction above the tmux/vim combination which allows for clear and concise separation of  concerns between multiple workspace windows. 

tmux consists of three layers: sessions, windows, and panes. Sessions are the topmost layer and are a collection of one or more windows managed as a single unit. Any number of sessions can be active at one time, but you'll likely only be 'attached' to one. Only one window in any session is considered 'active' at any given time. Your keyboard input will be passed to this active window. When you attach to a session, your active windows will be displayed to you in the bottom left corner of the screen, along with an indicator (\*) to show which window is currently active.

Windows are a container for one or more panes. Similar to the session-window relationship, a window has only one active pane at any given time.

Panes are splits in a window and each hold an individual terminal session.

So, a variable number of terminal sessions (panes) tied together in a single window. A variable number of windows in a tmux session. A variable number of sessions, and all of it persists in the background quietly until you need it. Can you see the potential efficiency and power of tmux? 

Although vim and tmux make a powerful combination, it's easy to run into issues when using them together unless some extra configuration is done to improve synergy between the two programs. Like with many development tools (particularly command-line ones), initial setup can be a time consuming and painful process, but once you commit the program and its key mappings to memory, you wont remember how you lived without it

Refer to this guide [here]() for how to get tmux installed on your system. 

# Config Directory Setup 

We need a location to store our dotfile. It's best to either place it directly in your \$HOME (or non-UNIX equivalent) directory, or together with your other config files in `$HOME/.config/tmux/tmux.conf`. I generally prefer the latter so that I can easily maintain a repo for all of my dotfiles easily.

# Basic Commands

Before turning to the main focus of this article and working on configuring tmux and vim to play nicely together, let's briefly look at the key commands and functionality of tmux. 

executing `tmux` in the command line will start the tmux server and open a default session. 

All tmux commands are qualified with your `PREFIX` bind. By default, this is `ctrl + b`. For many people, this keybind is not particularly convenient so we will look at changing it in the next section. 

| Command | Action |
| - | - |
| PREFIX + c |  Create new window |
| PREFIX + , | Rename active window |
| PREFIX + x | Exit pane (y to confirm) |
| PREFIX + % | Split pane horizontally |
| PREFIX + " | Split pane vertically |


Just like vim the tmux keybinds generally use intuitive mnemonic mappings
You can check out an extensive list of tmux commands and keybinds [here](https://tmuxcheatsheet.com).

If you need to see a full list of tmux commands at any time, hit your prefix key and type `?`. 

Once you're ready to start customizing the config and get it working well with vim, read on.

# OOTB Compatibility Issues

There are a few complexities introduced when using tmux and vim together out of the box. It's no secret that vim has a wide range of keybinds that make almost every key on the board do *something* in vim. After we take into account every bind in vim, there aren't so many key combinations remaining on the board for tmux to use. tmux gets around this problem by qualifying all of its keybinds with its two stroke prefix. As mentioned above,  by default this prefix is `ctrl + b (or C-b in tmux slang)`. Ah, already there's a conflict with vim. 'Page Up/Back' is bound to `C-b` in vim by default. There is some remapping to be done.  

I'll be introducing several config commands below. You can add them in one-by-one as you read, or grab the entire collection from the code block towards the end of the article and make any changes you want from there. 

# The Prefix Keybind

The most important keybind issue to address is obviously moving tmux's command prefix to a combination not already occupied by a vim keybind. Depending on your vim config, you may be able to choose a range of keybinds. The common solution, however, is to remap tmux prefix from `c-b` to `c-a` . c-a, by default, is unbound in vim and provides a fairly convenient binding for your tmux prefix. There are other options to choose from such as `c-Space`, which is what I like to use as the spacebar without ctrl serves as my leader key in vim. 

```
# Rebind prefix to better key
unbind C-b
set -g prefix C-Space
bind C-Space send-prefix
```
# Keybind Alignments

### Navigation 

By default, vim navigation with the cursor in normal and visual mode is handled with the keys `hjkl`. tmux, by default, handles pane navigation with the arrow keys. It makes intuitive sense to align tmux pane navigation with the vim  conventions to avoid internalizing two separate map sets when using the two programs together.   

In our pursuit to have vim and tmux play nicely together, we are actually going to look to a popular plugin to integrate our vim and tmux navigation together. Using the [vim-tmux-navigator](https://github.com/christoomey/vim-tmux-navigator) plugin, we are going to make it so that seamless navigation between panes functions both within and outside vim, all without the need to activate the tmux leader key. In the spirit of our goal of keybind alignment, we'll look to set `ctrl + hjkl` as our means of hopping between panes, regardless of which panes are running vim or not. This will involve installing the plugin for both tmux and vim. Let's start with tmux.

An easy method to get the plugin working is to install it via a plugin manager. Along with making this installation easy, it'll simplify the installation of any other tmux plugins that you discover in the future. You can read about the tpm plugin manager and how to install it [here](https://github.com/tmux-plugins/tpm). If you decide to go the tpm route, follow the installation instructions on the git page and add the lines below to your config.

```
# Plugins and Plugin Manager
set -g @plugin 'christoomey/vim-tmux-navigator'
run '~/.tmux/plugins/tpm/tpm
```

If you aren't interested in opening the rabbit hole of tmux plugins just yet, you can simply add this snippet to the config file

```
# tmux-vim-smart pane switching with ctrl + hjkl keybinds 
# See: https://github.com/christoomey/vim-tmux-navigator
is_vim="ps -o state= -o comm= -t '#{pane_tty}' \
    | grep -iqE '^[^TXZ ]+ +(\\S+\\/)?g?(view|l?n?vim?x?|fzf)(diff)?$'"
bind-key -n 'C-h' if-shell "$is_vim" 'send-keys C-h'  'select-pane -L'
bind-key -n 'C-j' if-shell "$is_vim" 'send-keys C-j'  'select-pane -D'
bind-key -n 'C-k' if-shell "$is_vim" 'send-keys C-k'  'select-pane -U'
bind-key -n 'C-l' if-shell "$is_vim" 'send-keys C-l'  'select-pane -R'
tmux_version='$(tmux -V | sed -En "s/^tmux ([0-9]+(.[0-9]+)?).*/\1/p")'
if-shell -b '[ "$(echo "$tmux_version < 3.0" | bc)" = 1 ]' \
    "bind-key -n 'C-\\' if-shell \"$is_vim\" 'send-keys C-\\'  'select-pane -l'"
if-shell -b '[ "$(echo "$tmux_version >= 3.0" | bc)" = 1 ]' \
    "bind-key -n 'C-\\' if-shell \"$is_vim\" 'send-keys C-\\\\'  'select-pane -l'"

bind-key -T copy-mode-vi 'C-h' select-pane -L
bind-key -T copy-mode-vi 'C-j' select-pane -D
bind-key -T copy-mode-vi 'C-k' select-pane -U
bind-key -T copy-mode-vi 'C-l' select-pane -R
bind-key -T copy-mode-vi 'C-\' select-pane -l
```

As for vim, add the same git repo to your preferred vim flavour using the plugin manager of your choice. If you listened to my advice and took your dev workflow setup step by step (you should have!), then you'll be familiar with how to setup a vim plugin in the editor flavour of your choice. If you don't, and you want to learn how to easily add plugins to neovim, read the previous entry in this setup series [here](https://www.csimm.dev/blog/nvim-plugin-configuration).

IMPORTANT: make sure that `ctrl + hjkl` aren't already being used by something else in your vim setup. If they are, you can find the function to bind the movements to any key on the [plugin repo page](https://github.com/christoomey/vim-tmux-navigator#configuration)

# Tmux Rebinds and Experience Improvement

## Enabling the mouse

You may have moved to vim and sworn off the mouse for good, but it's still sometimes useful in the terminal. Enable it just in case you need it 

```
# enable mouse
set -g mouse on
```

## Window Navigation

Let's move one layer up from panes and bind some vim-like keys for jumping between windows. We'll set moving to the previous window to `shift + alt + h` and to the next one as `shift + alt + l`

```
bind -n M-H previous-window
bind -n M-L next-window
```

## Pane Splitting 

Alignment of keybinds with vim isn't our only priority. Some tmux defaults are less than stellar. Split window keybinds come set as `%` and `"` for vertical and horizontal splits respectively. We can make these bindings more intuitive by using the view cues of the characters `|` and `_` instead

```
bind | split-window -h 
bind _ split-window -v
```

## Window Numbering

By default, the count number of your open windows in a tmux session startsat 0. Although incrementing from 0 is common practice in development, if you look down at your keyboard, you can see why this may not be the most convenient setting when youre looking to jump quickly between active windows. The 0 key sits waaay over on the other side of the number row from 1. Jumping between window 0 and window 1 is not going to feel convenient at all. It's probably better that we make the first window in a session count from 1.

```
set-window-option -g pane-base-index 1
set-option -g renumber-windows on 
```
## Open New Panes in your cwd

By default, a new tmux pane opens its terminal session in your home directory. It's usually far more intuitive to have a new pane open in the same working directory that you just split a pane from. Navigating to your home directory from any location is trivial in the command line. It's far more annoying to navigate to the working directory that all your open panes arein each time you open a new one rather than simply executing `cd ~` when you're looking for something else, no?

Note that we are actually rebinding something that we already rebound. If you followed my advice and swapped pane splitting from `%` and `"` to `|` and `_`, go ahead and find those lines in your config and change them to this.

```
# open new panes in current directory
bind '_' split-window -v -c "#{pane_current_path}"
bind '|' split-window -h -c "#{pane_current_path}"
```
# Final Base Config

Accounting for all of the pitfalls and synergy issues detailed above, the code block below can be used as a base tmux dotfile that can be further tuned and extended with extra configuration preferences. 

make sure to choose between either the plugin manager or code snippet implementation of our vim-tmux-navigator installation and uncomment accordingly 

```
# vim-tmux-navigator setup - choose and uncomment one solution 
# solution 1 (plugin manager)
#set -g @plugin 'christoomey/vim-tmux-navigator'
#run '~/.tmux/plugins/tpm/tpm

# solution 2 (no plugin manager)
## See: https://github.com/christoomey/vim-tmux-navigator
#is_vim="ps -o state= -o comm= -t '#{pane_tty}' \
#    | grep -iqE '^[^TXZ ]+ +(\\S+\\/)?g?(view|l?n?vim?x?|fzf)(diff)?$'"
#bind-key -n 'C-h' if-shell "$is_vim" 'send-keys C-h'  'select-pane -L'
#bind-key -n 'C-j' if-shell "$is_vim" 'send-keys C-j'  'select-pane -D'
#bind-key -n 'C-k' if-shell "$is_vim" 'send-keys C-k'  'select-pane -U'
#bind-key -n 'C-l' if-shell "$is_vim" 'send-keys C-l'  'select-pane -R'
#tmux_version='$(tmux -V | sed -En "s/^tmux ([0-9]+(.[0-9]+)?).*/\1/p")'
#if-shell -b '[ "$(echo "$tmux_version < 3.0" | bc)" = 1 ]' \
#    "bind-key -n 'C-\\' if-shell \"$is_vim\" 'send-keys C-\\'  'select-pane -l'"
#if-shell -b '[ "$(echo "$tmux_version >= 3.0" | bc)" = 1 ]' \
#    "bind-key -n 'C-\\' if-shell \"$is_vim\" 'send-keys C-\\\\'  'select-pane -l'"
#
#bind-key -T copy-mode-vi 'C-h' select-pane -L
#bind-key -T copy-mode-vi 'C-j' select-pane -D
#bind-key -T copy-mode-vi 'C-k' select-pane -U
#bind-key -T copy-mode-vi 'C-l' select-pane -R
#bind-key -T copy-mode-vi 'C-\' select-pane -l

# enable mouse
set -g mouse on

# start window numbering from 1 
set-window-option -g pane-base-index 1
set-option -g renumber-windows on 

# keybinds and remaps 

# Rebind prefix to better key
unbind C-b
set -g prefix C-Space
bind C-Space send-prefix

# window-to-window navigation with shift + alt + h/l
bind -n M-H previous-window
bind -n M-L next-window

# open new panes in current directory
bind '_' split-window -v -c "#{pane_current_path}"
bind '|' split-window -h -c "#{pane_current_path}"
```

# Keybind Cheatsheet

Now that we have our vim integration configured, the task now falls to you to learn how to actually use this thing. I found that learning tmux came slower than vim. Using it actually initially felt like I hobbled myself. It's easy to mis click something and have horrific things happen to your dev environment, and you interact with it far less so it's more difficult to internalize the keybinds and motions than is with vim. 
You can use your `prefix + ?` key to bring up all of the keybind while inside the program, but I don't find it very easy to find what I'm looking for in there. With that in mind, here's a [cheatsheet](https://tmuxcheatsheet.com/) for you made up of both keybinds and commands to refer to when you get stuck. I've included a short collection below of the most basic commands you need to operate tmux effectively.

## Pane 

| Command | Action | Description |
| -- | -- | -- |
| ctrl + h  | Swap pane (left) | vim motion rebind | 
| ctrl + j  | Swap pane (down) | vim motion rebind | 
| ctrl + k  | Swap pane (up) | vim motion rebind | 
| ctrl + l  | Swap pane (right) | vim motion rebind |

## Window

| Command | Action | Comments |
|--|--|--|
|  PREFIX + \<number> | Swap window | Swaps to window number (listed in bottom left of terminal) ||
| PREFIX + c | Create window | Creates new window inside session |
| PREFIX + , | Rename window | opens interface to rename |

## Pane 

| Command | Action | Description |
| - | - | - |
| PREFIX + x | Exit pane | Closes the active pane |

# Further Advice

That's the basic setup done. We've simply installed tmux, an extra plugin for vim, and have rebound some keys to make it feel more like home. Just like with vim, it's best to not go too crazy with the customization and configuration before you've had a chance to play with the base program a bit. From use, you'll start to understand what plugins and further customizations are for you. You should DEFINITELY NOT download other peoples' configs and blindly install them. Look at other people's setups, but pluck from them what you like and always manually add it to your config file yourself. If you start blindly pasting stuff in, you'll lose track of your own settings and won't understand the beast that you create. 

There's one exception to this advice, which is regarding  colour and formatting customization. It's likely that any ricing that you did in your terminal or vim previously has been interfered with by tmux. Here's a [guide]() to help you understand what may have gone wrong and what you need to do to fix it. 

# Sources

- [tmux Cheatsheet](https://tmuxcheatsheet.com/)
- [Dream of Code tmux Guide](https://www.youtube.com/watch?v=DzNmUNvnB04)
- [Ham Vocke's tmux Quickstart Guide](https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)
