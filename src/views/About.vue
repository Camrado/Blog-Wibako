<template>
  <div class="about wrapper">
    <main class="about__content ">
      <h1 class="about__title">Lorem ipsum dolor sit amet consectetur.</h1>
      <article class="about__text">
        <section class="about__text_section">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit voluptate ullam commodi eaque, sunt ab voluptas. Odit blanditiis quis
          quo commodi possimus iure sapiente, veniam non in, dignissimos tempora mollitia, autem corporis assumenda accusamus aut pariatur quae ipsam
          nam nulla fuga dolore dolorum itaque! Labore id commodi soluta nemo necessitatibus doloribus atque, laudantium eum tempora nulla dolorum,
          earum harum explicabo quia ab animi placeat iure quas eveniet voluptas. Culpa officia recusandae laborum quas voluptates.
        </section>

        <section class="about__text_img"></section>

        <section class="about__text_section">
          Ipsum dolor sit amet consectetur adipisicing elit. Quam impedit voluptate ullam commodi eaque, sunt ab voluptas. Odit blanditiis quis quo
          commodi possimus iure sapiente, veniam non in, dignissimos tempora mollitia, autem corporis assumenda accusamus aut pariatur quae ipsam nam
          nulla fuga dolore dolorum itaque! Labore id commodi soluta nemo necessitatibus doloribus atque, laudantium eum tempora nulla dolorum, earum
          harum explicabo quia ab animi placeat iure quas eveniet voluptas. Culpa officia recusandae laborum quas voluptates.
        </section>
      </article>
    </main>
    <aside class="about__contacts" :style="state.style">
      <ul class="about__contacts_list">
        <li class="about__contacts_elem">
          <div class="about__contacts_social-logo instagram"></div>
          <p class="about__contacts_social-name">Instagram</p>
        </li>
        <li class="about__contacts_elem">
          <div class="about__contacts_social-logo facebook"></div>
          <p class="about__contacts_social-name">Facebook</p>
        </li>
        <li class="about__contacts_elem">
          <div class="about__contacts_social-logo twitter"></div>
          <p class="about__contacts_social-name">Twitter</p>
        </li>
        <li class="about__contacts_elem">
          <div class="about__contacts_social-logo whatsapp"></div>
          <p class="about__contacts_social-name">Whatsapp</p>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "About",

  setup() {
    const router = useRoute();
    const currPageName = computed(() => router.name);

    const state = reactive({
      style: {
        position: "absolute",
        right: "0",
        top: "0",
        bottom: null,
      },
    });

    onMounted(() => {
      window.addEventListener("scroll", contactsOnScroll);
    });

    function contactsOnScroll() {
      if (currPageName.value == "About") {
        //? window.pageYOffset is a height from the top of page to the top of visible part of page
        //? getBoundingClientRect().top is a height from the top of visible part of page to the top of an element
        if (window.pageYOffset <= document.querySelector(".about__content").getBoundingClientRect().top) {
          changeStyleOfContacts("absolute", "0", "0", null);
          //? window.innerHeight is a height of the visible part of a page
          //? document.body.scrollHeight is a heigt of the whole page
        } else if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight - document.querySelector(".footer").clientHeight) {
          changeStyleOfContacts("absolute", null, "0", "30px");
        } else {
          changeStyleOfContacts("fixed", "50%", "calc((100% - 1100px) / 2)", null);
        }
      }
    }

    function changeStyleOfContacts(position, top, right, bottom) {
      state.style.position = position;
      state.style.top = top;
      state.style.right = right;
      state.style.bottom = bottom;
    }

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
  &__content {
    width: 70%;
  }
  &__title {
    color: $accent;
    font-size: 35px;
    margin-bottom: 30px;
  }
  &__text {
    color: $text-color;
    font-size: 18px;
    &_section {
      text-indent: 50px;
      &:first-letter {
        font-family: "Lobster Two", cursive;
        font-size: 35px;
        color: $accent;
      }
    }
    &_img {
      width: 100%;
      height: 63vh;
      background-image: url("../assets/pictures/about-us-1.png");
      background-repeat: no-repeat;
      background-size: cover;
      margin: 50px 0;
    }
  }
  &__contacts {
    width: 121px;
    &_list {
      display: flex;
      flex-direction: column;
      list-style: none;
    }
    &_elem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      cursor: pointer;
      transition: 0.5s;
      color: $accent;
      &:hover {
        filter: invert(0.6);
      }
    }
    &_social-logo {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .instagram {
      background-image: url("../assets/icons/instagram.svg");
    }
    .facebook {
      background-image: url("../assets/icons/facebook.svg");
    }
    .twitter {
      background-image: url("../assets/icons/twitter.svg");
    }
    .whatsapp {
      background-image: url("../assets/icons/whatsapp.svg");
    }
  }
}
</style>
