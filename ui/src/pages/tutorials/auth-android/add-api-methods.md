---
title: "Add API Methods"
description: "In this section, you'll learn how to authenticate users on an Android app using the WeDeploy API Client."
buttonTitle: "I added the API methods"
tutorialTitle: "Getting started with WeDeploy Auth on an Android app"
parentId: "auth-android"
layout: "tutorial"
time: 90
weight: 8
---

#### Add API Methods

###### Create User

First, let's add the code that will allow users to create an account.

To do this, go to `SignUpActivity.java` and paste this code in the "doSignUp" method:

```text/x-java
WeDeploy.auth("auth-<projectID>.wedeploy.sh")
	.createUser(email, password, name)
	.execute(new Callback() {
		@Override
		public void onSuccess(Response response) {
			showAlert("Success", "Signed up successfully");
		}

		@Override
		public void onFailure(Exception e) {
			Log.e("Error", "Sign up error", e);
			showAlert("Error", "Sign up error");
		}
	});
```

**Note:** make sure to replace `<projectID>` with the id of your project.

###### Sign-in

Next, let's add the code that will allow users to sign-in.

First of all, go to `LoginActivity.java`, and paste this code in the "doLogin" method:

```text/x-java
WeDeploy.auth("auth-<projectID>.wedeploy.sh")
	.signIn(email, password).execute(new Callback() {
		@Override
		public void onSuccess(Response response) {
			showAlert("Success", "Signed in");
		}

		@Override
		public void onFailure(Exception e) {
			showAlert("Error", "Login error");
		}
	});
```

**Note:** make sure to replace `<projectID>` with the id of your project.

<aside>

###### <span class="icon-16-star"></span> Pro Tip

In the examples above we use the execute(callback) method to handle the response with a callback, which is the most typical way of doing it in the Android ecosystem, but we can also handle the result using a RxJava Single, which is similar to an Observable, but it either emits one value or an error notification:

```text/x-java
WeDeploy.auth("auth-myapp.wedeploy.sh")
	.signIn(email, password)
	.asSingle()
	.subscribe(new DisposableSingleObserver<Response>() {
		@Override
		public void onSuccess(Response response) {
			showAlert("Success", "Signed in");
		}

		@Override
		public void onError(Throwable e) {
			showAlert("Error", "Login error");
		}
	});
```
</aside>
