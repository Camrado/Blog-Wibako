<template>
  <section class="header-sec" :class="state.background">
    <div class="header-sec__text">
      <h1>
        {{ titleOfCurrPage }}
      </h1>
      <p>
        {{ contentOfCurrPage }}
      </p>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import router from "../router/index";

export default {
  name: "HeaderSection",

  setup() {
    const route = useRoute();
    const currPage = computed(() => route.name);

    const titleOfCurrPage = computed(() => {
      if (currPage.value == "Home") {
        return "Welcome to Wibako";
      } else if (currPage.value == "Posts") {
        return "Read our posts";
      } else if (currPage.value == "About") {
        return "About us";
      }
    });

    const contentOfCurrPage = computed(() => {
      if (currPage.value == "Home") {
        return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eos vel obcaecati blanditiis, itaque magnam maiores incidunt nostrum in, quibusdam iste enim nam, necessitatibus quos dolorum impedit velit possimus natus?";
      } else if (currPage.value == "Posts") {
        return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eos vel obcaecati blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eos vel obcaecati blanditiis.";
      } else if (currPage.value == "About") {
        return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eos vel obcaecati blanditiis, itaque magnam maiores incidunt nostrum in, quibusdam iste enim nam, necessitatibus quos dolorum impedit velit possimus natus?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ";
      }
    });

    const state = reactive({
      background: {
        homeBG: true,
        postsBG: false,
        aboutBG: false,
      },
    });

    // ? This computed returns keys of 'state.background' object
    const keysOfBg = computed(() => {
      let keys = [];
      for (let k in state.background) keys.push(k);

      return keys;
    });

    //? It changes all of the 'state.background' values to false, and make the value of Current page true.
    router.afterEach(() => {
      if (currPage.value == "Home") {
        for (let i = 0; i < keysOfBg.value.length; i++) {
          state.background[keysOfBg.value[i]] = false;
        }
        state.background.homeBG = true;
      } else if (currPage.value == "Posts") {
        for (let i = 0; i < keysOfBg.value.length; i++) {
          state.background[keysOfBg.value[i]] = false;
        }
        state.background.postsBG = true;
      } else if (currPage.value == "About") {
        for (let i = 0; i < keysOfBg.value.length; i++) {
          state.background[keysOfBg.value[i]] = false;
        }
        state.background.aboutBG = true;
      }
    });

    return {
      titleOfCurrPage,
      contentOfCurrPage,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-sec {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -150px;
  height: 100vh;
  max-width: 100%;

  &__text {
    position: absolute;
    top: 30%;
    left: 5%;
    max-width: 30%;

    h1 {
      font-size: 40px;
      margin-bottom: 25px;
    }
  }
}

.homeBG {
  background-image: url("../assets/header-sec/blog-bg-home.png");
}
.postsBG {
  background-image: url("../assets/header-sec/blog-bg-posts.png");
}
.aboutBG {
  background-image: url("../assets/header-sec/blog-bg-about.png");
}
</style>
