<template>
  <div>
    <section class="hero is-default is-bold">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="../">
                <img src="https://www.itmerida.mx/imagenes/tec.png" alt="Logo" />
              </a>
              <span class="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <div class="tabs is-right">
                  <ul>
                    <li class="is-active"><a>Home</a></li>
                    <li><a href="">Examples</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Help</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
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

    <div class="navbar is-inline-flex is-transparent">
      <div class="navbar-brand">
        <div class="navbar-item">
          <div class="control has-icons-left">
            <input
              class="input is-small has-text-centered"
              type="text"
              placeholder="search"
            />
            <span class="icon is-left is-small">
              <i class="material-icons">search</i>
            </span>
          </div>
        </div>
      </div>
      <div class="navbar-menu">
        <a class="navbar-item">
          <img src="https://www.itmerida.mx/imagenes/tec.png" alt="Bulma" />
        </a>
      </div>
      <div class="navbar-item is-flex-touch">
        <a class="navbar-item">
          <i class="material-icons">explore</i>
        </a>
        <a class="navbar-item">
          <i class="material-icons">favorite_border</i>
        </a>
        <a class="navbar-item">
          <i class="material-icons">person_outline</i>
        </a>
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
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

    <div>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <a href="https://bulma.io"
                ><img
                  src="https://www.itmerida.mx/imagenes/tec.png"
                  alt="Made with Bulma"
                  width="100"
              /></a>
              <br />
              <strong>Bulma Fluent Theme </strong> by
              <a href="http://mubaidr.github.com" target="_blank">
                Muhammad Ubaid Raza
              </a>
              <br />
              Logos &amp; banners by
              <a href="https://github.com/jbeguna04">Jibbie R. Eguna</a> <br />
              Icons from
              <a href="http://fontawesome.io/" target="_blank">Font Awesome </a
              >.
              <br />
              The source code is licensed under
              <a
                href="http://opensource.org/licenses/mit-license.php"
                target="_blank"
                >MIT </a
              >.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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
  },
  components: {
    HelloWorld
  }
}
</script>
