import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Wibako - Home page'
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Posts.vue'), // ? Lazy load
    meta: {
      title: 'Wibako - Posts'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'), // ? Lazy load
    meta: {
      title: 'Wibako - About'
    }
  },
  {
    path: '/posts/post/:postId',
    name: 'Post',
    component: () => import('../views/Post.vue'), // ? Lazy load
    meta: {
      title: 'Wibako - Post'
    }
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to) => {
  document.title = to.meta.title;
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
