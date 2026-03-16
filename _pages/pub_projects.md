---
layout: page
permalink: /pub-projects/
title: publications & projects
description:
nav: true
nav_order: 2
horizontal: false
---

<!-- Publications section -->
{% include bib_search.liquid %}

<div class="publications">
{% bibliography --group_by none %}
</div>

<hr style="margin: 3rem 0;">

<!-- Projects section -->
<div class="projects">
  <h2 class="category">projects</h2>
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
