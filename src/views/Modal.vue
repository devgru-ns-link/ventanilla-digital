<template>
  <section>
    <a
      @click="isComponentModalActive = true"
      class="button is-floating is-primary"
    >
      <b-icon size="is-small" icon="border-all"></b-icon>
    </a>

    <div class="modal" :class="{ 'is-active': isComponentModalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Selecciona un trámite</p>
          <button
            class="delete"
            aria-label="close"
            @click="isComponentModalActive = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <section class="container">
            <b-steps>
              <b-step-item label="Account" icon="account-key"
                ><div class="tile is-ancestor">
                  <div class="tile is-vertical is-12">
                    <div class="tile">
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                          <p class="title is-5">Constancia de estudios</p>
                          <p class="subtitle is-6">
                            Normal, con promedio, SITUR
                          </p>
                        </article>
                        <article class="tile is-child notification is-primary">
                          <p class="title is-5">Horario escolar</p>
                          <p class="subtitle is-6">Bottom tile</p>
                        </article>
                      </div>
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                          <p class="title is-5">Alta/Baja IMSS</p>
                          <p class="subtitle is-6">Requiere NSS</p>
                        </article>
                        <article class="tile is-child notification is-primary">
                          <p class="title is-5">Seguimiento académico</p>
                          <p class="subtitle is-6">
                            Aligned with the right tile
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </b-step-item>
              <b-step-item label="Profile" icon="account">
                <div class="columns">
                  <div class="column is-12">
                    <div>
                      <b-field label="Tipo de constancia">
                        <b-select placeholder="Large" size="is-medium" expanded>
                          <option value="flint">Normal</option>
                          <option value="silver">SITUR</option>
                          <option value="silver">Promedio</option>
                        </b-select>
                      </b-field>

                      <b-field label="Tipo de solicitud">
                        <b-select placeholder="Large" size="is-medium" expanded>
                          <option value="flint">Alta</option>
                          <option value="silver">Baja</option>
                        </b-select>
                      </b-field>

                      <div class="field">
                        <label class="label">NSS</label>
                        <div class="control">
                          <input
                            class="input"
                            type="text"
                            placeholder="Text input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-step-item>
              <b-step-item label="Social" icon="account-plus">
                <div class="field">
                  <label class="label">Matricula</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Text input" />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Carrera</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="email"
                      placeholder="Email input"
                      value=""
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
              </b-step-item>

              <b-step-item label="Archivos" icon="account-plus">
                <label class="label">INE</label>

                <b-field
                  class="file is-primary"
                  :class="{ 'has-name': !!file }"
                >
                  <b-upload v-model="file" class="file-label">
                    <span class="file-cta">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">Click to upload</span>
                    </span>
                    <span class="file-name" v-if="file">
                      {{ file.name }}
                    </span>
                  </b-upload>
                </b-field>
                <label class="label">Foto infantil</label>

                <b-field
                  class="file is-primary"
                  :class="{ 'has-name': !!file }"
                >
                  <b-upload v-model="file" class="file-label">
                    <span class="file-cta">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">Click to upload</span>
                    </span>
                    <span class="file-name" v-if="file">
                      {{ file.name }}
                    </span>
                  </b-upload>
                </b-field>

                <!-- <div class="tags">
                        <span
                          v-for="(file, index) in dropFiles"
                          :key="index"
                          class="tag is-primary"
                        >
                          {{ file.name }}
                          <button
                            class="delete is-small"
                            type="button"
                            @click="deleteDropFile(index)"
                          ></button>
                        </span>
                      </div> -->
              </b-step-item>

              <template slot="navigation" slot-scope="{ previous, next }">
                <div class="buttons">
                  <b-button
                    type="is-primary"
                    :disabled="next.disabled"
                    @click.prevent="next.action"
                    size="is-large"
                    expanded
                    >Siguiente</b-button
                  >
                </div>

                <!-- <b-button
                  outlined
                  type="is-danger"
                  icon-pack="fas"
                  icon-left="backward"
                  :disabled="previous.disabled"
                  @click.prevent="previous.action"
                >
                  Previous
                </b-button> -->
              </template>
            </b-steps>
          </section>
        </section>
        <!-- <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer> -->
      </div>
    </div>
  </section>
</template>

<script>
const ModalForm = {
  props: ['email', 'password'],
  template: `
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Email">
                        <b-input
                            type="email"
                            :value="email"
                            placeholder="Your email"
                            required>
                        </b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input
                            type="password"
                            :value="password"
                            password-reveal
                            placeholder="Your password"
                            required>
                        </b-input>
                    </b-field>

                    <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Close</button>
                    <button class="button is-primary">Login</button>
                </footer>
            </div>
        `
}

export default {
  components: {
    ModalForm
  },
  data () {
    return {
      file: null,
      isComponentModalActive: true,
      formProps: {
        email: 'evan@you.com',
        password: 'testing'
      }
    }
  }
}
</script>

<style>
.notification:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
