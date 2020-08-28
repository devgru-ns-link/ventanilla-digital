<template>
  <div>
    <br />
    <br />
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <article class="media">
            <figure class="media-left">
              <div class="image is-128x128">
                <img
                  class="is-rounded"
                  src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"
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
                  <li>Matrícula: {{ user.enrollment }}</li>
                  <li v-if="!student.career">Aún no has indicado tu carrera</li>
                  <li v-else>Carrera: {{ student.career }}</li>
                  <li v-if="!student.admission">
                    Aún no has indicado tu semestre
                  </li>
                  <li v-else>Ingreso: {{ student.admission }}</li>
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
        <b-message type="is-warning" has-icon
          >Aún no has realizado una solicitud</b-message
        >
        <b-message type="is-info" has-icon
          ><p>
            ¡Hola!, en esta sección podrás realizar los trámites escolares que
            necesites, solamente debes seleccionar el trámite, llenar los
            requerimientos y darle al botón de solicitar,
            <b>¡Así de fácil!</b>
          </p>
        </b-message>

        <b-message type="is-info" has-icon
          ><p>
            ¡Tranquilo! se te irá notificando del estatus de tu solicitud,
            estate pendiente de tus notificaciones y correo.
          </p>
        </b-message>

        <div class="columns is-centered is-multiline is-mobile">
          <div v-for="i in 11" :key="i" class="column is-one-quarter-desktop">
            <div class="card">
              <div class="card-image"></div>
              <header class="card-header">
                <div class="card-header-title">
                  <span> Solicitud No.{{ i }} </span>
                </div>
              </header>

              <div class="card-content">
                <b-steps
                  v-model="activeStep"
                  :animated="isAnimated"
                  :rounded="isRounded"
                  :has-navigation="hasNavigation"
                  :icon-prev="prevIcon"
                  :icon-next="nextIcon"
                  :label-position="labelPosition"
                  :mobile-mode="mobileMode"
                >
                  <b-step-item step="1" :clickable="isStepsClickable">
                    <h1 class="title has-text-centered">Enviada</h1>
                    <p class="has-text-centered">
                      Tu solicitud ha sido enviada.
                    </p>
                    <br />
                    <strong>Detalles:</strong>
                    <br />
                    <li><b>Trámite:</b> CONSTANCIA</li>
                    <li><b>Tipo:</b> NORMAL</li>
                  </b-step-item>

                  <b-step-item
                    step="2"
                    :clickable="isStepsClickable"
                    class="has-text-centered"
                  >
                    <h1 class="title has-text-centered">En proceso</h1>
                    <p></p>
                    Lorem ipsum dolor sit amet.
                  </b-step-item>

                  <b-step-item
                    step="3"
                    :clickable="isStepsClickable"
                    class="has-text-centered"
                  >
                    <h1 class="title has-text-centered">Lista</h1>
                    <p></p>
                    Lorem ipsum dolor sit amet.
                  </b-step-item>

                  <b-step-item
                    step="4"
                    :clickable="isStepsClickable"
                    class="has-text-centered"
                  >
                    <h1 class="title has-text-centered">Finalizada</h1>
                    <p></p>
                    Lorem ipsum dolor sit amet.
                  </b-step-item>
                </b-steps>
              </div>
              <footer class="card-footer">
                <a
                  href="templates/admin.html"
                  class="card-footer-item button is-primary"
                  >Cancelar</a
                >
                <a
                  href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html"
                  class="card-footer-item button is-primary"
                  >Editar</a
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
  data () {
    return {
      activeStep: 0,

      showSocial: true,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: true,

      hasNavigation: false,
      customNavigation: false,
      isProfileSuccess: false,

      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      labelPosition: 'bottom',
      mobileMode: 'minimalist'
    }
  },
  async created () {
    await this.$store.dispatch('getStudent')
  },
  computed: {
    ...mapState(['user', 'student'])
  }
}
</script>
