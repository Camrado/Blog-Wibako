import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Posts from "@/views/Posts.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Wibako - Home page",
    },
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: {
      title: "Wibako - Posts",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Wibako - About",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  document.title = to.meta.title;
});

export default router;
