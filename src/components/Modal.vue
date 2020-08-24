<template>
  <section>
    <a
      @click="show_form(true)"
      class="button is-floating is-primary"
      v-show="$store.state.isLogued"
    >
      <b-icon size="is-small" icon="border-all"></b-icon>
    </a>

    <div
      class="modal"
      :class="{ 'is-active': $store.state.isComponentModalActive }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Solicitud de documentos</p>
          <button
            class="delete"
            aria-label="close"
            @click="show_form(false), (activeStep = 0)"
          ></button>
        </header>
        <section class="modal-card-body">
          <section class="container">
            <b-steps v-model="activeStep">
              <b-step-item
                :clickable="false"
                label="Trámite"
                icon="file-document"
              >
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-12">
                    <div class="tile">
                      <div class="tile is-parent is-vertical">
                        <article
                          class="tile is-child notification is-primary"
                          @click="optionSelected(1, 'CONSTANCIA')"
                        >
                          <p class="title is-5">Constancia de estudios</p>
                          <p class="subtitle is-6">
                            Normal, con promedio, SITUR
                          </p>
                        </article>
                        <article
                          class="tile is-child notification is-primary"
                          @click="optionSelected(2, 'horario')"
                        >
                          <p class="title is-5">Horario escolar</p>
                          <p class="subtitle is-6">Bottom tile</p>
                        </article>
                      </div>
                      <div class="tile is-parent is-vertical">
                        <article
                          class="tile is-child notification is-primary"
                          @click="optionSelected(1, 'IMMS')"
                        >
                          <p class="title is-5">Alta/Baja IMSS</p>
                          <p class="subtitle is-6">Requiere NSS</p>
                        </article>
                        <article
                          class="tile is-child notification is-primary"
                          @click="optionSelected(2, 'seguimiento')"
                        >
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
              <b-step-item
                :clickable="false"
                label="Requisitos"
                icon="file-document-edit"
              >
                <div class="columns">
                  <div class="column is-12">
                    <div>
                      <ValidationObserver ref="form1">
                        <ValidationProvider
                          rules="required"
                          name="description"
                          v-slot="{ errors, valid }"
                          v-if="option == 'CONSTANCIA'"
                        >
                          <b-field
                            :message="errors"
                            :type="{
                              'is-danger': errors[0],
                              'is-success': valid
                            }"
                            label="Tipo de constancia"
                          >
                            <b-select
                              size="is-medium-small"
                              expanded
                              placeholder="Selecciona un tipo de constancia"
                              v-model="schoolRequest.description"
                            >
                              <option value>Seleccione una opcion</option>
                              <option value="Normal">Normal</option>
                              <option value="SITUR">SITUR</option>
                              <option value="Promedio">Promedio</option>
                            </b-select>
                          </b-field>
                        </ValidationProvider>

                        <template>
                          <ValidationProvider
                            rules="required"
                            name="description"
                            v-slot="{ errors, valid }"
                            v-if="option == 'IMMS'"
                          >
                            <b-field
                              :message="errors"
                              :type="{
                                'is-danger': errors[0],
                                'is-success': valid
                              }"
                              label="Tipo de solicitud"
                            >
                              <b-select
                                size="is-medium-small"
                                expanded
                                v-model="schoolRequest.description"
                              >
                                <option value>Seleccione una opcion</option>

                                <option value="alta_imms">Alta</option>
                                <option value="baja_imms">Baja</option>
                              </b-select>
                            </b-field>
                          </ValidationProvider>
                          <template v-if="option == 'IMMS'">
                            <b-field label="NSS">
                              <BInputWithValidation
                                rules="required"
                                type="text"
                                v-model="student.NSS"
                                placeholder="NSS"
                              />
                            </b-field>

                            <b-field
                              label="CURP"
                              v-if="schoolRequest.description == 'alta_imms'"
                            >
                              <BInputWithValidation
                                rules="required"
                                v-model="student.CURP"
                                type="text"
                                placeholder="CURP"
                              />
                            </b-field>
                            <a
                              v-if="schoolRequest.description == 'alta_imms'"
                              href="https://www.gob.mx/curp/"
                              target="_blank"
                              class="is-12"
                              >Consultar CURP</a
                            >
                          </template>
                        </template>
                      </ValidationObserver>
                    </div>
                  </div>
                </div>
              </b-step-item>
              <b-step-item :clickable="false" label="Datos" icon="account">
                <ValidationObserver ref="form2">
                  <b-field label="Nombre(s)">
                    <BInputWithValidation
                      rules="required"
                      v-model="user.first_name"
                      type="text"
                      placeholder="Nombre(s)"
                    />
                  </b-field>

                  <b-field label="Apellidos">
                    <BInputWithValidation
                      rules="required"
                      v-model="user.last_name"
                      type="text"
                      placeholder="Apellidos"
                    />
                  </b-field>

                  <b-field label="Matrícula">
                    <BInputWithValidation
                      rules="required|matricula"
                      v-model="student.enrollment"
                      type="text"
                      placeholder="Matrícula"
                    />
                  </b-field>

                  <b-field label="Carrera">
                    <BSelectWithValidation
                      rules="required"
                      v-model="student.career"
                      size="is-small-medium"
                      placeholder="Selecciona tu carrera"
                    >
                      <option value="IGE"
                        >Ingeniería en Gestión Empresarial</option
                      >
                      <option value="IA">Ingeniería Ambiental</option>
                      <option value="IBQ">Ingeniería Bioquímica</option>
                      <option value="IBM">Ingeniería Biomédica</option>
                      <option value="IQ">Ingeniería Química</option>
                      <option value="IELE">Ingeniería Eléctrica</option>
                      <option value="IELC">Ingeniería Electrónica</option>
                      <option value="IM">Ingeniería Mecánica</option>
                      <option value="IC">Ingeniería Civil</option>
                      <option value="II">Ingeniería Industrial</option>
                      <option value="ISC"
                        >Ingeniería en Sistemas Computacionales</option
                      >
                      <option value="LA">Licenciatura en Administración</option>
                    </BSelectWithValidation>
                  </b-field>

                  <b-field label="Ingreso">
                    <BInputWithValidation
                      rules="required"
                      placeholder="Selecciona tu ingreso"
                      size="is-small-medium"
                      v-model="student.admission"
                      type="number"
                      min="1"
                      max="12"
                      expanded
                    />
                  </b-field>
                </ValidationObserver>
              </b-step-item>
              <b-step-item
                :clickable="false"
                label="Archivos"
                icon="cloud-upload"
              >
                <ValidationObserver ref="form3">
                  <template>
                    <ValidationProvider
                      rules="required"
                      name="description"
                      v-slot="{ errors, valid }"
                    >
                      <label class="label">INE</label>

                      <b-field
                        class="file is-primary"
                        :class="{ 'has-name': !!schoolRequest.INE }"
                      >
                        <b-upload
                          required
                          v-model="schoolRequest.INE"
                          class="file-label"
                        >
                          <span class="file-cta">
                            <b-icon class="file-icon" icon="upload"></b-icon>
                            <span class="file-label">Click to upload</span>
                          </span>

                          <span class="file-name" v-if="schoolRequest.INE">
                            {{ schoolRequest.INE.name }}
                          </span>
                        </b-upload>
                      </b-field>
                      {{ errors[0] }}
                    </ValidationProvider>
                    <br />

                    <template v-if="option == 'CONSTANCIA'">
                      <ValidationProvider
                        rules="required"
                        name="description"
                        v-slot="{ errors, valid }"
                      >
                        <label class="label">Foto infantil</label>
                        <b-field
                          class="file is-primary"
                          :class="{ 'has-name': !!schoolRequest.photo }"
                        >
                          <b-upload
                            required
                            v-model="schoolRequest.photo"
                            class="file-label"
                          >
                            <span class="file-cta">
                              <b-icon class="file-icon" icon="upload"></b-icon>
                              <span class="file-label">Click to upload</span>
                            </span>
                            <span class="file-name" v-if="schoolRequest.photo">
                              {{ schoolRequest.photo.name }}
                            </span>
                          </b-upload>
                        </b-field>
                        {{ errors[0] }}
                      </ValidationProvider>
                    </template>
                  </template>
                </ValidationObserver>
              </b-step-item>

              <template slot="navigation" slot-scope="{ previous, next }">
                <div class="buttons">
                  <b-button
                    v-if="activeStep == 3"
                    type="is-primary"
                    @click="submit"
                    size="is-medium"
                    expanded
                    >¡Terminar y enviar!</b-button
                  >
                  <b-button
                    v-else-if="activeStep !== 0"
                    type="is-primary"
                    :disabled="next.disabled"
                    @click.prevent="nextStep()"
                    size="is-medium"
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
                </b-button>-->
              </template>
            </b-steps>
          </section>
        </section>
        <!-- <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>-->
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { schoolRequest, setStudent } from '../api/users'

