---
title: "Clone Sample Repo"
description: "In this section, you'll learn how to deploy an application using WeDeploy Java."
buttonTitle: "I cloned the repo"
tutorialTitle: "Getting started with WeDeploy Java"
parentId: "java"
layout: "tutorial"
time: 20
weight: 3
---

#### Clone Sample Repo

First, you'll clone a sample repo that contains the necessary files and directories for deploying a site.

To do this, run the command below in your terminal:

```xml
git clone https://github.com/wedeploy/tutorial-java.git
```

In this example, we'll use [Spring Boot](https://projects.spring.io/spring-boot/) as our web framework. Don't worry if you've never used this before, there's no need to learn or download anything.

<aside>

###### <span class="icon-16-star"></span> Pro Tip

Every WeDeploy project follows a similar file structure by using JSON files to manage your project and service-level configurations.

```xml
your-project
├── email
│   └── wedeploy.json
├── java
│   ├── wedeploy.json
│   └── pom.xml
└── project.json
```

Want to know more about <a href="/docs/intro/configuration-files.html" target="_blank">configuration files</a>?

</aside>
