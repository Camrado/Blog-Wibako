<template>
  <NavigationBar />

  <HeaderSection />

  <router-view />

  <Footer />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { NavigationBar, HeaderSection, Footer },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  background: $dark-bg;
}
</style>
