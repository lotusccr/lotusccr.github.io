---
bg: "tag.jpg"
layout: default
permalink: /posts/
title: "Archive"
crawlertitle: "All articles"
summary: "Posts about jekyll"
active: archive
css: ['blog-page.css']
---

<ul class="search-input">
	<input  id="p-search-input" class="page-search-input" type="text" placeholder="搜索" />
</ul>
<ul class="archives-list" >
  {% for post in site.posts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}

    <li><span>{{ post.date | date:'%m-%d' }}</span> <a href="{{ post.url }}" class="archive-item-link" title="{{ post.title }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
 <script type="text/javascript" src="{{site.baseurl}}/assets/js/search.js"></script>


