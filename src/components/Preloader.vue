<template>
  <div class="loader">
    <div class="loader__image"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "Preloader",

  setup() {
    onMounted(() => {
      window.addEventListener("load", function() {
        const loader = document.querySelector(".loader");
        loader.className += " hidden"; // class "loader hidden"
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0e111f;
  display: flex;
  justify-content: center;
  align-items: center;

  &__image {
    width: 800px;
    height: 220px;
    background-image: url("../assets/icons/loading.gif");
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.loader.hidden {
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
