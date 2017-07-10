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

Deploying your app shouldn't be a slow process of configuration and setup. In fact, it shouldn't even be quick, it should be instant. 

That's why we built **WeDeploy Instant Deployment**, our lightning-fast, zero-configuration CLI deployment flow.

##### 1. Download the CLI

In your terminal, run this command:

```
curl http://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash
```

##### 2. Deploy instantly

Open your terminal to the project you want to deploy and run `we deploy`. This will immediate start building and deploying your folder based on the files inside. Follow the prompts in your terminal in order to open your new project url in any browser.

**If you don't have a project** ready to deploy, you can download this simple [hello world HTML file](https://gist.github.com/jonnilundy/df30e208dd1e84babf8b339ad2fbcbc9/archive/6d7bd9321c108bb4ed7c5ce4f3b79fb3b578c39a.zip), move it to its own folder, and run `we deploy` from there.

</article>

<article id="2">

## Continuous Deployment

**WeDeploy Continuous Deployment** is powered by our handy [GitHub](htps://github.com) integration that triggers a new deployment every time you push changes to the designated branch of your repo. It has zero configuration and will greatly speed up your development flow.

##### 1. Create project

1. Go to the [WeDeploy Console](console.wedeploy.com)
2. Click on "New Project" in the top right corner of the screen
3. Type a desired project name and then click "Create Project"

##### 2. Link GitHub repo

1. On your project's console, click on "deployment"
2. Go to "GitHub" (if its your first time, you will need to connect your GitHub)
3. Select the repo and branch that you deployed to
4. Click "Connect Repository"

Now go to the "Overview" section on your Dashboard so you can see the deployment in progress.

**Note:** If you don't have a project, then download this simple ["hello world" HTML file](https://gist.github.com/jonnilundy/df30e208dd1e84babf8b339ad2fbcbc9/archive/6d7bd9321c108bb4ed7c5ce4f3b79fb3b578c39a.zip), push it to a GitHub repo, and link that repo with the steps 1-4 above.


##### 3. Push. Deploy. Repeat.

Now that your project is live, you can continue to push your future changes to that same branch of your repo and WeDeploy will automatically start another deployment every time.

</article>

<article id="3">

## Tutorials

We have created a whole array of tutorials to teach you how to start using WeDeploy with simple, step-by-step instructions. Click on one of the links below that interests you to begin!

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
