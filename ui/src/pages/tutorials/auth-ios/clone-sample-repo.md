---
title: "Clone Sample Repo"
description: "In this section, you'll learn how to authenticate users on an iOS app using the WeDeploy Swift API Client."
buttonTitle: "I cloned the repo"
tutorialTitle: "Getting started with WeDeploy Auth on an iOS app"
parentId: "auth-ios"
layout: "tutorial"
time: 30
weight: 4
---

#### Clone Sample Repo

First, you'll clone a sample repo that contains the necessary files and directories for deploying an app with Auth.

Run this command in your terminal:

```
git clone https://github.com/wedeploy/tutorial-auth-ios.git
```

This project contains a folder named `app` that we will use to learn how to use the WeDeploy API client. This folder is not used by the WeDeploy infrastructure, but we have it here to make the example simpler by not using two different repos (one for WeDeploy project and one for the app).

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Building an app with multiple services is very easy with WeDeploy. Every directory that contains a `wedeploy.json` will be treated as a separate service. If a specific image type is not detected, we will scan the conents of the directory and deploy the service that is most like your source code (`package.json` = Node.js, `Dockerfile` = Custom Docker Image, `index.html` = static hosting).

```xml
yourApp
├── auth
│	└── wedeploy.json
├── db
│	└── wedeploy.json
└── Docker
 	└── wedeploy.json
 	└── Dockerfile
```

</aside>
