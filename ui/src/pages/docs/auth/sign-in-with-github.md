---
title: "Sign-in With GitHub"
description: "You can let your users authenticate using their GitHub Accounts by integrating GitHub Sign-In into your app."
headerTitle: "Auth"
layout: "guide"
weight: 4
---

### {$page.title}

###### {$page.description}

<article id="1">

## Sign-in with gitHub

To sign in by redirecting to the sign-in page, call `signInWithRedirect`:


```javascript
var auth = WeDeploy.auth();

var provider = new auth.provider.Github();
provider.setProviderScope("user:email");

auth.signInWithRedirect(provider);

auth.onSignIn(function(user) {
	// Fires when user is signed in after redirect.
});
```

</article>

<article id="2">

## Setup app client id and secret

Create a client id and client secret by [registering your application](https://github.com/settings/applications/new) on GitHub. 

<aside>

Please be sure to add the callback url `http://<auth-container-id>.<project-id>.wedeploy.io/oauth/token` in your application.
For local development, use `wedeploy.me` instead. To use with custom domains you can change the sufix `<project-id>.wedeploy.io` for your domain.

</aside>

After retrieving the client id and client secret you can configure them as environment variables of the authentication `container.json`.

```application/json
{
	"id": "auth",
	"name": "Auth",
	"type": "wedeploy/auth",
	"env": {
		"WEDEPLOY_AUTH_GITHUB": "true",
		"WEDEPLOY_AUTH_GITHUB_CLIENT_ID": "<your-github-client-id>",
		"WEDEPLOY_AUTH_GITHUB_CLIENT_SECRET": "<your-github-client-secret>"
	}
}
```

Or you can add those environment variables using the dashboard.

![Project Container Environment](https://cloud.githubusercontent.com/assets/1435318/20008146/296d8a62-a27e-11e6-9e5a-f54bac5a5a85.png)

</article>

## What's next?

* Learn how to allow users to [sign-in using their Google profile](/docs/auth/sign-in-with-facebook.html).
