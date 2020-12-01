<template>
  <div class="wrapper">
    <input type="text" v-model="state.searchPost" />
    <h1>Posts</h1>
    <div class="posts">
      <router-link v-for="post in filteredList" :to="{ name: 'Post', params: { postId: post.id } }" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.shortContent }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { posts } from "@/assets/posts.js";
import { computed, reactive } from "vue";

export default {
  name: "Posts",

  setup() {
    const state = reactive({
      searchPost: "",
    });

    const filteredList = computed(() =>
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(state.searchPost.toLowerCase()) ||
          post.shortContent.toLowerCase().includes(state.searchPost.toLowerCase())
      )
    );

    return {
      posts,
      state,
      filteredList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
