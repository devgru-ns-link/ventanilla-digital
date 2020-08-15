<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left is-hidden-touch">
            <h1 class="title is-1">Ventanilla Digital</h1>
            <h2 class="subtitle colored is-4">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ex deleniti aliquam tempora libero excepturi vero soluta odio
              optio sed.
            </p>
          </div>
          <div class="column right ">
            <div class="has-text-centered">
              <h1 class="title is-4">Sign up today</h1>
              <p class="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
            </div>

            <form>
              <b-field>
                <b-input placeholder="No label" v-model="name"></b-input>
              </b-field>

              <b-field type="is-danger" message="This email is invalid">
                <b-input type="email" value="john@" maxlength="30"> </b-input>
              </b-field>

              <b-field type="is-success" message="This username is available">
                <b-input value="johnsilver" maxlength="30"></b-input>
              </b-field>

              <b-field>
                <b-input
                  type="password"
                  value="iwantmytreasure"
                  password-reveal
                >
                </b-input>
              </b-field>

              <b-field>
                <b-input maxlength="200" type="textarea"></b-input>
              </b-field>

              <button class="button is-block is-primary is-fullwidth">
                Submit
              </button>
              <br />
              <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
            </form>
          </div>
        </div>
      </div>
      <div class="column is-8 is-offset-2">
        <br />
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="level-right">
            <small class="level-item" style="color: var(--textLight)">
              &copy; Super Cool Website. All Rights Reserved.
            </small>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<style>
:root {
  /* --brandColor: hsl(166, 67%, 51%); */
  --background: rgb(247, 247, 247);
  --textDark: hsla(0, 0%, 0%, 0.66);
  --textLight: hsla(0, 0%, 0%, 0.33);
}

body {
  background: var(--background);
  height: 100vh;
  color: var(--textDark);
}

.field:not(:last-child) {
  margin-bottom: 1rem;
}

.register {
  margin-top: 10rem;
  background: white;
  border-radius: 10px;
}

.left,
.right {
  padding: 3rem;
}

.left {
  border-right: 5px solid var(--background);
}

.left .title {
  font-weight: 800;
  letter-spacing: -2px;
}

.left .colored {
  color: var(--brandColor);
  font-weight: 500;
  margin-top: 1rem !important;
  letter-spacing: -1px;
}

.left p {
  color: var(--textLight);
  font-size: 1.15rem;
}

.right .title {
  font-weight: 800;
  letter-spacing: -1px;
}

.right .description {
  margin-top: 1rem;
  margin-bottom: 1rem !important;
  color: var(--textLight);
  font-size: 1.15rem;
}

.right small {
  color: var(--textLight);
}

input {
  font-size: 1rem;
}

input:focus {
  border-color: var(--brandColor) !important;
  box-shadow: 0 0 0 1px var(--brandColor) !important;
}

.fab,
.fas {
  color: var(--textLight);
  margin-right: 1rem;
}
</style>
