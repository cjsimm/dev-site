---
title: 'UNIX System File Permissions - Basic Management'
summary: 'Information for beginners and a refresher for others on how to manage files permissions in UNIX based systems'
date: '2023-08-07'
---
UNIX-based operating systems handle file permissions in a sensible, logical, but slightly complicated manner. File permissions are broken down into a several sub-categories and are modifiable on multiple different scopes, opening up the opportunity to create complex and useful permission structures that help better insulate the security of the system against attacks from outside sources and the privacy of individual users within the system itself. 

When making the jump from a Windows system to a UNIX-based one, The increased complexity of the UNIX file permissions system  often becomes a stumbling block or a pain point for those used to the simple (and often insecure) Admin/User permission dichotomy of Windows operating systems. Almost every new UNIX user has had to google 'how to execute my shell script without sudo?' at least once in their computing career. Below is a quick-start guide for users new to UNIX permissions. It lays out the basics of the system and teaches you the key commands required to understand and modify your system's user and file permissions.

# File Permission Flags 

Every file on the system has a set of flags that control the permissions of the file. 3 distinct permissions exist: read, write, and execute. These values are fairly self explanatory. Read permission controls which users on the system can open the file, write controls who can modify it, and execute controls which users can run the file as an executable program. 

You can control reading, writing, and execution permissions of the file at 3 scopes
	- User (u) - permissions for the system user that is marked as the owner of the file (usually the creator)
	- Group (g) - permissions for the user group that the file is assigned to. Users on a UNIX system can belong to multiple groups, but will always have a primary, default group. When a user creates a file, their primary group will be automatically assigned as the user group for the file. 
	- Others (o) - permissions for anyone else that is not in the same user group as the file 

The permissions of the file for each of these scopes can be understood with either alphanumeric characters or octal numbers

| Value | Meaning |
|--|--|
| r | read |
| w | write |
| x | execute |
| 0 | no permissions |
| 4 | read |
| 2 | write |
| 1 | execute|

While managing permissions using alphanumerics is fairly clear, octal number management takes a little bit extra cognition. Managing permissions using octal numbers involves using the sum of the permissions that you wish to assign. Giving an entity all permissions for a file would involve passing the number '7' (4 + 2 + 1). Similarly, giving an entity only the permission to write and execute a file would involve passing the number '3' (2 + 1) into the command. 

# Viewing file permissions 

File permissions can be viewed in the command line by using the `ls` command with the `-l` flag added 

`ls -l file` or `ls -al`

listing permissions of files with the `ls -l` command will yield a result similar to this: 

`-rwxrw-r-- 1   gb   admin  123   Feb 03 17:31   file.txt`

Here's a breakdown of this output: 

| Portion | Meaning |
| -- | -- | 
| - | File type. "-" regular file, "d" directory, "l" symbolic link |
| rwx | permissions for the 'u' scope. file owner can read, write, and execute the file |
| rw- | permissions for the 'g' scope. group can read and write, but not execute the file |
| r-- | permissions for all others. others can read, but not write to or execute the file |
| 1 | the number of [[hard links]] to the file |
| gb | the file owner |
| admin | the group to which the file belongs |
| 123 | size of the file in blocks | 
| Feb 03 17:31 | date of last modification |
| file.txt | name of file |

# Managing Permissions 

## chmod

chmod (**ch**ange **mod**e) sets the permissions for files or directories. It modifies  the ownership (u), group (g) and/or others (o) permissions for a file:

`chmod {options} {permissions} {file name}`

We can use either the alphanumeric or octal method to change the permissions of the file. The command `chmod u=rwx,g=rx,o=r myfile` sets the permissions for the user to read, write, and execute, group to read and execute, and all others to read only. 

Using octal numbers can often produce a more concise command.
The command `chmod 754 myfile` sets the permissions of 'user' to read, write, and execute (4 + 2 + 1), 'group' to read, and execute (4 + 1), and 'other' to just read (4).

You can type --help to see additional options/flags that can be applied to a permission change. A flag commonly used is `-r` to recursively change the permissions for every file in a directory.

## chown

The `chown` command changes the ownership (u) and/or group (g) assignment of a file.

`chown [owner]:[group] [files]`

This can often be useful to use in daily tasks (i.e.. you create a file or directory of files while root but intend for the file to be used by your regular user account: `sudo chown gb myfiles`. 

The `chgrp` command also exists, but `chown` possesses the functionality to change both owners and groups assigned to a file if it is executed as root, so it's often more simple to just use `chown`. 

`sudo chown :newgroup myfile.txt`

In this example, a new owner is omitted and only a new group is assigned.

## id

You print all users, groups, and their ids on a UNIX system by using the `id` command. If you ever need a reminder of the users on the system, this is the ideal command to use. The `id --help` information summarises everything you need to know about its everyday usage in a a clear and concise manner  

# Common Pitfalls

**'I've downloaded a file to my system via a transfer protocol but can't access it without sudo'**
Always remember that files transferred from another UNIX system via a transfer protocol will likely have retained the user, group, and permission values from the original system and will probably  need to be changed before the file can be used. This problem often crops up when you are trying to execute a bash script or executable file from an outside source. 

**'I've changed the permissions on a file so that another user can use it, but they cant find it in the file system'**
Directories have permissions, too. Have the permissions for all parents in the directory tree leading to the file been changed so that the other user can reach the file? Users need a clear run of readable ('r') directories in order to access the file. Share the file path with them and ask them to try to 'cd' to it.  Depending on where the file is located originally, it's probably a good idea to move or copy it to a new directory structure that you feel comfortable sharing with others.

# Summary

There is plenty more to learn about file permissions and system security, but memorizing and becoming comfortable with the fundamentals detailed here will cover you for a large portion of the permission based activities when administering a UNIX based system. 

