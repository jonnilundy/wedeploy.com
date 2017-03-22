---
title: "Getting Started"
description: "Serve static files easily using WeDeploy™ Hosting."
headerTitle: "Hosting"
layout: "guide"
weight: 1
---

### Hosting

###### {$page.description}

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="http://boilerplate-hosting.wedeploy.io" target="_blank">
		<span class="icon-16-external"></span>See Live Demo
	</a>
</div>

<div class="guide-aux-cta">
	or read the <a href="https://github.com/wedeploy/boilerplate-hosting" target="_blank">source code</a>.
</div>

<article id="1">

## Install dependencies

This section assumes that you already have the **WeDeploy CLI** installed and **Docker** running. Make sure to [visit the installation guide](/docs/intro/using-the-command-line.html) if you need help setting that up.

</article>

<article id="2">

## Running locally

WeDeploy provides a way to run your project locally using a sandbox system.

<ol>

<li>Start local infrastructure:</li>

```xml
we run
```

<li>Clone this repository:</li>

```xml
git clone https://github.com/wedeploy/boilerplate-hosting.git
cd boilerplate-hosting
```

<li>Link this container with the local infrastructure:</li>

```xml
we link
```

<li>Now your container is ready to be used:</li>

```xml
http://hosting.<projectID>.wedeploy.me
```

</ol>


Inside this project folder, you can find a `container.json` with the container ID used in this case: `hosting`.

</article>

<article id="3">

## Deploying to the cloud

<ol>

<li><a href="https://github.com/wedeploy/boilerplate-hosting/fork">Fork this repository</a>.</li>

<li>Go to the <a href="http://dashboard.wedeploy.com">Dashboard</a> and create a project.</li>

<li>In the sidebar, click on <strong>Deployment</strong>.</li>

<li>Using your local machine, clone your Github fork:</li>

```xml
git clone https://github.com/<username>/boilerplate-hosting
```

<li>Get into the folder: <code>cd boilerplate-hosting</code>.</li>

<li>Using the content on <strong>Deployment</strong> page. Add the WeDeploy remote url:</li>

```xml
git remote add wedeploy http://git.wedeploy.com/<projectID>.git
```

<li>Push your data to wedeploy git server: <code>git push wedeploy master</code>.</li>

<li>Once you see it in the Dashboard, your container will be ready to be used.</li>

```xml
http://hosting.<projectID>.wedeploy.io
```
</ol>

</article>

## What's next?

* Now you can learn about [environment variables](/docs/hosting/env-variables.html).
