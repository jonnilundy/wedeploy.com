---
title: "Deploying"
description: "Learning new deployment platforms can be kind of confusing. Let's simplify it for you."
headerTitle: "Intro"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<article id="1">

## How it works

The last thing any developer wants is to add a new tool that forces them to alter their work flow. This is why we've worked hard to build WeDeploy in a way that can fit right into your flow and fill the gaps needed to take your development to the next level. You can start hosting your static files, buildling a database, or even sending emails within a few minutes! 

When you push your local project to your WeDeploy project (don't worry, we will go over how to do that bellow), we scan your project for directories that contain `container.json` files. When we find one of these `container.json` files, we serve that whole directory as a part of the service you specified.

Let's say you have a project called `myApp` that uses the Hosting, Data, and Email WeDeploy services, this could be a file structure for that project.

```
myApp
├── data
│   ├── api.json
│   └── container.json
├── email
│   └── container.json
└── hosting
│   ├── container.json
│   └── index.html
└── project.json
```

These `container.json` files specify the unique ID of your service (`id`) and the type of image you want to deploy (`type`). 

```app/json
{
	"id": "ui",
	"type": "wedeploy/hosting:latest"
}
```

So what does the WeDeploy flow look like? As an example, we will show you how to deploy your own `hello world` site. There are three main ways to push your project into deployment: 

</article>

<article id="2">

## Setup source files

Before deploying, you must add a `container.json`, like shown above, and paste this code inside.

```
{
	"id": "hosting",
	"type": "wedeploy/hosting:latest"
}
``` 

**If you already have a project** of static files (HTML, CSS, or JS), you can add the `container.json` to the root directory of that project (wherever your `index.html` is). 

**If you don't already have a project**, don't worry about it. Just download this basic [hello world HTML file](https://gist.github.com/jonnilundy/df30e208dd1e84babf8b339ad2fbcbc9/archive/6d7bd9321c108bb4ed7c5ce4f3b79fb3b578c39a.zip), add it to a folder with the `container.json`, and you will be ready to go.

<aside>

###### <span class="icon-16-alert"></span> Attention

When you add more than one WeDeploy Services to your project, you must include a `project.json` in the root directory of the project and keep each service within a subfolder directly under that `project.json` (see file tree above). All you need to include in the `project.json` is the `id` of your project. 

```
{
	"id": "myApp"
}
```

See [here](/docs/intro/configuration-files.html) for other cool things you can do with your config files.

</aside>

</article>

<article id="3">

## Create project

Now that you have our local files ready, it's time to go to the [WeDeploy Dashboard](http://dashboard.wedeploy.com) and create a new project (and if you haven't already, a WeDeploy account).

To do this, open the [Dashboard](http://dashboard.wedeploy.com) and click "New Project" in the top right corner. Then give you project a name and click "Create Project".

![create new project](/images/docs/intro/deploying--create-project.png)

Great! Now you're project is ready for you to deploy your local files to it. 

</article>

<article id="4">

## Deploy

###### There are three ways to push your project into deployment.

* GitHub
* WeDeploy Git
* WeDeploy CLI

We will not be covering CLI deployment here, but you can learn all about it on our [Using The Command Line page](/docs/intro/using-the-command-line.html).

Also, make sure you have downloaded [Git](https://git-scm.com/) (Available for [Linux](https://git-scm.com/download/linux), [macOS](https://git-scm.com/download/mac), [Windows](https://git-scm.com/download/win)) in order to proceed either way, and make sure you have created [a GitHub account](https"//github.com/) if you want to proceed with the GitHub process.

##### GitHub

Deploying with GitHub is as simple as linking your GitHub repo to your project on the Dashboard. 

Before you do that, you must **push our new changes** (namely, adding the `container.json`) of our project to the GitHub repo.

1. Open your terminal to the project you prepared above and commit any changes you made. `git add . && git commit -m "prepare project for WeDeploy"`
2. Push changes to your GitHub repo. `git push origin master`

Perfect, now your GitHub repo is ready to be deployed. Next, you must **connect that repo to your WeDeploy project**.

1. On the [Dashboard](http://dashboard.wedeploy.com), go to your new project and click on "Deployment"
2. Choose the GitHub method
3. Login to your GitHub Account and then select the repo and branch that you just pushed to
4. Click "Connect Repository" and then go to "Overview" on top left of your screen. You will see the deployment automatically start.
5. Once it says "Deployed succesful!" and the Hosting Service shows "Online", you can click on the Hosting Service and then go to the link at the top of the page to see your site live!

Now you can freely make changes to your project, and once you push them to that same branch, it will automatically start deploying!

##### WeDeploy Git

Similar to the GitHub method, Git is very simple and easy, but instead of deploying via your GitHub repo, you can push directly to your project.

To proceed, make sure that your project is a git repo. If not, run `git init` inside your project folder.

In order to **push your local repo to your WeDeploy project**, you just need to add a new remote and push to it.

Open your terminal to the project you prepared above and run these commands:

1. `git remote add wedeploy http://git.wedeploy.com/<your-dashboard-project>.git` (this remote link can be found on the "deployment" page on the Dashboard of your project)
2. `git add .`
3. `git commit -m "first commit"`
4. `git push wedeploy master`

Perfect, now you can go to the "Overview" section of your project's dashboard to see how it is already starting to deploy.

Once it says "Deployed succesful!" and the Hosting Service shows "Online", you can click on the Hosting Service and then go to the link at the top of the page to see your site live!

Now you can freely make changes to your project, push the changes to that remote, and it will automatically start deploying!

</article>

<article id="5">

## Tutorials

We have created a whole array of tutorials to teach you how to start using WeDeploy. Click on one of the links bellow that interests you to begin!

**WeDeploy Services (Web)**

* **<a data-senna-off target="_blank" href="/tutorials/hosting/">Hosting</a>**: Deploy static files like HTML, CSS, and JS.
* **<a data-senna-off target="_blank" href="/tutorials/data-web/">Data</a>**: Deploy a to-do list app using our Data Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/auth-web/">Auth</a>**: Deploy an authentication app using our Auth Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/email-web/">Email</a>**: Deploy an email-sending app using our Email Service and JS.

**WeDeploy Services (Android)**

* **<a data-senna-off target="_blank" href="/tutorials/data-android/">Data</a>**: Deploy a to-do list app using our Data Service and Java.
* **<a data-senna-off target="_blank" href="/tutorials/auth-android/">Auth</a>**: Deploy an authentication app using our Auth Service and Java.
* **<a data-senna-off target="_blank" href="/tutorials/email-android/">Email</a>**: Deploy an email-sending app using our Email Service and Java.

**WeDeploy Services (iOS)**

* **<a data-senna-off target="_blank" href="/tutorials/data-ios/">Data</a>**: Deploy a to-do list app using our Data Service and Swift.
* **<a data-senna-off target="_blank" href="/tutorials/auth-ios/">Auth</a>**: Deploy an authentication app using our Auth Service and Swift.
* **<a data-senna-off target="_blank" href="/tutorials/email-ios/">Email</a>**: Deploy an email-sending app using our Email Service and Swift.

**Other**

* **<a data-senna-off target="_blank" href="/tutorials/java/">Java</a>**: Deploy an app using Java and Spring Boot.
* **<a data-senna-off target="_blank" href="/tutorials/ruby/">Ruby</a>**: Deploy an app using Ruby and Sinatra.
* **<a data-senna-off target="_blank" href="/tutorials/nodejs/">Node.js</a>**: Deploy an app using Node.js and Express.
* **<a data-senna-off target="_blank" href="/tutorials/liferay/">Liferay</a>**: Deploy a Liferay Portal instance.

</article>