export default {
  async mounted () {
    this.activeStep = 0
    const res = await this.$store.dispatch('getStudent')
  },
  data () {
    return {
      file: null,
      activeStep: 0,
      option: '',
      tramite: ''
    }
  },
  computed: { ...mapState(['user', 'student', 'schoolRequest']) },

  methods: {
    show_form (value) {
      this.$store.commit('SHOW_FORM', value)
    },
    optionSelected (step, option) {
      this.activeStep = step
      this.option = option
    },
    async nextStep () {
      let success
      switch (this.activeStep) {
        case 1:
          success = await this.$refs.form1.validate()
          if (!success) return
          this.$refs.form1.$nextTick(() => (this.activeStep += 1))
          break
        case 2:
          success = await this.$refs.form2.validate()
          if (!success) return
          this.$refs.form1.$nextTick(() => (this.activeStep += 1))
          break
        default:
          break
      }
    },
    async submit () {
      let success = await this.$refs.form3.validate()
      const form_data = new FormData()
      if (!success) return
      // delete this.schoolRequest.INE
      for (var key in this.schoolRequest) {
        form_data.append(key, this.schoolRequest[key])
      }
      this.$buefy.dialog.confirm({
        title: 'Revisa que los datos sean correctos',
        message: `Trámite solicitado: ` + this.option,
        cancelText: 'Cancelar',
        confirmText: 'Enviar',
        type: 'is-info',
        hasIcon: true,
        iconPack: 'fa',
        onConfirm: async () => {
          await setStudent(this.user.id, this.student)
          await schoolRequest(this.user.id, form_data)
          this.$buefy.toast.open({
            message: '¡Solicitud enviada correctamente!',
            type: 'is-success'
          })
        }
      })
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
