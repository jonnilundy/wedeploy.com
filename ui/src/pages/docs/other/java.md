---
title: "Getting Started With Java"
description: "Launch a Java 8 application in few steps."
headerTitle: "Other"
layout: "guide"
weight: 4
---

### Java

###### {$page.description}

<article id="1">

## Introduction

Our email service enables you to send customized emails to your users and check on their status with just a few lines of code.

</article>

<article id="2">

## Try it yourself

Want to see the whole process of deploying an app on WeDeploy with Java?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/java" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="http://boilerplate-java.wedeploy.io" target="_blank" data-senna-off>live demo</a>.
</div>

</article>

<article id="3">

## Configurating Java

<aside>

All WeDeploy projects use a consistant file structure and configuration files to deploy apps with Git or GitHub. Learn more on our <strong><a href="/docs/intro/how-it-works.html">How It Works Page</a></strong>.

</aside>

Below is a few examples of a `container.json` for the Java container.

```gradle
{
	"id": "java",
	"type": "wedeploy/java:latest",
	"hooks": {
  		"build": "gradle -Dorg.gradle.native=false clean build -x test"
  }
}
```
```maven
{
	"id": "java",
	"type": "wedeploy/java:latest",
	"hooks": {
  		"build": "mvn package"
  }
}
```
```ant
{
	"id": "java",
	"type": "wedeploy/java:latest",
	"hooks": {
  		"build": "ant build"
  }
}
```

The `id` for your services are uniquely determined by you.

</article>

## What's next?

Now you can start building your Java based application.
