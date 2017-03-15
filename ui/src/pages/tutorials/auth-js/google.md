---
buttonTitle: "I added the Google script"
description: "In this section, you'll learn how to enable WeDeploy Auth on your application."
layout: "tutorial"
parentId: "auth-js"
time: 3
title: "Adding Google"
tutorialTitle: "Getting started with WeDeploy Auth using Javascript"
weight: 7
---

##### Adding Google

You added GitHub authentication but what if you want to give your users the option of logging in with their Google credentials? Underneath the GitHub script in `main.js`, paste: 

```javascript
function signInWithGoogle() {
	var googleProvider = new auth.provider.Google();
	googleProvider.setProviderScope('email');
	auth.signInWithRedirect(googleProvider);
}
```

Just like GitHub, `signInWithRedirect` allows the user to be redirected to Google in order to verify their login information and then redirected back to your app's authentication.


      
