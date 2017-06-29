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

## Sign-in with Facebook

To sign in by redirecting to the sign-in page, call `signInWithRedirect`:


```javascript
var auth = WeDeploy.auth('https://<serviceID>-<projectID>.wedeploy.io');

var provider = new auth.provider.Facebook();
provider.setProviderScope("email");

auth.signInWithRedirect(provider);

auth.onSignIn(function(user) {
	// Fires when user is signed in after redirect.
});
```
```swift
let auth = WeDeploy.auth('https://<serviceID>-<projectID>.wedeploy.io');
let provider = AuthProvider(provider: .facebook, redirectUri: "my-app://")
provider.providerScope = "email"

auth.signInWithRedirect(provider: provider) { (user, error) in
	// Fires when user is signed in after redirect.
}

//Add WeDeploy.auth('https://<serviceID>-<projectID>.wedeploy.io').handle(url: url) in AppDelegate's open url method	
```
```text/x-java
// In AndroidManifest.xml, declare an intent filter for the Activity you want to receive the token.
// Don't forget to replace [mypackagename] with you application package name.
<intent-filter>
	<action android:name="android.intent.action.VIEW" />
	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />
	<data android:scheme="oauth-wedeploy" android:host="[mypackagename]" />
</intent-filter>

// On your Activity:
AuthProvider provider = new AuthProvider.Builder()
	.redirectUri("oauth-wedeploy://[mypackagename]")
	.provider(Provider.FACEBOOK)
	.providerScope("email")
	.build();

WeDeploy.auth(authUrl)
	.signIn(this, provider);
	
// Use Auth auth = TokenAuth.getAuthFromIntent(intent); to get the token from the Intent
```

<aside>

###### <span class="icon-16-alert"></span> Attention

Sign-in with Facebook provider is currently not available in Node.js and React Native environments.

</aside>

</article>

<article id="2">

## Setup app client id and secret

Create a client id and client secret by [registering your application](https://developers.facebook.com/docs/apps/register) on Facebook.

<aside>

Please be sure to add the callback url `https://<authContainerID>-<projectID>.wedeploy.io/oauth/token` in your application.
For local development, use `wedeploy.me` instead. To use with custom domains you can change the sufix `<projectID>.wedeploy.io` for your domain.

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

Or you can add those environment variables using the Console.

![Project Container Environment](https://cloud.githubusercontent.com/assets/1435318/20008140/24531efc-a27e-11e6-9cdb-651086f7bae8.png)

</article>

## What's next?

* Now we're ready to start [enabling other login providers into your app](/docs/auth/sign-in-with-github.html).
