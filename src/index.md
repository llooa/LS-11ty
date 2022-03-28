---
title: LS-11ty Project
img: /images/group.svg
date: Created
layout: home
tags:
    - home
    - welcome
    - info
skills:
    - 11ty
    - Nunjucks
    - JavaScript
    - Bootstrap 5.0
    - Markdown
---


**Date Created**: {{page.date | simpleDate }} <!--use filter to format date-->

# {{title}}

Welcome to LS-11ty project. This is one of my first projects created using 11ty, bootstrap and markdown. It has been a fun learning new skills.

Most of the contents are created based on Ray Villalobos' courses on LinkedIn

### List of skills
<ul>
    {% for item in skills %}
   <li>{{ item | capitalize}} </li>
    {% endfor %}
</ul>

---