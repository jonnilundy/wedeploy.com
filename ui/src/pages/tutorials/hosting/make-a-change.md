---
title: "Make a Change"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I made a change"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 90
weight: 7
---

#### Make a Change

Our project is now live, but what's next? Let's try deploying a new change to our app!

###### Develop

Go back to your project and open up the `index.html` in your code editor. Change the text in the `<h1>` element (try putting "You Rock!").

###### Deploy

Go to `tutorial-hosting` in your terminal and deploy your project again:

```xml
we deploy --project projectID
```

**Note:** make sure to replace `projectID` with the id of your project.

###### See it live

Go to `hosting-<projectID>.wedeploy.sh` in your browser and see the changes you made!

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Wanting to make a pretty url for your primary UI service without purchasing a custom domain? Perfect, you can go to the _Custom Domain_ section of your service on the Dashboard and add a custom domain that ends with `wedeploy.io` (e.g. `yourapp.wedeploy.io`).

</aside>
