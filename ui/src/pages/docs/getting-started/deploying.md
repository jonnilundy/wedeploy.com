---
title: "Deploying your App"
description: "There are two main ways to push your project into deployment: "
headerTitle: "Getting Started"
layout: "guide"
weight: 2
---

# {$page.title}

###### {$page.description}

* [**WeDeploy Git**](#1) 
* [**GitHub**](#2)

<article id="1">

## Deploy with WeDeploy Git

##### 1. What you'll need 

* [Git](https://git-scm.com/) (download for [Linux](https://git-scm.com/download/linux), [macOS](https://git-scm.com/download/mac), [Windows](https://git-scm.com/download/win))

##### 2. Create

Go to the <a href="dashboard.wedeploy.com">dashboard</a>, and create a new project.

![Create Project](https://cloud.githubusercontent.com/assets/23219848/24177076/471ba72e-0e5d-11e7-93f0-c8e4410b115f.gif)

##### 3. Prepare

**I have my own project**

1. Reorganize your local project so that it reflects the [WeDeploy file structure](docs/intro/getting-started.md), namely that each service has its own folder and contains a `container.json` with an `id` and `type`. 
3. You also need to make sure that your project is a git repo. If not, run `git init` inside your project folder.

**I want to use your boilerplate**

We have prepared a [boilerplate](https://github.com/wedeploy/boilerplate) for you to download if you would like to not worry about the source files and just see the process of deploying.

```
git clone https://github.com/wedeploy/boilerplate.git
```

##### 4. Deploy

Now that your project is ready, you will push it to your dashboard project.

```
git remote add wedeploy http://git.wedeploy.com/<your-dashboard-project>.git
```
```
git add .
```
```
git commit -m "first commit"
```
```
git push wedeploy master
```

Go to the "Overview" section of your project's dashboard to see how it is already starting to deploy.

Now you can freely make changes to your project, and once you push the changes, it will automatically start deploying!

</article>

<article id="2">

## Deploy with GitHub

##### 1. What you'll need

* [Git](https://git-scm.com/) (download for [Linux](https://git-scm.com/download/linux), [macOS](https://git-scm.com/download/mac), [Windows](https://git-scm.com/download/win))
* A [GitHub](https"//github.com/) account

##### 2. Create

Go to the <a href="dashboard.wedeploy.com">dashboard</a>, and create a new project.

![Create Project](https://cloud.githubusercontent.com/assets/23219848/24177076/471ba72e-0e5d-11e7-93f0-c8e4410b115f.gif)

##### 3. Prepare

**I have my own project**

1. Reorganize your local project so that it reflects the [WeDeploy file structure](docs/intro/getting-started.md), namely that each service has its own folder and contains a `container.json` with an `id` and `type`. 
3. You also need to make sure that your project is being hosted in a GitHub repo and that you have pushed the recent `container.json` changes.

**I want to use your boilerplate**

We have prepared a boilerlate for you to use if you would like to not worry about the source files and just see the process of deploying.

* Fork the [Boilerplate](https://github.com/wedeploy/boilerplate)

##### 4. Deploy

Deploying with GitHub is as simple as linking your GitHub repo to your dashboard project (make sure you have pushed the `container.json` changes if you are using your own project). 

1. On your dashboard project, go to "Deployment"
2. Choose the GitHub method
3. Login to your GitHub Account and then select the repo of your project
4. Go to "Overview" on the dashboard and you will see the deployment automatically start

Now you can clone the repo to your local machine, make changes, push the changes, and see how it automatically starts deploying again.

</article>

## What's next?

* Now that you have deployed, learn more about using the [Dashboard](/docs/getting-started/using-the-dashboard.html).
