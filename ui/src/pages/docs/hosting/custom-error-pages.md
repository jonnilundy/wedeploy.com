---
title: "Custom Error Pages"
description: "Show error pages that are consistent with your site's style."
headerTitle: "Hosting"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<article id="1">

## Custom Error Pages

When people try to access nonexistent pages on your site, WeDeploy will display a 404 error page. This page follows a template that might not fit to your visual needs. The good news is that you can create custom error pages that are consistent with your site's style.

Files put into the special directory `/_error` are mapped as the error files to be served in case of an error. They must take the form of `<error code>.html`.

<aside>

Check the [boilerplate-hosting](https://github.com/wedeploy/boilerplate-hosting/tree/master/_error) for a practical example.

</aside>

</article>
