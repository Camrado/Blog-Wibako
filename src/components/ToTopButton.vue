<template>
  <button class="scrollToTopBtn " @click="scrollToTop()"></button>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "To-Top-Button",

  setup() {
    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
    });

    function handleScroll() {
      let scrollToTopBtn = document.querySelector(".scrollToTopBtn");

      if (window.pageYOffset > 150) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }

    function scrollToTop() {
      let rootElement = document.documentElement;

      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return {
      scrollToTop,
    };
  },
};
</script>

<style lang="scss" scoped>
.scrollToTopBtn {
  width: 50px;
  height: 50px;
  background: none;
  background-image: url("../assets/icons/to_top.png");
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  position: fixed;
  bottom: 50px;
  right: calc((100vw - 1100px) / 4);
  transform: translateX(50%);
  display: none;
  z-index: 100;
  user-select: none;
  outline: none;
  cursor: pointer;
}
</style>
