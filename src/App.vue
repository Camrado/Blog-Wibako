<template>
  <div class="navbar">
    <div class="navbar__wrapper wrapper">
      <router-link to="/" class="navbar__logo">
        Wibako
      </router-link>
      <div class="navbar__links">
        <router-link to="/posts" class="navbar__links_link">Posts</router-link>
        <router-link to="/about" class="navbar__links_link">About</router-link>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
}

.wrapper {
  width: 1100px;
  margin: auto;
}

.navbar {
  width: 100%;
  height: 70px;
  background-color: $dark-bg;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__logo {
    font-size: 35px;
    font-family: "Lobster Two", cursive;
    color: $text-on-dark;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    width: 25%;

    &_link {
      color: $text-on-dark;
      font-size: 24px;
      text-transform: uppercase;
    }
  }
}
</style>
