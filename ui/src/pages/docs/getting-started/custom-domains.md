---
title: "Custom Domains"
description: "This is an overview of how WeDeploy manages custom domains for your projects."
headerTitle: "Getting Started"
layout: "guide"
weight: 8
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

To make your app accessible right away, WeDeploy makes any project accessible via its project domain, which looks like `<serviceID>.<projectID>.wedeploy.io`. If you have a project named `project` with a service named `web`, the WeDeploy project domain would be `web.project.wedeploy.io`. Every project in WeDeploy supports one or more custom domains.

</article>

<article id="2">

## Configuring custom domains

WeDeploy can help you to configure your own custom domain, like `http://mydomain.com` or `http://www.mydomain.com`.
To make a project accessible via one or more non-WeDeploy domain names, you must add custom domain(s) to your project configuration as described below:

1. After create a project on the [dashboard](http://dashboard.wedeploy.com). Go to the project settings page.
2. On custom domain session, add the custom domains related to the project.
3. Click in Update Project.
4. Update the domain DNS to point to the project WeDeploy domain (`<projectID>.wedeploy.io`).

![settings](https://cloud.githubusercontent.com/assets/301291/19607402/73aca3b6-977e-11e6-82d6-e3374d3aa6ed.png)

</article>

<article id="3">

## Configuring DNS for root domains

A root domain is the highest level of hierarchy for the website you control, ex: `mydomain.com`. When you register a domain name, you are registering a root domain. This means you have the access to create subdomains and file structures all branching from that root domain.

If your DNS provider allows you to either use CNAME or ALIAS records for root domains, you just need to point the CNAME/ALIAS entry for your root domain as described below:

| Record            | Name             | Project Target Domain |
| ----------------- | ---------------- | --------------------- |
| `ALIAS` or `CNAME`| `<empty>` or `@` | project1.wedeploy.io. |

In many DNS Providers, you are only allowed to use Address Records (A) for your root domain. In that case, you can use the static IP provided by WeDeploy as the target for the Address Record (A):

| Record            | Name             | Project Target Domain |
| ----------------- | ---------------- | --------------------- |
| `A`               | `<empty>` or `@` | `173.196.61.238`      |

</article>

<article id="4">

## Configuring DNS for subdomains

After configuring the custom domains on the Project Settings, you must point your DNS record to the project WeDeploy domain. You can configure your subdomain as a new CNAME record with your DNS provider. If you're not sure about how to configure CNAME records for subdomains, visit your DNS provider's documentation page.

| Record            | Subdomain            | Project Target Domain |
| ----------------- | -------------------- | --------------------- |
| `CNAME`           | **www**.mydomain.com | project1.wedeploy.io. |

</article>

<article id="5">

## Configuring DNS for wildcard domain

WeDeploy automatically creates a subdomain for each service. Since you typically will have multiple services inside a project, you will either need multiple records, or a single wildcard record. A wildcard record allows you to map all subdomains to your WeDeploy project with a single record.

| Record            | Subdomain            | Project Target Domain |
| ----------------- | -------------------- | --------------------- |
| `CNAME`           | *.mydomain.com       | project1.wedeploy.io. |

Result:

| WeDeploy Domain              | Custom Domain         |
| ---------------------------- | --------------------- |
| service1.project.wedeploy.io | service1.mydomain.com |
| service2.project.wedeploy.io | service2.mydomain.com |
| service3.project.wedeploy.io | service3.mydomain.com |
| service4.project.wedeploy.io | service4.mydomain.com |

</article>
