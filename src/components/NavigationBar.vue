<template>
  <header>
    <nav class="navbar">
      <div class="navbar__wrapper wrapper">
        <router-link to="/" class="navbar__logo">
          Wibako
        </router-link>
        <div class="navbar__links">
          <router-link to="/posts" class="navbar__links_link">Posts</router-link>
          <router-link to="/about" class="navbar__links_link">About</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'NavigationBar',

  setup() {
    onMounted(() => {
      window.addEventListener('scroll', changeBgOfNav);
    });

    function changeBgOfNav() {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('changebg', window.scrollY > 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.changebg {
  background-color: $navbar-bg;
}

.navbar {
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 100;
  transition: 0.65s;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__logo {
    font-size: 35px;
    font-family: 'Lobster Two', cursive;
    color: $accent;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    width: 25%;

    &_link {
      color: $accent;
      font-size: 24px;
      text-transform: uppercase;
    }
  }
}
</style>
