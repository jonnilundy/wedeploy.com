---
title: "Add API Method"
description: "In this section, you'll learn how to send an email on iOS using the WeDeploy API Client."
buttonTitle: "I added the API method"
tutorialTitle: "Getting started with WeDeploy Email on iOS"
parentId: "email-ios"
layout: "tutorial"
time: 90
weight: 7
---

#### Add API Method

Now we want to add a script that will send an email. To do this, go to `tutorial-email-ios/app/tutorial-email-ios/EmailViewController.swift` and paste this code into the "submitButtonClick" function:

```swift
let auth = TokenAuth(token: "000-000-000")
WeDeploy.email("email.<your-project-id>.wedeploy.io", authorization: auth)
	.to(to)
	.from(from)
	.subject(subject)
	.message(subject)
	.send()
	.toCallback { emailId, error in
		if let emailId = emailId {
			self.showAlert(with: "Success", message: "Email sent! Wait a little bit until it arrives :)")
			print("Email id: \(emailId)")
		}
		else {
			self.showAlert(with: "Error", message: "Error sending the email")
			print(String(describing: error))
		}
	}
```

**Note:** make sure to replace `<your-project-id>` with the id of your project.

#### Add master token

In order for your email request to be authorized, you must add your project's unique Master Token.

1. Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a>
2. Click on your project
3. Go to the _Settings_ section
4. Copy your Master Token
5. Change the `TokenAuth('000-000-000')` initialization to `TokenAuth('your-master-token')` in the swift code

<aside>

###### <span class="icon-16-star"></span> Pro Tip

As you can see, the input values from the form are being used as email parameters (from, to, subject, etc). We have a bunch of parameters so you can fully configure your email posts.

Want to see the full list of <a href="http://wedeploy.com/docs/email/sending-email.html" target="_blank">Email Parameters</a>?

</aside>
