---
title: "Add Config Files"
description: "In this section, you'll learn how to authenticate users on an Android app using the WeDeploy API Client."
buttonTitle: "I added the config files"
tutorialTitle: "Getting started with WeDeploy Auth on an Android app"
parentId: "auth-android"
layout: "tutorial"
time: 60
weight: 5
---

#### Add Config Files

Since every service folder must have a `wedeploy.json` file that configures the service, let's add one to our Auth Service in the repo we just cloned.

##### Auth

1. Open the `tutorial-auth-android` folder in a code editor.
2. Create a new file named `wedeploy.json` inside the `auth` folder.
3. In that file, paste this code:

```application/json
{
	"id": "auth",
	"image": "wedeploy/auth:beta",
	"env": {
		"WEDEPLOY_AUTH_SECURE_FIELDS": "password",
		"WEDEPLOY_AUTH_PASSWORD": "true"
	}
}
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

One of the awesome things you can do in your `wedeploy.json` file is add environment variables. There are many ways to use these; one example is to provide Google sign-in for your users.

```application/json
{
	"id": "auth",
	"image": "wedeploy/auth:beta",
	"env": {
		"WEDEPLOY_AUTH_SECURE_FIELDS": "password",
		"WEDEPLOY_AUTH_PASSWORD": "true",
		"WEDEPLOY_AUTH_GOOGLE": "true",
		"WEDEPLOY_AUTH_GOOGLE_CLIENT_ID": "<your-google-app-id>",
		"WEDEPLOY_AUTH_GOOGLE_CLIENT_SECRET": "<your-google-app-secret>"
	}
}
```

See the full list of <a href="/docs/auth/environment-variables.html" target="_blank">Environment Variables for Auth</a>.


</aside>
