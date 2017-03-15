---
buttonTitle: "I tested the Auth"
description: "In this section, you'll learn how to enable WeDeploy Auth on your application."
layout: "tutorial"
parentId: "auth-js"
time: 3
title: "Testing the Auth"
tutorialTitle: "Getting started with WeDeploy Auth using Javascript"
weight: 8
---

##### Testing the Auth

We added email and password, GitHub, and Google authentication. Now lets insert an alert function (simply for testing purposes) so we can make sure our Auth is working. Paste this code into the bottom of your `main.js`:

```javascript
auth.onSignIn(function(user) {
	alert('Signed-in ' + user.email);
});
```

Now go back to your [homepage](http://tutorial-auth-js.wedeploy.me) and try logging in again. If you see an alert that says `Signed-in <your-email>` then it is working! 


      
