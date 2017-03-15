---
buttonTitle: "My service is live"
description: "In this section, you'll learn how to enable WeDeploy Auth on your application."
layout: "tutorial"
parentId: "auth-js"
time: 5
title: "Deploying your service"
tutorialTitle: "Getting started with WeDeploy Auth using Javascript"
weight: 9
---

##### Deploying your project

Now its time to push these local files to your WeDeploy project.

First, add a git remote. Within `tutorial-auth-js` on your command line, run `git remote add wedeploy http://git.wedeploy.com/<your-project-name>.git`.

Then make a first commit. 
1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

Go to the WeDeploy dashboard and select your project. On the right you should see the build log of your recent commit. 

Once it says "Deploy was successful" go to <project-name>.wedeploy.io.

Voilà! Your page is live!
