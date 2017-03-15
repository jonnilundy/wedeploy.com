---
buttonTitle: "My project is live"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
layout: "tutorial"
parentId: "hosting"
time: 5
title: "Deploying your service"
tutorialTitle: "Getting started with WeDeploy Hosting"
weight: 6
---

##### Deploying your project

Now its time to push your local files to your WeDeploy project.

First, add a git remote. Within `tutorial-hosting` on your command line, run: 
```
git remote add wedeploy http://git.wedeploy.com/<your-project-name>.git
```

Then make a first commit
* `git add .`
* `git commit -m "Awesome change"`
* `git push wedeploy master`

Go to the WeDeploy dashboard and select your project. On the right you should see the build log of your recent commit. 

Once you see "Deploy was successful" go to `<service-name>.<project-name>.wedeploy.io`.

Voilà! Your page is live! 
