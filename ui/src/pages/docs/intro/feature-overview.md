---
title: "Feature Overview"
description: "This is an overview of the features that make WeDeploy the easiest way to deploy and scale applications."
headerTitle: "Intro"
layout: "guide"
weight: 2
---

### {$page.title}

###### {$page.description}

<article id="1">

## Zero downtime upgrades

WeDeploy provides automation for updating services and the systems with zero downtime.

WeDeploy services can all be updated with rolling, blue-green, or canary deployment patterns. If the update fails, roll it back with a single click. These powerful tools are critical for minimizing downtime and user interruption.

</article>

<article id="2">

## Service discovery and load balancing

WeDeploy includes several options for automating service discovery and load balancing.

Distributed services create distributed problems, but you don’t have to solve them all yourself. WeDeploy includes automatic DNS endpoint generation, an API for service lookup, transport layer (L4) virtual IP proxying for high speed internal communication, and application layer (L7) load balancing for external-facing services.

</article>

<article id="3">

## Service visibility

WeDeploy provides an option for you to specify whether your service is going to be public or private for public access.

</article>

<article id="4">

## High availability

WeDeploy is highly available and makes it easy for your services to be highly available too.

Mission-critical services require health monitoring, self-healing, and fault tolerance both for themselves and the platform and infrastructure they run on. WeDeploy gives you multiple layers of protection.

To achieve self-healing, WeDeploy services are monitored and restarted when they fail. Even legacy services that don’t support distribution or replication can be automatically restarted to maximize uptime and reduce service interruption.

</article>

<article id="5">

## Elastic scalability

WeDeploy gives you the power to easily scale your services up and down with the turn of a dial.

Horizontal scaling is trivial in Docker Swarm, as long as your service supports it. You can change the number of service instances at any time. WeDeploy even lets you autoscale the number of instances based on session count, using the WeDeploy Load Balancer.

</article>

<article id="6">

## User interfaces

WeDeploy offers two interfaces to make it easy to monitor and manage the projects and its services.

The **[WeDeploy Console](/docs/intro/using-the-console.html)** lets you monitor resource allocation, running services health, and more with intuitive browser-based navigation, real-time graphs, and interactive debugging tools.

The **[WeDeploy Command-line Interface (CLI)](/docs/intro/using-the-command-line.html)** provides you control from the comfort of a terminal. It’s powerful, yet easily scriptable, with handy plugins to interact with installed projects.

</article>

## What's next?

* Learn more about [how it works](/docs/intro/how-it-works.html).
