<template>
  <div>
    <!-- <app-nav/> -->
    <section class="hero is-default is-bold">
      <!-- <div class="hero-head">

      </div>-->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="is-4by3">    
                <img
                  src="../../img/Studying-pana.svg"
                  alt="Description"
                />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <h1 class="title is-2">Servicios Escolares</h1>
              <h2 class="subtitle is-4">Instituto Tecnológico de Mérida</h2>
              <br />
              <p class="has-text-centered">
                Bienvenido a la
                <b>#VentanillaDigitalITM</b>
              </p>
              <br />
              <p>
                <b>Ventanilla Digital ITM</b> es un manera de realizar tus trámites escolares, de una manera
                <b>sencilla, rápida y remota</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="box cta">
      <p class="has-text-centered">
        <span class="tag is-primary">Ventanilla Digital</span> Una iniciativa
        especial para la solución de problemas generados por el coronavirus
        Covid-19
      </p>
    </div>
    <div class="container carousel">
      <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 6" :key="i">
          <span class="image">
            <img :src="getImgUrl(i)" />
          </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
          <span class="al image">
            <img :src="getImgUrl(props.i)" :title="props.i" />
          </span>
        </template>
      </b-carousel>
    </div>
    <section class="section" id="about">
      <div class="container has-text-centered">
        <h2 class="title">Trámites</h2>
        <p>Selecciona el trámite que deseas realizar</p>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <div class="card box cta">
            <div class="card-image">
              <figure class="image img">
                <img src="../../img/estudiante.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 text">Constancia de estudios</p>
                  <p
                    class="hide"
                  >La constancia de estudios es un documento que válida tu participación como estudiante en la institución, es requerida en trámites como becas.</p>
                  
                  <router-link tag="a" to="/register" class="button is-primary">
                    <strong>Solicitar</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card box cta">
            <div class="card-image">
              <figure class="image">
                <img src="../../img/horario.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Horario</p>
                  <p
                    class="hide"
                  >El horario es una herramienta que te ayudará a organizarte para tus clases, además de que es muy útil para presentar como evidencia a quién lo solicite.</p>
                  
                  <router-link tag="a" to="/register" class="button is-primary">
                    <strong>Solicitar</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card box cta">
            <div class="card-image">
              <figure class="image">
                <img src="../../img/seguimiento.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Seguimiento académico</p>
                  <p
                    class="hide"
                  >El seguimiento escolar es un documento que te ayudará a ver tu historial académico, es útil para ver tu progreso escolar.</p>
                  
                  <router-link tag="a" to="/register" class="button is-primary">
                    <strong>Solicitar</strong>
                  </router-link>
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
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
  },
};
</script>

<style scoped>
.card {
  height: 19vw;
  background: #262626;
  overflow: hidden;
}
.card .card-image,
.card .card-content {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  transition: 0.5s;
}
.card .card-image {
  top: 0;
  left: 0;
}
.card:hover .card-image {
  top: 0;
  left: -100%;
}
.card .card-image img {
  width: 100%;
}
.card .card-content {
  background: #262626;
  top: 0;
  left: 100%;
}
.card:hover .card-content {
  top: 0;
  left: 0%;
}

.card .card-content p {
  margin: 1vh 0 0;
  color: #fff;
  padding-bottom: 2vh;
}

.hide p{
  font-size: 2vh;
}

.card .card-content a {
  margin: 2vh 0 0;
  color: #fff;
}

.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}

.carousel {
  margin-top: 50px;
  height: 600px;
}

.carousel .image {
  height: 500px;
}

@media screen and (max-width: 1024px) {
  .hide {
    display: none;
  }
}

@media screen and (max-width: 769px) {
  .card {
    height: 50vw;
  }
  .hide {
    display: inline;
  }
}

@media screen and (max-width: 600px) {
  .carousel .image {
    height: 200px;
  }

  .carousel {
    height: 250px;
  }

  .hide {
    display: none;
  }
}
</style>
