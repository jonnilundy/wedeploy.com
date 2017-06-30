---
title: "Make a Change"
description: "In this section, you'll learn how to deploy an application using WeDeploy Java."
buttonTitle: "I made a change"
tutorialTitle: "Getting started with WeDeploy Java"
parentId: "java"
layout: "tutorial"
time: 90
weight: 6
---

#### Make a Change

Our project is now live, but what's next? Let's try deploying a new change to our app!

###### Develop

Go back to your project and open up the `/src/main/resources/templates/layout.html` in your code editor. Change the text in the `<h1>` element (try putting "You Rock!").

###### Push

Now make another commit and push your changes to the WeDeploy remote!

1. `git add .`
2. `git commit -m "update header"`
3. `git push wedeploy master`

###### See it live

Give it a few moments and then go check your project's URL again. You should see the text change to "You Rock!" because let's be honest, you do!

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Want to make your Java Service the primary service so that it is served to your project's root url (`<your-project-id>.wedeploy.io`)? Perfect, that is extremely easy to do. Go to the settings tab of your project's console and select _java_ as your _Home Service_.

</aside>
