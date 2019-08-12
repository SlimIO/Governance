
# This document contains best practices and tips for using git in a team.

## 1. Adding a new feature on a Slimio project.

`To be able to allow the people who maintain the slimio project to work correctly, it is imperative that each master branch of each project is free, nobody must be working on it, for that you need to create a branch other than master on the project in question, do your job, then merge your branch with the master, this will avoid conflicts in case of project review..`

So at first, you must be sure that the project is up to date.

```bash
$ git pull
```

>Then you have to create a branch and go in it.

```bash
$ git checkout -b my_amazing_feature
```

>You can now create your feature

When finished, you can push your work on the branch, you just have to merge your branch with the master branch.