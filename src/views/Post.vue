<template>
  <div class="post wrapper">
    <h1 class="post-title">
      {{ state.post.title }}
    </h1>
    <p class="post-content">
      {{ state.post.fullContent }}
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
  padding-top: 100px;
}
</style>
