<template>
  <div>
    <br />
    <br />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h1>{{ user.first_name }} {{ user.last_name }}</h1>
                <p>
                  <small>Instituto Tecnológico de Mérida</small>
                  <br />
                  <ul>
                    <li>{{ user.enrollment }}</li>
                    <li>Aún no has indicado tu carrera</li>
                    <li>Aún no has indicado tu semestre</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="media-right">
              <span class="icon is-left is-small">
                <i class="material-icons">settings</i>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="section" id="portfolio">
      <div class="container">
        <div class="section-heading">
          <h3 class="title is-2">Mis solicitudes</h3>
        </div>
        <div class="columns">
          <div class="column is-4">
            <!-- admin -->
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span>Admin <small>(Light)</small></span>
                  <span class="is-pulled-right">
                    <a
                      href="https://github.com/jgthms/bulma/releases/tag/0.7.2"
                    >
                      <span class="tag is-default">v0.7.2</span>
                    </a>
                    <span class="tag is-default">Desktop</span>
                    <span class="tag is-danger">WIP</span>
                  </span>
                </p>
              </header>
              <div class="card-content">
                <figure class="image">
                  <img src="" alt="Admin template screenshot" />
                </figure>
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
  async created() {
    await this.$store.dispatch('getStudent')
  },
  computed: {
    ...mapState(['user','student'])
  }
}
</script>
