<template>
  <div class="home-page">
    <section class="header-sec">
      <div class="header-sec__text">
        <h1>
          Welcome to
          <span class="header-sec__text_wibako">Wibako</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore distinctio nemo dolor pariatur? Adipisci, asperiores rem id
          suscipit eos debitis. Necessitatibus saepe fugiat id iusto dolorum, atque ab consectetur.
        </p>
      </div>
    </section>

    <section class="information">
      <div class="wrapper">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div class="information__content">
          <div class="information__content_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita error quas laudantium mollitia, similique cum voluptas?
              Perferendis, voluptatibus temporibus? Repellat beatae aliquam quaerat? Exercitationem veritatis autem unde quae sit vel, earum obcaecati
              enim laborum? Laborum eum consequuntur repellendus dolores nobis reiciendis, amet impedit error at, tempore quasi a modi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quo ab nihil mollitia accusamus dolore recusandae sapiente sunt,
              pariatur aliquid voluptate ducimus in soluta ullam tempora minima! Reiciendis vero tempore numquam debitis? Explicabo laborum
              perferendis, dolores ab asperiores dignissimos labore consectetur quasi quisquam maxime fugit.
            </p>
          </div>
          <img src="../assets/homepage/blog-post.svg" alt="Blog post" class="information__content_img" />
        </div>
      </div>
    </section>

    <section class="information">
      <div class="wrapper">
        <div class="information__content">
          <div class="information__content_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita error quas laudantium mollitia, similique cum voluptas?
              Perferendis, voluptatibus temporibus? Repellat beatae aliquam quaerat? Exercitationem veritatis autem unde quae sit vel, earum obcaecati
              enim laborum? Laborum eum consequuntur repellendus dolores nobis reiciendis, amet impedit error at, tempore quasi a modi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quo ab nihil mollitia accusamus dolore recusandae sapiente sunt,
              pariatur aliquid voluptate ducimus in soluta ullam tempora minima! Reiciendis vero tempore numquam debitis? Explicabo laborum
              perferendis, dolores ab asperiores dignissimos labore consectetur quasi quisquam maxime fugit.
            </p>
          </div>
          <img src="../assets/homepage/blog-post-2.svg" alt="Blog post" class="information__content_img" />
        </div>
      </div>
    </section>

    <section class="information">
      <div class="wrapper">
        <div class="information__content">
          <div class="information__content_text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita error quas laudantium mollitia, similique cum voluptas?
              Perferendis, voluptatibus temporibus? Repellat beatae aliquam quaerat? Exercitationem veritatis autem unde quae sit vel, earum obcaecati
              enim laborum? Laborum eum consequuntur repellendus dolores nobis reiciendis, amet impedit error at, tempore quasi a modi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quo ab nihil mollitia accusamus dolore recusandae sapiente sunt,
              pariatur aliquid voluptate ducimus in soluta ullam tempora minima! Reiciendis vero tempore numquam debitis? Explicabo laborum
              perferendis, dolores ab asperiores dignissimos labore consectetur quasi quisquam maxime fugit.
            </p>
          </div>
          <img src="../assets/homepage/blog-post-3.svg" alt="Blog post" class="information__content_img" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home-page {
  background: $dark-bg;
}

.header-sec {
  position: relative;
  background-image: url("../assets/homepage/blog-bg.png");
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

    &_wibako {
      border-bottom: 2px solid $text-color;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 25px;
    }
  }
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
    }

    &_img {
      width: 35%;
      user-select: none;
    }
  }

  h1 {
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
