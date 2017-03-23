---
title: "Environment Variables"
description: "This is an overview of how WeDeploy manages environment variables for your projects."
headerTitle: "Getting Started"
layout: "guide"
weight: 6
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

A project may have numerous environments: a production app, a staging app, and any number of test and local environments maintained by many different developers. However, the code is the same. In order to make it happen, each environment would have specific configurations.

A good example would be credentials for the database, where each environment has its own credentials. The ideal scenario for handling this scenario, would be using Environment variables, in order to set up different configurations for different environment using the same code. In a traditional development proccess, you would speciffy the 
configurations in different files. On WeDeploy you can take advantage of Environment Variables using the dashboard.

</article>

<article id="2">

## Configuring environment variables

WeDeploy can help you to configure environment variables for your services. Each service can have its own group of environment variables and can be configured follwing these steps:

1) After create a project and installing a service on the [dashboard](http://dashboard.wedeploy.com). Go to the service page.
2) Click on Environment Vars.
3) Click on Update Service.

![envvar](https://cloud.githubusercontent.com/assets/301291/19909475/27d9d6f0-a045-11e6-9483-54d76a164384.png)

Any environment variable provided using dashboard overwrites the environment variables provided in `container.json` of your service.

</article>

## What's next?

* Learn about using the [WeDeploy API client](/docs/getting-started/using-the-api-client.html).
