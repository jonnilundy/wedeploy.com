---
title: "Include API Client"
description: "In this section, you'll learn how to send an email on Android using the WeDeploy API Client."
buttonTitle: "I included the API Client"
tutorialTitle: "Getting started with WeDeploy Email on Android"
parentId: "email-android"
layout: "tutorial"
time: 30
weight: 6
---

#### Include API Client

Before we can make any requests to create or sign-in any users, we must connect the WeDeploy Android API Client.

To do this, go to `tutorial-email-android/app/tutorial-email-android/app/build.gradle` and include this line inside the dependencies function of this file:

```text/x-groovy
compile 'com.wedeploy:com.wedeploy.android:beta-20170505'
```

After doing this, you have to sync the project, after a few seconds you will see that the project is built correctly.
