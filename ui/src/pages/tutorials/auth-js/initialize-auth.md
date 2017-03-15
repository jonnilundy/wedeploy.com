---
buttonTitle: "I initialized the Auth service"
description: "In this section, you'll learn how to enable WeDeploy Auth on your application."
layout: "tutorial"
parentId: "auth-js"
time: 3
title: "Initializing Auth"
tutorialTitle: "Getting started with WeDeploy Auth using Javascript"
weight: 4
---

##### Initializing the Auth Service

Now that we have the sample files cloned and the local environemnt running, we can initialize our Authentication. 

First go to the `tutorial-auth-js` directory that we cloned and create a file named `main.js`. This file will contain our Authentication scripts. Inside of `main.js`, add: 

```javascript
WeDeploy.auth('auth.tutorial-auth-js.wedeploy.io')
```



