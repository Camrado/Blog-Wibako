<template>
  <Preloader />

  <NavigationBar />

  <HeaderSection v-if="currPage == 'Home' || currPage == 'Posts' || currPage == 'About'" />

  <router-view />

  <To-Top-Button />

  <Footer />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import Preloader from "./components/Preloader.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import Footer from "@/components/Footer.vue";
import ToTopButton from "./components/ToTopButton.vue";

export default {
  name: "App",
  components: { Preloader, NavigationBar, HeaderSection, Footer, ToTopButton },

  setup() {
    const route = useRoute();
    const currPage = computed(() => route.name);

    return {
      currPage,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  background: $dark-bg;
}
</style>
