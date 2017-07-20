---
title: "Clone Sample Repo"
description: "In this section, you'll learn how to deploy an application using WeDeploy Hosting."
buttonTitle: "I cloned the repo"
tutorialTitle: "Getting started with WeDeploy Hosting"
parentId: "hosting"
layout: "tutorial"
time: 20
weight: 4
---

#### Clone Sample Repo

First, you'll clone a sample repo that contains the necessary files and directories for hosting a static site.

To do this, run the command below in your terminal:

```xml
git clone https://github.com/wedeploy/tutorial-hosting.git
```

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
 	├── wedeploy.json
 	└── Dockerfile
```

</aside>
