---
title: 'Learning Vim Painlessly'
summary: 'Modern tools have made the learning curve of the famous editor much gentler'
date: '2023-07-23'
---

When I was learning [vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) I read a lot of articles and watched a lot of youtube videos about how best to go about it. I tried the classic vim tutorial text file, I used [this neat website](https://vim-adventures.com/) to turn learning into a game, and nothing seemed to work. I was trying to do everything except for do what needed to be done. I needed to use the program. The problem that everyone faces, however, is that it's difficult to get started. Basic computing operations that have become second nature to you have to be relearned as you try to shift to a mouseless paradigm, and when you get overwhelmed and try to retreat to the safety of the desktop, you're likely to be made to feel a fool when you cant even figure out how to quit the program. 

This isn't the right way to get started with vim. Dumping your current code editor and switching to vim cold turkey is a terrible idea. Unless you're the right kind of person, this approach will end in failure. Approaching learning vim in repetitive, short bursts and finding a self-contained project that assisted my learning was what really finally cracked the nut for me. I'm going to share with you my methodology here. 

Learning vim is difficult, but it's not difficult because vim motions are difficult - they're actually very easy and intuitive. The bindings are usually based on mnemonics that are easily recalled and can be logically combined together to execute extremely powerful commands with minimal input. Vim is difficult because it's a time investment, and it's a time investment that damages productivity in other areas of your life. The speed and intuitive nature of vim motions only becomes apparent once they've been committed to muscle memory. Initially, using vim motions is slow. Very slow. Every edit feels like a struggle and it's difficult to even move around inside the file.  

If you follow the methodology detailed here, the painful process will be compartmentalised into manageable chunks that minimize the effect the learning process has on the rest of your interaction with the computer. You will improve. First slowly, and then, *rapidly*. The basic movements will become second nature, and then you'll be able to get started with learning truly efficient ways to move around the file and make changes. 
# Installation

You're going to install two implementations of vim. The first is the [vim plugin](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) for VSCode (or the equivalent in your default editor). The second is [neovim](https://neovim.io/).  Follow the relevant installation instructions for you on their website. 

If you are using windows and are not interested in using chocolatey or one of the other package manager implementations on your system, that leaves you with only the choice to install a GUI implementation of neovim that doesn't particularly keep to the spirit of the program. Instead of doing this, I would recommend that you install Windows Subsystem for Linux (WSL) and install neovim inside an ubuntu image for this project. This might increase your initial setup time and require a bit of extra learning (if you're not familiar with Linux already) but will greatly aid you in getting acquainted with terminal-vim interaction. Here's a guide from Microsoft on how to get started with [WSL](https://learn.microsoft.com/en-us/windows/wsl/install). Otherwise, get your copy of neovim and the VSCode plugin installed and you're good to go. 

## The ABSOLUTE basics

For the learning method to work, you need to first learn a very small amount about how vim works and a few basic commands. 

Vim works via modes. Each mode offers a different set of functionality. There are 4 primary modes that we are concerned with when it comes to learning vim. There are actually a lot more niche modes buried inside the program, but let's not concern ourselves with them for now. 

- Normal mode - the default mode of vim. This is the home mode that you'll make your edits from. Hitting `Esc` and leaving another mode will always return you to normal mode. 
- Insert mode   - This is the mode for inputting and editing text in the document. It functions similarly to other text editing programs that you are used to.  Enter it with `i` exit it with `Esc` or `ctrl + c`
- Visual Mode - This is the mode for highlighting text and then manipulating that highlighted text. Whenever you need to use the mouse to drag and highlight text in another editor, visual mode in vim is the go-to for these tasks. 
- Command mode - hitting the `:` key while in normal or visual mode will activate the command mode, where you can control the currently open file and vim itself. This is where you can perform actions such as writing to disk, and quitting the program. Execute all commands by hitting `Enter` (`<CR>` in vim terminology).

## Keybind Crash Course 

There are more bindings in the cheatsheet below, but don't read them yet. Learn the bare minimum and get started with the learning methodology. 

### Movement

Basic cursor movement in vim is performed with `hjkl` (left, down, up, right). While in insert mode, you can use the arrow keys instead. This, like the entire program, will feel unintuitive at first. 

You can move multiple spaces with one of the movement keys by prepending a number. Entering `4j` while in normal mode will move you 4 lines down, for example.

As mentioned above, `i` enters insert mode. `v` enters visual mode. Hit `esc` to get back to normal mode at any time (you might need to hit it multiple times if you are mid-command)

