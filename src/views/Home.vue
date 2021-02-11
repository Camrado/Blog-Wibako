<template>
  <main class="home-page">
    <section class="information">
      <div class="wrapper">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div class="information__content">
          <div class="information__content_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita error quas laudantium mollitia, similique
              cum voluptas? Perferendis, voluptatibus temporibus? Repellat beatae aliquam quaerat? Exercitationem veritatis autem
              unde quae sit vel, earum obcaecati enim laborum? Laborum eum consequuntur repellendus dolores nobis reiciendis, amet
              impedit error at, tempore quasi a modi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quo ab nihil mollitia accusamus dolore
              recusandae sapiente sunt, pariatur aliquid voluptate ducimus in soluta ullam tempora minima! Reiciendis vero tempore
              numquam debitis? Explicabo laborum perferendis, dolores ab asperiores dignissimos labore consectetur quasi quisquam
              maxime fugit.
            </p>
          </div>
          <div class="information__content_img first-sec-img"></div>
        </div>
      </div>
    </section>

    <section class="information">
      <div class="wrapper">
        <div class="information__content">
          <div class="information__content_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita error quas laudantium mollitia, similique
              cum voluptas? Perferendis, voluptatibus temporibus? Repellat beatae aliquam quaerat? Exercitationem veritatis autem
              unde quae sit vel, earum obcaecati enim laborum? Laborum eum consequuntur repellendus dolores nobis reiciendis, amet
              impedit error at, tempore quasi a modi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quo ab nihil mollitia accusamus dolore
              recusandae sapiente sunt, pariatur aliquid voluptate ducimus in soluta ullam tempora minima! Reiciendis vero tempore
              numquam debitis? Explicabo laborum perferendis, dolores ab asperiores dignissimos labore consectetur quasi quisquam
              maxime fugit.
            </p>
          </div>
          <div class="information__content_img third-sec-img"></div>
        </div>
      </div>
    </section>

    <section class="information">
      <div class="wrapper">
        <div class="information__content">
          <div class="information__content_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita error quas laudantium mollitia, similique
              cum voluptas? Perferendis, voluptatibus temporibus? Repellat beatae aliquam quaerat? Exercitationem veritatis autem
              unde quae sit vel, earum obcaecati enim laborum? Laborum eum consequuntur repellendus dolores nobis reiciendis, amet
              impedit error at, tempore quasi a modi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quo ab nihil mollitia accusamus dolore
              recusandae sapiente sunt, pariatur aliquid voluptate ducimus in soluta ullam tempora minima! Reiciendis vero tempore
              numquam debitis? Explicabo laborum perferendis, dolores ab asperiores dignissimos labore consectetur quasi quisquam
              maxime fugit.
            </p>
          </div>
          <div class="information__content_img second-sec-img"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
.home-page {
  background: $dark-bg;
}
.information {
  min-height: 70vh;
  padding-top: 100px;
  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &_text {
      width: 55%;
      &:first-letter {
        font-family: 'Lobster Two', cursive;
        font-size: 35px;
        color: $accent;
      }
    }
    &_img {
      background-repeat: no-repeat;
      background-size: cover;
    }
    .first-sec-img {
      width: 370px;
      height: 350px;
      background-image: url('../assets/homepage/blog-post.svg');
    }
    .second-sec-img {
      width: 400px;
      height: 280px;
      background-image: url('../assets/homepage/blog-post-2.svg');
    }
    .third-sec-img {
      width: 380px;
      height: 260px;
      background-image: url('../assets/homepage/blog-post-3.svg');
    }
  }
  h1 {
    color: $accent;
    font-size: 40px;
    margin-bottom: 50px;
  }
  p {
    text-indent: 65px;
    margin-bottom: 20px;
  }
  &:nth-child(odd) {
    .information__content_text {
      order: 2;
    }
    .information__content_img {
      order: 1;
    }
  }
}
</style>
