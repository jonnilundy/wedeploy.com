---
title: "Sending Email"
description: "Send an email asynchronously and its ID will be returned"
headerTitle: "Email"
layout: "guide"
weight: 2
---

### {$page.title}

###### {$page.description}

<article id="1">

## Sending email

We can use the [API Client](docs/intro/using-the-api-client.html) to facilitate the process of sending requests to WeDeploy.

In order to send emails, we have to make a `POST` request to `/emails` passing some required parameters like `from`, `to`, and `subject`:

```javascript
WeDeploy
	.url('https://<serviceID>-<projectID>.wedeploy.io/emails')
	.form('from', 'from@domain.com')
	.form('to', 'to@domain.com')
	.form('subject', 'Hi there!')
	.post()
	.then(function(response) {
		console.log('Email ID:', response.body());
	})
	.catch(function(error) {
		// Some error has happened
	});
```
```swift
WeDeploy
	.email('https://<serviceID>-<projectID>.wedeploy.io')
	.from(self.username)
	.to(self.username)
	.subject("subject")
	.message("body")
	.send()
	.then { id in
		print("Email ID: \(id)")
	}
	.catch { error in
		// Some error has happened
	}
```
```text/x-java
WeDeploy
	.email("https://<serviceID>-<projectID>.wedeploy.io/emails")
	.from("from@domain.com")
	.to("to@domain.com")
	.subject("Hi there!")
	.send()
	.execute();
```

As a result, we'll receive an email ID. This doesn't indicate that the email has already sent, it actually just means that it was added to the email queue. See ["checking the email status"](/docs/email/checking-status.html) to learn more about email status.

</article>

<article id="2">

## Parameters

Here is a list of all the email parameters you can pass.

<div class="table-container">

Parameter    | Type    | Description
------------ | ------- | ------------
bcc          | string  | Bcc recipient email address. Multiple addresses should be defined in multiple parameters.
cc           | string  | Cc recipient email address. Multiple addresses should be defined in multiple parameters.
from         | string  | Sender email address.
message      | string  | HTML content of your email message. Up to 5MB.
priority     | number  | Used by email clients to define a message's importance. From 1 to 5 where '1' is highest and '5' is the lowest priority.
replyTo      | string  | Append a reply-to address to your email message.
subject      | string  | Subject of your email. Up to 1MB.
to           | string  | Recipient email address. Multiple addresses should be defined in multiple parameters.

</div>

</article>

## What's next?

* Now that you sent an email, you can learn [how to check on it's status](/docs/email/checking-status.html).
