<template>
  <main class="post wrapper">
    <h1 class="post__title">
      {{ state.post.title }}
    </h1>
    <img :src="state.post.img" alt="Image" class="post__img" />
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
  padding-top: 150px;

  &__title {
    color: $accent;
    border-bottom: 2px solid $accent;
  }

  &__img {
    width: 80%;
    margin: 25px 0;
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
