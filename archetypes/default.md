---
title: "{{ replace .Name "-" " " | title }}"
description: ""
date: "{{ dateFormat "2006-01-02" .Date }}"
url: "/{{ .Name | urlize }}/"
draft: false
categories: 
  - Linux
tags:
  - Arch 
---

