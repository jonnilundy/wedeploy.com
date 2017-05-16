---
title: "Include API Client"
description: "In this section, you'll learn how to authenticate users on an iOS app using the WeDeploy Swift API Client."
buttonTitle: "I included the API Client"
tutorialTitle: "Getting started with WeDeploy Auth on an iOS app"
parentId: "auth-ios"
layout: "tutorial"
time: 30
weight: 5
---

#### Include API Client

Before we can make any requests to create or sign-in any users, we must connect the WeDeploy Swift API Client.

To do this, go to `tutorial-auth-ios/app/Podfile` and include this line inside the target function of this file:

```swift
pod 'WeDeploy'
```

After doing this, you have to install the dependencies on the project, to do that open a terminal in that folder and execute the next command:

```swift
pod install
```

You will see all the dependencies being installed