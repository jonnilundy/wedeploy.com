---
title: "Add API Methods"
description: "In this section, you'll learn how to authenticate users on the web using the WeDeploy API Client."
buttonTitle: "I added the API methods"
tutorialTitle: "Getting started with WeDeploy Auth on the web"
parentId: "auth-web"
layout: "tutorial"
time: 90
weight: 7
---

#### Add API Methods

###### Create User

First, let's add a script that will allow users to create an account.

To do this, go to `tutorial-auth-web/hosting/main.js` and paste this code between the "create user method" comments:

```javascript
var auth = WeDeploy.auth('auth-<projectID>.wedeploy.sh');

function submitForm() {
	auth.createUser({
		email: user.email.value,
		name: user.name.value,
		password: user.password.value
	})
	.then(function() {
		alert('Account successfully created!');
		signIn();
		user.reset();
	})
	.catch(function() {
		alert('Sign-up failed. Try another email.');
		user.reset();
	});
}
```

**Note:** make sure to replace `<projectID>` with the id of your project.

###### Sign-in

Next, let's add a script that will allow users to sign-in.

In the same file as above, paste this code between the "sign-in method" comments:

```javascript
function signIn() {
	auth.signInWithEmailAndPassword(user.email.value, user.password.value)
	.then(function() {
		document.location.href = '/welcome.html';
	})
	.catch(function() {
		alert('Sign-in failed. Try another email/password.');
	});
}
```

###### Select current user

Now, let's add a script that will show the current user's name.

In the same file as above, paste this code between the "current user" comments:

```javascript
document.querySelector('.username').innerHTML = auth.currentUser.name;
```



