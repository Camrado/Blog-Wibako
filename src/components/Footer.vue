<template>
  <footer class="footer">
    <div class="footer__content wrapper">
      <div class="footer__info">
        <div class="footer__info_logo">
          <img src="@/assets/logo.png" alt="Logo" class="footer__info_img" />
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
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 50;
  margin-top: 70px;
  background: $navbar-bg;
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
      color: $accent;
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
      color: $accent;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
    &_list {
      list-style: none;

      li {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
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
      color: $accent;
    }
    &_input {
      margin-top: 30px;
      border: none;
      background: none;
      padding: 10px;
      outline: none;
      font-size: 18px;
      color: $accent;
      border-bottom: 1px solid $accent;
    }
    &_btn {
      margin-top: 30px;
      outline: none;
      background: none;
      border: 1px solid $accent;
      color: $text-color;
      padding: 11px;
      font-size: 18px;
      width: 170px;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        color: $dark-bg;
        background: $accent;
        font-weight: bold;
      }
    }
  }
}
</style>