**Always try to perform your navigation in normal mode**. Relying on another mode such as insert to navigate the document is a common beginner mistake. Move to your target edit in normal mode and *then* move into insert or visual mode to make your changes. 

### Commands

`:w` - writes your current changes to disk
`:q` - quit the program. Combine with `:w` to make `:wq` if you want to save your changes and quit (here you can see the key-combo feature of vim in action). If you want to abandon your changes, use `:q!` 

This is all you need for now. Open an existing file and play around a bit. Make sure to quit with `:q!` 

You can move, you can insert text, you can save that text, and you can quit. You are now technically a vim user. Congratulations! It's going to be slow and you'll immediately reach for the mouse to interact with the program. It's understandable - you need to unlearn your fundamental methodology for interacting with a computer. Try to resist. The learning methodology detailed below will help you deal with this. 

From here on, I recommend that you follow this advice at all times:

**1. Save often**

Write to disk (`:w`) after every damned line you successfully input. When you inevitably mess up and get lost inside some deep command tree that changes your file in a manner which you did not plan, saving often will prevent you from losing a bunch of successful changes that came before it. 

If you save after every successful change you make, when you do get lost in a command tree or make a silly mistake you can just spam that escape button and try to get back to normal mode. Then, using `:q!` will quit the program without writing any of the horrific changes that you just made to your file. 

**2. Constantly question your methodology**

If you had no prior knowledge of vim motions before reading this article, you should know that these few commands that I've given you vare scratch the surface in terms of vim functionality. It's barely enough to get anything done. You should not be afraid to immediately start asking questions with google and chatGPT such as 'how do I navigate a file in vim' to get a few more of the basic commands under your belt. We'll introduce a way to keep track of your research in due course.  

# Methodology 

The power of vim comes with muscle memory. Ergo, the fastest way to get good at vim is to commit things to this muscle memory. It's going to come with repetition, but the key is to balance your commitment to learning by repetition with your desire to be a productive human being. So, we're going to take inspiration from flashcard systems and spaced repetition theory to do this in a comfortable and relaxed manner. 

You're going to use your vim plugin inside your preferred editor to edit code/text files for up to 15 minutes a day, but you're going to do it every day. This is one scope of our repetition approach. You need to practice consistently, on an extremely regular basis. Treat it like you would learning a musical instrument. If you don't practice, you wont commit your learning to memory. 

Don't feel honour-bound to stick to 15 minutes.  Your first tango with vim motions will be difficult and perhaps you'll only make it 5 minutes before you want to stop. That's fine. Stop using it each day as soon as you start to feel overwhelmed or sick of being slow and go back to your regular workflow. You'll come back tomorrow and pick up where you left off. *Marathon*. Not a race.  Conversely, once you've been practicing for a week or so, 15 minutes might not feel frustrating at all. In that case, keep working in Vim until it does.

Daily regimented use. Easy. Simple. Kind of obvious and not really worth an article, right? Pair it with a vim-only project to get good quickly. 

You're going to use two implementations of vim while learning. First, you're going to use the vim plugin in your chosen editor to do your work, whether that's programming or anything else, for up to 15 minutes a day. Along with this, however, you're also going to work on a project using a fully-fledged vim implementation. 

Your 15 minute of daily vim use will work in a stop-clock style. Whenever you get stuck while using the vim plugin inside your editor, you're going to use Google, or ChatGPT,  or any other reference to figure out how to do whatever it is you want to do. After you apply your research to get what you needed to do done, you're going stop editing and immediately add it into a markdown cheatsheet of your own creation. You're going to create, write, and edit this cheatsheet using your *native* installation of vim. 

Whenever you learn anything new, you're going create a new cheatsheet entry, and when you forget how to do something that you have learnt previously, you're going to open your cheatsheet inside vim and navigate to the entry you're looking for using the program. Vim and vim motions will be the main tool for you to create a library of reference for your learning and search through it for answers. Using this method, you're going to commit the basic motions of vim to muscle memory by navigating often through an ever expanding file, and commit the more complex commands to memory by building out your own cheatsheet/flashcard system that you can refer to easily. 

Obviously, the timer doesn't need to be precisely kept to. Judge yourself roughly how long you spend editing with the plugin version or vim and finish. Just make sure that you don't start considering your cheatsheet contributions part of your session time. 

The act of cataloging all of your learned commands will get faster and easier over time as you establish a preferred file structure and get stronger with the basic motions, but the act of cataloging every new vim feature that you learn is the *KEY* to getting good with it. It's a repetitive action that requires relatively basic commands, and it will help you get good with the most important motions that you need to learn. 

