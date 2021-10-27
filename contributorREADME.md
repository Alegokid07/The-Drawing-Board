# For those wanting to contribute

So you want to contribute to the pack, but may be confused on how to do it? Well we have made this repository specifically so that editing can be done with ease and commits can be done with almost no effort.

Try to use .gitignore to get rid of any extra files, such as launcher configs, **BEFORE** you pull.

# Installation

This will work for just about any launcher. But keep in mind, that right now we **only** have gitignore set up for GDLauncher. If you would like to update it to support many launchers, go ahead.

## Prerequisites

You will need Git, and Github Desktop would also be nice to allow for easy commits with a helpful interface. But not needed.

You will also need any launcher. Preferably GDLauncher, as that's what I did it on, but just about any launcher will do.

Also you may want to fork the repository.

Downloads:

    - Git: https://git-scm.com/downloads
    - Github Desktop: https://desktop.github.com/
    - GDLauncher: https://gdevs.io/#downloadContainer

Additional Note: DO NOT LAUNCH THE INSTANCE BEFORE YOU HAVE COMPLETED EVERYTHING!

## Set up the instance

You will need to set up an instance through your launcher with the latest **1.16.5** Forge. This varries from launcher to launcher. For GDLauncher:

    - Click the little plus at the bottom left of the launcher
    - Click on the dropdown for "Select a version"
    - Select "Forge", then 1.16.5, then the topmost version.
    - Click the arrow at the bottom right.
    - Name it whatever you want.

## Import the repository

Open up the instance folder. This may varry from launcher to launcher, for GDL simply right click the instance and select "Open Folder"

Next, right click anywhere in the folder and select "Git Bash Here", a command prompt look-alike should come up. Use the following commands to import everything you need:

```
git init                        # Will initialize a Git Repository
git remote add origin <URL>     # Set remote origin to your repository (in the form of an HTTPS link)
git remote -v                   # Verify remote
git fetch
git checkout <branch>           # Set to a branch (IMPORTANT! IF YOU DONT DO THIS, IT WILL BE A BASICALLY EMPTY REPOSITORY!)
git pull                        # (Optional) Ensures its up to latest
```

So for us who work on the pack, we would replace `<URL>` with `https://github.com/Alegokid07/The-Drawing-Board` and `<branch>` would be `main`

## Import into Github Desktop

In Github Desktop, click on the top left where it says "Current Repository" and go down to "Add"

Select "Add existing repository..." and input the path to which your instance is located.

If you did this through GDL, it will be located at (by default): `C:\Users\<user>\AppData\Roaming\gdlauncher_next\instances\<instance_name>`

Happy coding!