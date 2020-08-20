<template>
  <div>
    <br /><br />
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <article class="media">
            <figure class="media-left">
              <div class="image is-128x128">
                <img
                  class="is-rounded"
                  src="https://www.becas-santander.com/assets/images/loggedUser.jpg"
                />
              </div>
            </figure>
            <div class="media-content">
              <div class="content">
                <h1 class="title is-3">
                  {{ user.first_name }} {{ user.last_name }}
                </h1>
                <p class="subtitle is-5">Instituto Tecnológico de Mérida</p>

                <ul>
                  <li>{{ user.enrollment }}</li>
                  <li>Aún no has indicado tu carrera</li>
                  <li>Aún no has indicado tu semestre</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title">Mis solicitudes</h2>
        <b-message type="is-warning" has-icon>
          An n has alzad algn tamt slctd
        </b-message>
        <b-message type="is-info" has-icon>
          Ts slctds y tamts aacan a dnd das v s stad
        </b-message>

        <b-button size="is-large is-primary" icon-right="arrow-right"
          >Nuevo tramite</b-button
        >

        <div class="columns is-centered is-multiline is-mobile">
          <div v-for="_ in 10" class="column is-one-quarter-desktop">
            <div class="card">
              <div class="card-image"></div>
              <header class="card-header">
                <div class="card-header-title">
                  <span>Admin <small>(Light)</small></span>
                  <span class="is-pulled-right">
                    <span class="tag is-default">Desktop</span>
                    <span class="tag is-danger">WIP</span>
                  </span>
                </div>
              </header>

              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                </div>
              </div>
              <footer class="card-footer">
                <a href="templates/admin.html" class="card-footer-item"
                  >Preview</a
                >
                <a
                  href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html"
                  class="card-footer-item"
                  >Source Code</a
                >
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async created () {
    await this.$store.dispatch('getStudent')
  },
  computed: {
    ...mapState(['user', 'student'])
  }
}
</script>
