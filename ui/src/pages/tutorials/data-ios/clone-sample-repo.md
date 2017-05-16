---
title: "Clone Sample Repo"
description: "In this section, you'll learn how to save and get data on iOS using the WeDeploy Swift API Client."
buttonTitle: "I cloned the repo"
tutorialTitle: "Getting started with WeDeploy Data on iOS"
parentId: "data-ios"
layout: "tutorial"
time: 30
weight: 3
---

#### Clone Sample Repo

First, you'll clone a sample repo that contains the necessary files and directories for deploying a site with Data.

Run this command in your terminal: 

```
git clone https://github.com/wedeploy/tutorial-data-ios.git
```

This project contains a folder named `app` which the application that we will use to learn how to use the WeDeploy API client.  This folder is not used by the WeDeploy infraestructure but we have it here to make the example simpler and not using two different repos (one for WeDeploy project and one for the app).

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Every WeDeploy project follows a similar file structure by using JSON files to managing your project, service, and data path configurations.

```xml
your-project
├── data
│   ├── api.json
│   └── container.json
└── project.json
```

You can see a similar file structure in the repo you just cloned. Want to know more about <a href="http://wedeploy.com/docs/intro/configuration-files.html" target="_blank">configuration files</a>?

</aside>