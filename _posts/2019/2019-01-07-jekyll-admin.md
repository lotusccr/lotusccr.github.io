---
title: Jekyll-Admin插件安装
layout: post
category: Jekyll
tags: 'jekyll'
author: lotus
summary: Jekyll-Admin插件安装
keywords: Jekyll-Admin插件安装
---

一直觉得维护起来很不方便，所以就看看有没有后台管理方便维护，目前在简书上发现可以安装Jekyll-Admin插件来解决。

如下是安装方法：

## 第一步：_config.yml的gem一行添加一个jekyll-admin

## 第二步：安装插件
	- gems: [jekyll-paginate, jekyll-sitemap,jekyll-admin]
	- 或者plugins:
	  - jekyll-paginate
	  - jekyll-admin
## 第三步：本地使用gem install jekyll-admin命令安装
## 第四步：浏览器http://localhost:4000/admin就可以看到后台管理平台

注意：几个使用要点：
          新建Post的时候默认是不给Post添加YAML Header的，需要自己输入。
![](https://lotusccr.github.io/public/img/jekyll-yml.png)

