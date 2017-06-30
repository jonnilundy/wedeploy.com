---
title: "Deploy Your App"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I deployed the app"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 90
weight: 5
---

#### Deploy Your App

Now the moment you have been waiting for - deployment!

###### Add a Git remote

Open up your terminal and go to the `tutorial-hosting` folder. Then, add a git remote by running:

```xml
git remote add wedeploy http://git.wedeploy.com/<your-project-id>.git
```

###### Push first commit

The remote is now set up and you are ready to make your first commit! 

1. `git add .`
2. `git commit -m "Awesome commit"`
3. `git push wedeploy master`

If it is your first time pushing to WeDeploy's git, you will need to enter the email and password for your WeDeploy account.

###### See it live

Once you have pushed, WeDeploy will immediately start deploying your project.

Give it a few moments and then go to `hosting.<your-project-id>.wedeploy.io` to see what you deployed! Pretty cool, right?

<figure>
	<img src="/images/tutorials/it-works.png" alt="It works!">
</figure>

<aside>

###### <span class="icon-16-star"></span> Pro Tip

You can always check the status of your deployment by going to the _overview_ section of your project's <a href="https://console.wedeploy.com" target="_blank">console</a>.

</aside>
