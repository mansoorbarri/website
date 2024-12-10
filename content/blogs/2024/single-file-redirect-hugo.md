---
title: "Create a Single File For Hugo Redirects"
description: "Learn how to efficiently manage redirects in your Hugo site using a single file. This guide covers setting up a _redirects file for Netlify deployments and configuring custom redirects for Apache and Nginx servers."
date: "2024-08-27"
url: "/single-file-hugo-redirect/"
draft: false
categories:
  - Linux
  - Windows
tags:
  - Hugo
---

# How to Manage Redirects in Hugo Using a Single File

When building a Hugo site, you might need to manage redirects, especially if you're restructuring content or moving pages. While it's common to define redirects in the frontmatter of each page, there's a more efficient way to handle them using a single file. This article will show you how to set up redirects in Hugo using a `_redirects` file or custom server configurations.

## Method 1: Using a `_redirects` File (e.g., for Netlify)

If you're deploying your Hugo site to Netlify, you can easily manage all your redirects in a single `_redirects` file.

1. **Create a `_redirects` File**:
   - In the root directory of your Hugo site, or in the `static` folder, create a file named `_redirects`.

2. **Define Your Redirects**:
   - Inside the `_redirects` file, list your redirects using the following format:

     ```plaintext
     /old-url /new-url 301
     /another-old-url /another-new-url 302
     ```

   - Each line should contain the old path, the new path, and the status code (301 for permanent redirects, 302 for temporary).

### Example `_redirects` File:

```plaintext
/old-page /new-page 301
/old-blog-post /new-blog-post 302
```

## Method 2: Using Custom Server Configuration
If you're hosting your Hugo site on a platform other than Netlify, such as an Apache or Nginx server, you can manage redirects through server configuration files.

**For Apache:**
- Create a .htaccess file in the root directory of your Hugo site.
- Define your redirects using the Redirect directive:

```plaintext
Redirect 301 /old-url /new-url
Redirect 302 /another-old-url /another-new-url
```

**For Nginx:**

- Open your Nginx configuration file (usually found in /etc/nginx/sites-available/).

- Add your redirects within the server block:

```nginx
location /old-url {
    return 301 /new-url;
}

location /another-old-url {
    return 302 /another-new-url;
}
```   

## Conclusion
By managing your redirects in a single file, you simplify the process of updating and maintaining your Hugo site. Whether you use a `_redirects` file for Netlify or custom server configurations for other hosting environments, this approach centralizes your redirects and keeps your project organized.

-MB 

