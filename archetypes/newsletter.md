---
title: "{{ replace .Name "-" " " | title }}"
date: "{{ dateFormat "2006-01-02" .Date }}"
hidden: true
url: "/newsletter/{{ .Name }}/"
showtableOfContents: true
---
