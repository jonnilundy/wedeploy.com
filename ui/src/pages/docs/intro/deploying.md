---
title: "Deploying"
description: "Learning new deployment platforms can be kind of confusing. We want to simplify it for you."
headerTitle: "Intro"
layout: "guide"
weight: 4
---

### {$page.title}

###### {$page.description}

<article id="1">

## Instant Deployment

When you have a simple static site, deploying shouldn't be a slow process of configuration and setup. In fact, it shouldn't even be quick, it should be instant. 

That's why we built **WeDeploy Instant Deployment**.

##### 1. Download the CLI

In your terminal, run this command:

```
curl http://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash
```

##### 2. Go to your project

Now that you have the WeDeploy CLI installed, you can go to the root folder of your project and get ready for the magic to start. 

**If you don't have a project** ready to deploy, you can download this simple [hello world HTML file](https://gist.github.com/jonnilundy/df30e208dd1e84babf8b339ad2fbcbc9/archive/6d7bd9321c108bb4ed7c5ce4f3b79fb3b578c39a.zip), move it to its own folder, and deploy from there.

##### 3. Deploy instantly

Now the moment you've been waiting for. With your terminal open to the project you want to deploy, just run `we deploy` and it's live! Follow the prompts in your terminal in order to open your new project url in any browser.

</article>

<article id="2">

## Continuous Deployment

Continuous Deployment is powered by our handy [GitHub](htps://github.com) integration that triggers a deploy on your project everytime you push changes to the designated repo branch. It is super easy to setup and greatly speeds up your development flow.

##### 1. Setup project

To Start, create a new folder wherever you want to your project to live. Inside that folder, you must create a new file and name it `container.json`. This is the primary config file that you will use in all your WeDeploy projects to designate what service you want to deploy (and some other [fun configurations](/docs/intro/configuration-files.html)). 

Inside that `container.json`, paste this code.

```
{
	"id": "ui",
	"type": "wedeploy/hosting:latest"
}
```

##### 2. Add files and push

So you're empty project is ready to deploy, but we want to make it more interesting by **adding our own static files** for WeDeploy to serve. 

* **If you already have a project** of static HTML, CSS, and JS files, you can paste those into the folder (making sure that your `index.html` is on the same folder level as the `container.json`).

* **If you don't have a project**, then download this simple ["hello world" HTML file](https://gist.github.com/jonnilundy/df30e208dd1e84babf8b339ad2fbcbc9/archive/6d7bd9321c108bb4ed7c5ce4f3b79fb3b578c39a.zip), and add it to the folder we created above.

Now you can **push your project** to a GitHub repo. Run these commands in a terminal within your project folder.

1. `git init` (if you haven't already)
2. `git add .`
3. `git commit -m "first commit"`
4. `git push origin master` 

##### 3. Create project and Deploy

Now that your local files are ready, we must **create a project** inside the WeDeploy Console before we can deploy. 

1. Go to the [WeDeploy Console](console.wedeploy.com)
2. Click on "New Project" in the top right corner of the screen
3. Type a desired project name and then click "Create Project"

Now all we need to do is **link this WeDeploy project with the GitHub repo** that you just pushed to.

1. On your project's console, click on "deployment"
2. Go to "GitHub" (if its your first time, you will need to connect your GitHub)
3. Select the repo and branch that you deployed to
4. Click "Connect Repository"

Now WeDeploy will automatically start deploying your files from the repo. You can go back to "Overview" to see the activity of the deployment. Once it is ready, select the "ui" service and then click the link at the top of the page. This will take you to your live page!

</article>

<article id="3">

## Tutorials

We have created a whole array of tutorials to teach you how to start using WeDeploy with simple, step-by-step instructions. Click on one of the links bellow that interests you to begin!

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
