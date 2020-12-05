# Wibako - blog

## Why did I created it?

Eh... I've recently learned about Vue.js 3, and I just created this web-application (wtihout any template) for practice.

It's like a blog company. There are 3 main pages **Home**, **Posts** and **About**. There is also a search system over posts **(their titles, short contents and hashtags)** in _Posts_ page. None of the links placed in footer is clickable, they are just for beauty. There is also **Go to top** button which is animated. In _Post_ page (**Not Posts**) after every 3 paragraphs there is a picture with `float: right;`. In addition, in _About_ page there is _'contacts'_ that is fixed only in content space, if we scroll to another part (e.g. header section or footer) it will become `position: absolute`.

### **Those were only the most important features.**

## Used technologies

- Vue CLI 3
- SCSS

## Used dependencies/plugins in Vue

- Vue Router (plugin)
- SCSS (dependencies):
  - node-sass
  - sass-loader
- For server (dependencies):
  - connect-history-api-fallback
  - express
  - express-sslify
  - serve-static
