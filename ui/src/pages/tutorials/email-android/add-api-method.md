---
title: "Add API Method"
description: "In this section, you'll learn how to send an email on Android using the WeDeploy API Client."
buttonTitle: "I added the API method"
tutorialTitle: "Getting started with WeDeploy Email on Android"
parentId: "email-android"
layout: "tutorial"
time: 90
weight: 7
---

#### Add API Method

Now we want to add a script that will send an email. To do this, go to `MainActivity.java` and paste this code into the "sendEmail" method:

```text/x-java
weDeploy = new WeDeploy.Builder()
	.authorization(new TokenAuthorization("000-000-000"))
	.build();

weDeploy.email("email.<your-project-id>.wedeploy.io")
	.from(from)
	.to(to)
	.subject(subject)
	.message(subject)
	.send()
	.execute(new Callback() {
		@Override
		public void onSuccess(Response response) {
			showAlert("Success", "Email sent! Wait a little bit until it arrives :)");
		}

		@Override
		public void onFailure(Exception e) {
			showAlert("Error", "Email sending the email");
		}
	});
```

**Note:** make sure to replace `<your-project-id>` with the id of your project.

#### Add master token

In order for your email request to be authorized, you must add your project's unique Master Token.

1. Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a>
2. Click on your project
3. Go to the _Settings_ section
4. Copy your Master Token
5. Change the new TokenAuthorization('000-000-000') initialization to new TokenAuthorization('your-master-token') in the Java code

<aside>

###### <span class="icon-16-star"></span> Pro Tip

As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.

Want to see the full list of <a href="http://wedeploy.com/docs/email/sending-email.html" target="_blank">Email Parameters</a>?

</aside>
