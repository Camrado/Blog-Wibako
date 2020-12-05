<template>
  <header class="post__header">
    <h1 class="post__title">
      {{ state.post.title }}
    </h1>
    <img :src="state.post.img" alt="Image" class="post__header_img" />
  </header>

  <main class="post wrapper">
    <p v-for="(text, index) in state.post.fullContent" :key="index" class="post__content">
      {{ text }}
    </p>
    <p class="post__tags">{{ state.post.tags }}</p>
  </main>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import { posts } from "@/assets/posts.js";

export default {
  name: "Post",

  setup() {
    const route = useRoute();
    const currPostId = computed(() => route.params.postId);

    const state = reactive({
      post: posts[currPostId.value - 1],
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.post {
  padding-top: 50px;

  &__header {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &_img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;
      opacity: 0.6;
    }
  }

  &__title {
    max-width: 55vw;
    position: relative;
    color: $accent;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    padding: 1.5vw;
    border-radius: 30px;
  }

  &__content {
    width: 80%;
    text-indent: 60px;
    margin-bottom: 20px;
  }

  &__tags {
    margin-top: 50px;
    color: $tagcolor;
    text-indent: 50px;
  }
}
</style>
