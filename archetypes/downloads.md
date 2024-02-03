---
title: "{{ replace .Name "-" " " | title }}"
date: "{{ dateFormat "2006-01-02" .Date }}"
url: "/downloads/{{ .Name }}/"
showtableOfContents: "true"
draft: false
---

---
