---
buttonTitle: "I added the Github script"
description: "In this section, you'll learn how to enable WeDeploy Auth on your application."
layout: "tutorial"
parentId: "auth-js"
time: 3
title: "Adding GitHub"
tutorialTitle: "Getting started with WeDeploy Auth using Javascript"
weight: 6
---

##### Adding GitHub

You added email and password authentication but what if you want to give your users the option of logging in with their GitHub credentials? Underneath the email and password script in `main.js`, paste: 

```javascript
function signInWithGithub() {
	var githubProvider = new auth.provider.Github();
	githubProvider.setProviderScope('user:email');
	auth.signInWithRedirect(githubProvider);
}
```

`signInWithRedirect` allows the user to be redirected to GitHub in order to verify their login information and then redirected back to your app's authentication.


      
