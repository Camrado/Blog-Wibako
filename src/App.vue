<template>
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

  <router-view />

  <footer class="footer">
    <div class="footer__content wrapper">
      <div class="footer__info">
        <div class="footer__info_logo">
          <img src="@/assets/light-logo.png" alt="Logo" class="footer__info_img" />
          <p class="footer__info_text">Wibako</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem cupiditate quasi vel debitis recusandae ipsum aspernatur nisi
          facere? Ut?
        </p>
      </div>

      <div class="footer__support">
        <h3 class="footer__support_title">
          Support
        </h3>
        <ul class="footer__support_list">
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Downloads</li>
          <li>Locate a dealer</li>
          <li>Product registration</li>
          <li>Spare parts</li>
        </ul>
      </div>

      <div class="footer__wibako">
        <h3 class="footer__wibako_title">
          Wibako
        </h3>
        <ul class="footer__wibako_list">
          <li>About Wibako</li>
          <li>Wibako design</li>
          <li>Careers</li>
          <li>Newsroom</li>
          <li>Wibako access</li>
        </ul>
      </div>

      <div class="footer__letter">
        <h3 class="footer__letter_title">
          Stay up to date on the latest from Wibako
        </h3>
        <input type="text" class="footer__letter_input" placeholder="Enter your e-mail address" />
        <button class="footer__letter_btn">Sign up</button>
      </div>
    </div>
  </footer>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "App",

  setup() {
    onMounted(() => {
      window.addEventListener("scroll", changeBgOfNav);
    });

    function changeBgOfNav() {
      let navbar = document.querySelector(".navbar");
      navbar.classList.toggle("changebg", window.scrollY > 0);
    }

    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  background: $dark-bg;
}

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
    font-family: "Lobster Two", cursive;
    color: $text-color;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    width: 25%;

    &_link {
      color: $text-color;
      font-size: 24px;
      text-transform: uppercase;
    }
  }
}

.footer {
  margin-top: 70px;
  background: $navbar-bg;
  // border-top: 1px solid $text-color;
  padding: 70px 0;

  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-column-gap: 40px;
  }

  &__info {
    &_logo {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      cursor: pointer;
    }
    &_text {
      font-size: 35px;
      font-family: "Lobster Two", cursive;
      margin-left: 13px;
    }
    &_img {
      width: 40px;
    }
  }

  &__support,
  &__wibako {
    &_title {
      font-size: 30px;
      margin-bottom: 15px;
      cursor: pointer;
    }
    &_list {
      list-style: none;

      li {
        cursor: pointer;
      }

      @for $i from 2 through 6 {
        li:nth-child(#{$i}) {
          padding: 3.5px 0;
        }
      }
    }
  }

  &__letter {
    display: flex;
    flex-direction: column;

    &_title {
      font-size: 20px;
    }
    &_input {
      margin-top: 30px;
      border: none;
      background: none;
      padding: 10px;
      outline: none;
      font-size: 18px;
      color: $text-color;
      border-bottom: 1px solid $text-color;
    }
    &_btn {
      margin-top: 30px;
      outline: none;
      border: none;
      background: $text-color;
      color: $dark-bg;
      padding: 15px;
      font-size: 18px;
      width: 180px;
    }
  }
}
</style>
