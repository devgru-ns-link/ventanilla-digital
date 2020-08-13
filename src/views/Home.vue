<template>
  <div>
    <!-- <app-nav/> -->
    <section class="hero is-default is-bold">
      <!-- <div class="hero-head">

      </div> -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="image is-4by3">
                <img
                  src="https://www.becas-santander.com/assets/images/becas-desktop.svg"
                  alt="Description"
                />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <h1 class="title is-2">
                Servicios Escolares
              </h1>
              <h2 class="subtitle is-4">
                Instituto Tecnológico de Mérida
              </h2>
              <br />
              <p class="has-text-centered">
                Bnvd a la <b>#VntanllaDgaTM</b> A das alza ls tamts cndnt a
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="box cta">
      <p class="has-text-centered">
        <span class="tag is-primary">Vntanlla Dgal </span> s na niciativa
        especial para la solución de problemas generados por el coronavirus
        Covid-19
      </p>
    </div>
    <div class="container">
      <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium is-${carousel.color}`">
            <div class="hero-body has-text-centered">
              <h1 class="title">{{ carousel.text }}</h1>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </div>

    <br />
    <section class="section" id="about">
      <div class="container has-text-centered">
        <h2 class="title">Trámites</h2>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <div class="card box cta">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card box cta">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card box cta">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' }
      ]
    }
  }
}
</script>
