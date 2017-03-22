---
title: "Environment Variables"
description: "Use environment variables to control your app."
headerTitle: "Auth"
layout: "guide"
weight: 2
---

### {$page.title}

###### {$page.description}

<article id="1">

## Environment Variables

There are many ways to use environment variables in your app: a production app, a staging app, any number of test and local environments maintained by many different developers, or specific paths to build folders.

There are two ways to add these environment variables: local `container.json` file, the Dashboard.

##### Container.json

To add a variable to your source files, you just need to add the key and the value inside of the `container.json` file. 

```application/json
{
	"env": {
		"WEDEPLOY_AUTH_PASSWORD": "true"
	}
}
```

##### Dashboard

To add a variable on your dashbaord, you just need to navigate to **Dashboard** > **Services** > **Auth** > **Environment**.

![Dashboard](https://cloud.githubusercontent.com/assets/23219848/24171535/2c7119c4-0e42-11e7-9457-a182929b23da.png)

</article>

<article id="2">

## Environment Keys

Here is a list of all the Auth environment variable keys you can use.

| Key | Description |
| - | - |
| WEDEPLOY_AUTH_EMAIL_CONTENT | Set content for password reset email |
| WEDEPLOY_AUTH_EMAIL_REGEX | Validate an email with Regular Expression |
| WEDEPLOY_AUTH_FACEBOOK | Enable Facebook Auth integration |
| WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID | Facebook OAuth ID |
| WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET | Facebook OAuth password |
| WEDEPLOY_AUTH_GITHUB | Enable GitHub Auth integration |
| WEDEPLOY_AUTH_GITHUB_CLIENT_ID | GitHub OAuth ID |
| WEDEPLOY_AUTH_GITHUB_CLIENT_SECRET | GitHub OAuth password |
| WEDEPLOY_AUTH_GOOGLE | Enable Google Auth integration |
| WEDEPLOY_AUTH_GOOGLE_CLIENT_ID | Google OAuth ID |
| WEDEPLOY_AUTH_GOOGLE_CLIENT_SECRET | Google OAuth password |
| WEDEPLOY_AUTH_PASSWORD | Enable password Auth |
| WEDEPLOY_AUTH_SECURE_FIELDS | Select which Auth fields are secured |

</article>

## What's next?

* Learn how to allow users to [sign-in using their Facebook profile](/docs/auth/sign-in-with-facebook.html).
