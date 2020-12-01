import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Posts from "@/views/Posts.vue";
import About from "@/views/About.vue";
import Post from "@/views/Post.vue";

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
  {
    path: "/posts/post/:postId",
    name: "Post",
    component: Post,
    meta: {
      title: "Wibako - Post",
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  document.title = to.meta.title;
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
