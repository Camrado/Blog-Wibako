<template>
  <NavigationBar />

  <HeaderSection v-if="currPage == 'Home' || currPage == 'Posts' || currPage == 'About'" />

  <router-view />

  <Footer />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { NavigationBar, HeaderSection, Footer },

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
