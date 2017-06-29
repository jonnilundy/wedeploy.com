---
title: "Getting Started"
description: "Provide authentication using email/password or popular third-party identity providers like Google, Facebook, and GitHub."
headerTitle: "Auth"
layout: "guide"
weight: 1
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

Our Auth service allows you to avoid the headache of operating your own user management system. Features like creating accounts, resetting passwords, and updating profiles are easily accomplished with a few lines of code using our SDKs.

</article>

<article id="2">

## Try it yourself

Want to see the whole process of deploying an app with WeDeploy Auth?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/auth-web" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-auth.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="3">

## Configurating

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with Git or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is an example of a `container.json` for an Auth container.

```application/json
{
	"id": "users",
	"type": "wedeploy/auth:latest"
}
```

The `id` for your services are uniquely determined by you.

</article>

<article id="4">

## Initializing

You can start authenticating users by referencing the URL of your Auth service within your project.

**Local Development (.me)**

```javascript
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.me');
```
```swift
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.me');
```
```text/x-java
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.me');
```

**Cloud Development (.io)**

```javascript
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.io');
```
```swift
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.io');
```
```text/x-java
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.io');
```

<aside>

###### <span class="icon-16-alert"></span> Attention

You can only point to your cloud url (`.io`) once you have initializing your Auth service in your WeDeploy project. To do this, you can either deploy a project with the necessary files to initialize an Auth container, or create one directly from your project's <a href="http://dashboard.wedeploy.com">Dashboard</a>.

</aside>

</article>

## What's next?

Now you're ready to **[start managing your users](/docs/auth/manage-users.html)**.
