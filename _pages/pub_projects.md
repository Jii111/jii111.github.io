---
layout: page
permalink: /pub-projects/
title: publications & projects
description:
nav: true
nav_order: 2
horizontal: false
_styles: >
  .section-heading {
    color: var(--global-text-color);
    border-bottom: 1px solid var(--global-divider-color);
    padding-top: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: right;
    font-size: 2rem;
  }
  .projects .card-img-top {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
---

<!-- Publications section -->
<h2 class="section-heading">publications</h2>

{% include bib_search.liquid %}

<div class="publications">
{% bibliography --group_by none %}
</div>

<hr style="margin: 3rem 0;">

<!-- Projects section -->
<div class="projects">
  <h2 class="section-heading">projects</h2>
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
