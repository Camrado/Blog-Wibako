<template>
  <main class="post wrapper">
    <h1 class="post__title">
      {{ state.post.title }}
    </h1>

    <div v-for="(text, index) in state.post.fullContent" :key="index" class="post__content">
      <img :src="state.post.img[index / 3]" alt="Image" v-if="index % 3 == 0" class="post__img" />
      <p>{{ text }}</p>
    </div>

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

  &__content {
    width: 100%;
    margin: 30px 0;

    p {
      text-indent: 60px;
      padding-bottom: 50px;
    }
  }

  &__img {
    width: 50%;
    margin: 10px 0 10px 30px;
    border-radius: 10px;
    float: right;
  }

  &__tags {
    margin-top: 50px;
    color: $tagcolor;
    text-indent: 50px;
  }
}
</style>
