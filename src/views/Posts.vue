<template>
  <main class="posts wrapper">
    <nav class="posts__nav">
      <h1 class="posts__nav_title">Posts</h1>
      <input type="text" v-model="state.searchPost" placeholder="Search..." class="posts__nav_input" />
    </nav>
    <div class="posts__content">
      <router-link v-for="post in filteredList" :to="{ name: 'Post', params: { postId: post.id } }" :key="post.id" class="posts__post">
        <img :src="post.img" :alt="Image" class="posts__post_img" />
        <h2 class="posts__post_title">{{ post.title }}</h2>
        <p class="posts__post_content">{{ post.shortContent }}</p>
      </router-link>
    </div>
  </main>
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

<style lang="scss" scoped>
.posts {
  padding-top: 80px;

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &_title {
      color: $accent;
      font-size: 40px;
    }
    &_input {
      color: $accent;
      border: none;
      background: none;
      outline: none;
      font-size: 23px;
      padding: 15px;
      border-bottom: 1px solid $accent;
    }
  }

  &__content {
    margin-top: 75px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  &__post {
    padding: 30px;
    background: $navbar-bg;
    border-radius: 25px;

    &_img {
      width: 100%;
      border-radius: 10px;
    }

    &_title {
      color: $accent;
      margin: 25px 0;
    }

    &_content {
      position: relative;
      font-style: italic;

      &:after {
        content: "";
        width: 100%;
        height: 80px;
        position: absolute;
        top: calc(100% - 80px);
        right: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), $navbar-bg);
      }
    }

    &:hover {
      text-decoration: none;
      background: $post-hover-bg;

      .posts__post_content:after {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), $post-hover-bg);
      }
    }
  }
}
</style>