You don't need to write your cheatsheet in a markdown format. Write it any way you like. I just happen to take all of my notes in markdown format nowadays for compatibility with the excellent markdown app [Obsidian](https://obsidian.md/) (which also also a vim mode, by the way!).

If you don't know how to use markdown, I'll tell you now that it's very easy. Here's a [link](https://www.markdownguide.org/cheat-sheet/) to a full cheatsheet if you need it, but you should only need to know 3 markdown concepts for this project:

- Create headers with '# \<Title>'. The more '#'s in your header, the lower priority in the flow of the document (like \<h1> \<h2> \<h3> etc in HTML). '##' headers will be nested inside the closest parent '#'' header
- Create code blocks with \`  \` 
- Create tables like so: 
```
| <HEADER NAME 1> | <HEADER NAME 2> | <HEADER NAME 3> |
| --- | --- | --- |
| table entry | table entry | table entry | 
```

Don't think too carefully about how to build your document, just start doing it. You can always come back and refactor/improve the structure later. Editing and refactoring the structure of the file multiple times as it grows in size will give you useful experience with manipulating large portions of text with vim commands. 

As your cheatsheet grows, look to it as a first reference when you get stuck in your editor. You'll inevitably forget ground that you've already covered in your learning journey. Opening your cheatsheet in vim and navigating to find the answer will only give you more vital practice with motion commands. 

That's it. That's all you have to do. 15 minutes of editing a day with a vim plugin, stopping when you start to get frustrated. When you learn *anything* new, make a cheat sheet entry. When you've forgotten how to do something, check your cheatsheet. It really is that simple. It took me a week of doing this (less than 2 hours of session stop clock time) to get confident with vim. 

You can see my cheatsheet at the end of the article. I don't add to it very often anymore. In fact, I stopped adding to it regularly the moment that I made vim motions my primary editing method because once you've gotten confident with the basics, it becomes incredibly easy to commit more advanced keybinds and tricks to memory without needing a reference. You'll know when the right time is to end your cheatsheet project. Just make sure that you contribute to it diligently until then.  
# Tips and Advice 

## Tricks are subjective 

Don't be afraid to put relatively simple commands in your document when you start out. Your definition of a 'trick' in vim will become increasingly complex as time goes on. But there's no shame in considering a key combo like `dd` a 'trick' when you first begin. If you think it's neat and you want to remember it, add it in.
Further to this, your cheatsheet should be well structured, but never remove anything in order to improve that structure. You'll get good with visual mode and moving around large amounts of text by constantly having to restructure your document as things become cluttered. This is why the cheatsheet project is such a useful one - It forces you to engage with all of the modes and a wide range of commands. 

## Don't leave frustrated

Never end your learning period stuck on something (unless it's really difficult).  The end of your daily vim learning  should *always* be adding another entry into your cheatsheet. Leave your learning session satisfied that you've solved a problem.

## If it feels clunky, there's a better way

Editing text with vim should be smooth. The key to expanding your vim motion toolkit is to adopt the mentality that if the operation you're doing isn't smooth, there's a better way.    

Here's an example that you will encounter early in your journey, just beyond learning how to jump around words using keys like `w` and `b` instead of using `hjkl` 

Most beginners change a whole word by jumping to the end of it, entering insert mode, and backspacing until it's gone.  New users naturally start to think  'why does such a common operation have such a *clunky* solution?' It's a sign that there's a better way. `ciw` (change inner word) will erase the word your cursor is currently inside and put you into insert mode to write a new one. Much better. 

## Get bored before you get smart

Don't try to determine the most efficient solution every time you get stuck. Before you really start to get comfortable with common tasks, just focus on getting it done. There are *incredibly* efficient ways to make changes to files using vim (especially when you want to make changes to multiple lines at once), but only go looking for these solutions once you know how to do it in the repetitive, manual way. The appropriate moments to search for advanced solutions will naturally open up to you once you've committed the basic commands to memory. 
You'll know that you're ready for an advanced solution to a problem when you're mid task (say, for example, commenting many lines of code) and you're bored of whatever repetitive action it is that you're doing.  Boredom implies familiarity and comfort. The feelings of confusion and boredom are the signs that it's time for you to look something up, either to learn a new solution, or improve an existing one that you have. 

## Don't just add keybinds

The cheat sheet is a collection of both concepts and keybinds. Write paragraphs of text to make note of a concept if you need to. Don't be concerned with sticking to official vim terminology. I've actually found that a lot of vim terminology can be overly complex and difficult to remember. Simplify where you can. Write whatever helps you internalize the information best. 
