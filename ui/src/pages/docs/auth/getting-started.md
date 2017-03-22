---
title: "Getting Started"
description: "Allow users to authenticate using passwords, popular federated identity providers like Google, Facebook, GitHub, and more using WeDeploy™ Auth"
headerTitle: "Auth"
layout: "guide"
weight: 1
---

### Auth

###### {$page.description}

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="http://boilerplate-auth.wedeploy.io" target="_blank">
		<span class="icon-16-external"></span>See Live Demo
	</a>
</div>

<div class="guide-aux-cta">
	or read the <a href="https://github.com/wedeploy/boilerplate-auth/tree/js" target="_blank">source code</a>.
</div>

<article id="1">

## Install dependencies

This section assumes that you already have the **WeDeploy CLI** installed and **Docker** running. Make sure to [visit the installation guide](/docs/intro/using-the-command-line.html) if you need help setting that up.

We also feature code snippets using the API Client, [visit this guide](/docs/intro/using-the-api-client.html) in order to start using it.

</article>

<article id="2">

## Running locally

<ol>
<li>Start local infrastructure:</li>


```xml
we run

```

<li>Clone this repository:</li>

```xml
git clone -b js https://github.com/wedeploy/boilerplate-auth.git boilerplate-auth-js
cd boilerplate-auth-js

```

<li>Link this container with the local infrastructure:</li>

```xml
we link

```

<li>Now your container is ready to be used:</li>


```xml
http://authdemo.wedeploy.me

```
</ol>

</article>

<article id="3">

## Deploying to the cloud

<ol>
<li><a href="https://github.com/wedeploy/boilerplate-auth/fork">Fork this repository</a>.</li>
<li>Go to the <a href="http://dashboard.wedeploy.com">Dashboard</a> and create a project.</li>
<li>In the sidebar, click on <strong>Deployment</strong>.</li>
<li>Using your local machine, clone your Github fork:</li>

```xml
git clone -b js https://github.com/<username>/boilerplate-auth

```

<li>Get into the folder: <code>cd boilerplate-auth</code>.</li>
<li>Using the content on <strong>Deployment</strong> page. Add the WeDeploy remote url:</li>

```xml
git remote add wedeploy http://git.wedeploy.com/<projectID>.git

```
<li>Push your data to wedeploy git server: <code>git push wedeploy js:master</code>.</li>
<li>Once you see it in the Dashboard, your container will be ready to be used.</li>

```xml
http://boilerplate-auth.wedeploy.io

```
</ol>

</article>

<article id="4">

## Key capabilities

Easily add a complete sign-in system to your application. WeDeploy provides a ready-to-use auth solution that handles the UI flows for signing in users with email addresses and passwords, Google Sign-In, GitHub and Facebook Login.


**Email and password**

Authenticate users with their email addresses and passwords. Provides methods to create and manage users that use their email addresses and passwords to sign in, and sending password reset emails.

**Google**

Create a client id and client secret by [registering your application](https://developers.google.com/identity/protocols/OAuth2) on Google.

**GitHub**

Create a client id and client secret by [registering your application](https://github.com/settings/applications/new) on GitHub.

**Facebook**

Create an app ID by [registering your application](https://developers.facebook.com/docs/apps/register) on Facebook.

**Manage Users**

Create, delete or update users with a simple API.

</article>

<article id="5">

## Initializing auth service

By using WeDeploy API client you can initialize the authentication service by referencing its URL, like in the example below.

```javascript
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.me');
```

After initializing the authentication service URL, WeDeploy client stores its information for future calls.

Note that if you are initializing an auth service pointing to the Cloud you should use the proper domain:

```javascript
WeDeploy.auth('http://<serviceID>.<projectID>.wedeploy.io');
```

</article>

## What's next?

* Start learning about [environment variables](/docs/auth/env-variables.html).
