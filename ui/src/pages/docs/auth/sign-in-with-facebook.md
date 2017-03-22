---
title: "Sign-in With Facebook"
description: "You can let your users authenticate using their Facebook Accounts by integrating Facebook Sign-In into your app."
headerTitle: "Auth"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<article id="1">

## Sign-in with facebook

To sign in by redirecting to the sign-in page, call `signInWithRedirect`:


```javascript
var auth = WeDeploy.auth();

var provider = new auth.provider.Facebook();
provider.setProviderScope("email");

auth.signInWithRedirect(provider);

auth.onSignIn(function(user) {
	// Fires when user is signed in after redirect.
});
```

</article>

<article id="2">

## Setup app client id and secret

Create a client id and client secret by [registering your application](https://developers.facebook.com/docs/apps/register) on Facebook.

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
		"WEDEPLOY_AUTH_FACEBOOK": "true",
		"WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID": "<your-facebook-app-id>",
		"WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET": "<your-facebook-app-secret>"
	}
}
```

Or you can add those environment variables using the dashboard.

![Project Container Environment](https://cloud.githubusercontent.com/assets/1435318/20008140/24531efc-a27e-11e6-9cdb-651086f7bae8.png)

</article>

## What's next?

* Learn how to allow users to [sign-in using their GitHub profile](/docs/auth/sign-in-with-facebook.html).
