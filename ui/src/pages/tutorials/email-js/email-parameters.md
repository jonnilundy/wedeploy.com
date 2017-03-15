---
buttonTitle: "I have setup my email parameters"
description: "In this section, you'll learn how to enable WeDeploy Email on your application."
layout: "tutorial"
parentId: "email-js"
time: 3
title: "Setup email parameters"
tutorialTitle: "Getting started with WeDeploy Email using Javascript"
weight: 5
---

##### Setup Email Parameters

We have a local deployment of our email sample site but the `Submit` button is not working. We need to edit the parameters to make it active.

Open `tutorial-email-js/hosting/main.js` in your text editor. Right bellow `WeDeploy` on line 6, paste this code:

```javascript
        .url('http://email.test-email-js.wedeploy.me/emails')
        .auth('dummyMasterToken')
```
* `.url` is specifying the project and service that it would send the emails through. In your future project, put `http://<email-service-id>.<project-id>.wedeploy.io/emails` here (notice that you must change the `.me` to `.io` for deployment).
* `.auth` is the authentication key. For demo purposes, we created a dummy local `masterToken` within the `project.json` file. For future deployment, you will need to find your project's master token on the settings tab inside your project's dashboard.

Right bellow that, paste this code:

```javascript
        .form('from', form.from.value)
        .form('to', form.to.value)
        .form('subject', form.subject.value)
        .form('message', form.subject.value)
        .post()
```
* `form`, `to`, `subject`, and `message` are all email parameter that allow you to choose what `form` inputs correlate to what email elements. 
* `.post()` is the api request to send the email.

Now go back to the [homepage](http://tutorial-email-js.wedeploy.me) and try sending an email to yourself. 



      
