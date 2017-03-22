---
title: "Using the Dashboard"
description: "In this section, you'll learn how to deploy an application using WeDeploy Dashboard."
headerTitle: "Getting Started"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<article id="1">

## Create an account	

**Create a profile**

First you need to create a WeDeploy account by signing up through the dashboard [signup page](http://dashboard.wedeploy.com/signup).

![SignUp](https://cloud.githubusercontent.com/assets/301291/18884345/e5bd302e-849b-11e6-9be7-552acda97a31.png)

**Access the dashboard**

Once you are logged in, you will see the main page of the dashboard whcih will list all your projects and their status of availability in the server.

![Dashboard](https://cloud.githubusercontent.com/assets/301291/18655293/798013ae-7e9c-11e6-8f7f-4d029d73d2bb.png)

</article>

<article id="2">

## Create a project	

**Create a project**

On the Dashboard, click on New Project.

![Install Container](https://cloud.githubusercontent.com/assets/23219848/24224968/53dda822-0f1b-11e7-81d9-1fac9084113d.png)

**Name your project**

![Naming container](https://cloud.githubusercontent.com/assets/23219848/24225370/535e5a48-0f1d-11e7-94bc-81bb46515800.png)

**Open your project**

Open your project by clicking on your project domain.

![Project Container List](https://cloud.githubusercontent.com/assets/301291/18656506/7e3d873c-7ea6-11e6-945b-2da9ba801c3e.png)

</article>

<article id="3">

## Create a service	

**Click on 'Install service'**

You can install more than one service, but in this example, we're going to deploy a static website.

![Install Container](https://cloud.githubusercontent.com/assets/301291/18655453/c83e2a66-7e9d-11e6-8440-673e3781335b.png)

**Select a service type**

Select the service you would like to build. In this case, WeDeploy Hosting.

![Select a Container Type](https://cloud.githubusercontent.com/assets/301291/18656521/9f3392b0-7ea6-11e6-9d05-29c68a657f6d.png)

**Fill in ID**

If you don't want to come up with your own name, you can leave the field blank and click "Install Service" and it will apply a random name to your service.

![Install Container Form](https://cloud.githubusercontent.com/assets/301291/18656546/cac3682e-7ea6-11e6-8e24-354a1df99ea0.png)

**See container status**

Now go to "Services" and you will see the status of your new Hosting service.

![Container Up and Running](https://cloud.githubusercontent.com/assets/301291/18656561/f076a57c-7ea6-11e6-9d9d-aa288ca72135.png)

</article>

<article id="4">

## Access the url	

**Set home service**

By default, each WeDeploy service you install has its own subdomain (`<service-name>.<project-name>.wedeploy.io`). In order to set Hosting as the home service so that it is routed to your projects main url (`<project-name>.wedeploy.io`), you can click the three circle menu button on the far right of the service and select "Set as Home Service". This can also been done in your project settings.

![Set Home Service](https://cloud.githubusercontent.com/assets/23219848/24225643/d872cff6-0f1e-11e7-8446-8baf6d21dd50.png)

**Access url**

When you install a new service, it automatically deploys our boilerplate so that the service is not completely empty. You can now click the url underneath your project name in the top left corner.

![URL Generated](https://cloud.githubusercontent.com/assets/23219848/24225912/6582b612-0f20-11e7-8011-09395f2dc89c.png)

**See the live site**

That's it! Using a sofisticated Loadbalancer system and service discoverer, WeDeploy automatically creates a URL and points that to your container.

![URL Generated](https://cloud.githubusercontent.com/assets/301291/17796616/b2ca3fd4-6576-11e6-8e18-85423f206b94.jpg)

</article>

## What's next?

* Learn about using the [WeDeploy CLI](/docs/getting-started/using-the-command-line.html).
