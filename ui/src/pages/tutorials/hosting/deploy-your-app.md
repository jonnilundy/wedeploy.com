---
title: "Deploy Your App"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I deployed the app"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 90
weight: 6
---

#### Deploy the Project

Now the moment you have been waiting for - deployment!

Go to `tutorial-hosting` in your terminal and deploy your project:

```xml
we deploy --project projectID
```

**Note:** make sure to replace `projectID` with the id of your project.

Now go to `hosting-<projectID>.wedeploy.sh` in your browser and see your live page!

<aside>

###### <span class="icon-16-star"></span> Pro Tip

If you are deploying static files with no `wedeploy.json`, we will automatically choose a random service id for you. To choose the id of your hosting service yourself, add `--service serviceID` to the deploy command above with your custom id. It could look something like this:

```xml
we deploy --project myapp --service ui
```

</aside>
