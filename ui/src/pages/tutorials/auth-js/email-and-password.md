---
buttonTitle: "I added the Email and Password script"
description: "In this section, you'll learn how to enable WeDeploy Auth on your application."
layout: "tutorial"
parentId: "auth-js"
time: 3
title: "Adding Email and Password"
tutorialTitle: "Getting started with WeDeploy Auth using Javascript"
weight: 5
---

##### Adding Email and Password

Now that we have Auth initialized on our project, we need to add a script for our email and password login. Underneath the previous script in `main.js`, paste: 

```javascript
function signInWithEmailAndPassword() {
	auth.signInWithEmailAndPassword(signIn.email.value, signIn.password.value)
	.then(function() {
		alert('Sign-in successfully.');
		signIn.reset();
	})
	.catch(function() {
		alert('Sign-in failed.');
		signIn.reset();
	});
}
```

`signInWithEmailAndPassword` is part of the WeDeploy Auth API that allows you to set form inputs as the email and password values of the authentication.


      
