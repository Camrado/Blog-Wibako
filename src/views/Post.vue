<template>
  <div class="post wrapper">
    <h1 class="post__title">
      {{ state.post.title }}
    </h1>
    <p v-for="(text, index) in state.post.fullContent" :key="index" class="post__content">
      {{ text }}
    </p>
  </div>
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
  padding-top: 140px;

  &__title {
    color: $accent;
    margin-bottom: 50px;
    border-bottom: 2px solid $accent;
  }

  &__content {
    text-indent: 60px;
    margin-bottom: 20px;
  }
}
</style>
