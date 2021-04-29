# Wibako - blog

## Why did I created it?

Hmm.. I've recently taken course about Vue 3 and would like to create some project for practice.

Type of this application is Self-Blog. There are 3 main pages **Home**, **Posts** and **About**. There is also a search system over posts **(their titles, short contents and hashtags)** in _Posts_ page. None of the links placed in footer is clickable, they are just for beauty. There is also **Go to top** button which is animated. In _Post_ page (**Not Posts**) after every 3 paragraphs there is a picture with `float: right;`. In addition, in _About_ page there is _'contacts'_ that is fixed only in content space, if we scroll to another part (e.g. header section or footer) it will become `position: absolute`.

### **Those were only the main features.**

### [🔗 Link](https://wibako.herokuapp.com/)

## Used technologies

- Vue 3
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
