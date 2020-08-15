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
              <figure class="is-4by3">
                <img
                  src="../../img/laptop.svg"
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
                Bienvenido a la <b>#VentanillaDigitalITM</b> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="box cta">
      <p class="has-text-centered">
        <span class="tag is-primary">Ventanilla Digital </span> Una iniciativa
        especial para la solución de problemas generados por el coronavirus
        Covid-19
      </p>
    </div>
    <div class="container carousel">
      <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 6" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)">
            </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
            <span class="al image">
                <img :src="getImgUrl(props.i)" :title="props.i">
            </span>
        </template>
    </b-carousel>
    </div>
    <section class="section" id="about">
      <div class="container has-text-centered">
        <h2 class="title">Trámites</h2>
        <p>
          Selecciona el trámite que deseas realizar
        </p>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <div class="card box cta">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="../../img/estudiante.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Constancia de estudios</p>
                  <a href="">Solicitar</a>
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
                  src="../../img/horario.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Horario</p>
                  <a href="">Solicitar</a>
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
                  src="../../img/seguimiento.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Seguimiento académico</p>
                  <a href="">Solicitar</a>
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
          return `https://picsum.photos/id/43${value}/1230/500`
      }
    }
}
</script>

<style scoped>
.image{
  height: 350px;
}

.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}

.carousel{
  margin-top: 50px;
  height: 600px;
}

.carousel .image{
  height: 500px;
}

@media screen and (max-width:500px){
.carousel .image{
  height: 200px;
}

.carousel{
  height: 250px;
}

.image{
  height: 250px;
}
}
</style>
