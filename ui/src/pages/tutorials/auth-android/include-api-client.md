---
title: "Include API Client"
description: "In this section, you'll learn how to authenticate users on an Android app using the WeDeploy API Client."
buttonTitle: "I included the API Client"
tutorialTitle: "Getting started with WeDeploy Auth on an Android app"
parentId: "auth-android"
layout: "tutorial"
time: 30
weight: 6
---

#### Include API Client

Before we can make any requests to create or sign-in any users, we must connect the WeDeploy Android API Client.

To do this, go to `tutorial-auth-android/app/tutorial-auth-android/app/build.gradle` and include this line inside the dependencies function of this file:

```text/x-groovy
compile 'com.wedeploy:com.wedeploy.android:beta-20170505'
```

After doing this, you have to sync the project and then a few seconds later you will see that the project is built correctly.
