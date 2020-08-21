<template>
<body>
  <div id="app">
    <div>
      <br />
      <br />
      <section class="hero is-default is-bold">
        <!-- <div class="hero-head">

        </div>-->
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-2">
                <figure class="is-4by3">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"
                    alt="Description"
                  />
                </figure>
              </div>
              <div class="column is-6 is-offset-1">
                <h1 class="title is-2">Solicitud de trámites</h1>
                <br />
                <p>
                  ¡Hola!, en esta sección podrás realizar los trámites escolares que necesites, solamente debes seleccionar el trámite, llenar los requerimientos y darle al botón de solicitar,
                  <b>¡Así de fácil!</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section is-main-section form1">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon">
                <i class="mdi mdi-ballot default"></i>
              </span> Trámites
            </p>
            <!---->
          </header>
          <div class="card-content">
            <form>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Solicitud</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <!---->
                    <div class="control">
                      <span class="select is-empty">
                        <select required="required" v-model="selected">
                          <option
                            disabled
                            selected
                            class="first"
                            hidden="hidden"
                            value
                          >Selecciona un trámite</option>
                          <option value="Constancia de estudios">Constancia de estudios</option>
                          <option value="Horario">Horario</option>
                          <option value="Seguimiento académico">Seguimiento académico</option>
                        </select>
                      </span>
                      <!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <!---->
              </div>
            </form>
          </div>
        </div>
        <template>
          <div class="card" v-if="selected !=''">
            <header class="card-header">
              <p class="card-header-title">
                <span class="icon">
                  <i class="mdi mdi-ballot-outline default"></i>
                </span>
                {{ selected }}
              </p>
              <!---->
            </header>
            <div class="card-content">
              <form>
                <div>
                  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
                    <div class="field is-horizontal">
                      <div class="field-label is-normal">
                        <label class="label">Matrícula</label>
                      </div>
                      <div class="field-body">
                        <div class="field">
                          <!---->
                          <div class="field">
                            <!---->
                            <div class="control input_local">
                              <BInputWithValidation
                                v-if="loginType === 'matricula'"
                                rules="required|matricula"
                                type="text"
                                placeholder="Ingresa la nueva matrícula"
                                name="name"
                              />
                              <label class="input" v-else>{{ $store.state.user.enrollment }}</label>
                              <!---->
                            </div>
                            <div
                              class="button is-primary"
                              v-if="loginType === 'matricula'"
                              @click="toggleLoginType"
                            >Ver matrícula</div>
                            <div
                              class="button is-primary"
                              v-else
                              @click="toggleLoginType"
                            >Editar matrícula</div>
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!---->
                    </div>
                    <div class="field is-horizontal">
                      <div class="field-label is-normal">
                        <label class="label">Carrera</label>
                      </div>
                      <div class="field-body">
                        <div class="field">
                          <!---->
                          <div class="control">
                            <span class="select is-empty">
                              <BSelectWithValidation rules="required" v-model="subject">
                                <option
                                  value
                                  disabled
                                  selected
                                  class="first"
                                  hidden="hidden"
                                >Seleccione su carrera</option>
                                <option value="IGE">Ingeniería en Gestión Empresarial</option>
                                <option value="IA">Ingeniería Ambiental</option>
                                <option value="IBQ">Ingeniería Bioquímica</option>
                                <option value="IBM">Ingeniería Biomédica</option>
                                <option value="IQ">Ingeniería Química</option>
                                <option value="IELE">Ingeniería Eléctrica</option>
                                <option value="IELC">Ingeniería Electrónica</option>
                                <option value="IM">Ingeniería Mecánica</option>
                                <option value="IC">Ingeniería Civil</option>
                                <option value="II">Ingeniería Industrial</option>
                                <option value="ISC">Ingeniería en Sistemas Computacionales</option>
                                <option value="LA">Licenciatura en Administración</option>
                              </BSelectWithValidation>
                            </span>
                            <!---->
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!---->
                    </div>
                    <div class="field is-horizontal" v-if="selected == 'Constancia de estudios'">
                      <div class="field-label is-normal">
                        <label class="label">Tipo de constancia</label>
                      </div>
                      <div class="field-body">
                        <div class="field">
                          <!---->
                          <div class="control">
                            <span class="select is-empty">
                              <BSelectWithValidation rules="required" v-model="subject2">
                                <option
                                  value
                                  disabled
                                  selected
                                  class="first"
                                  hidden="hidden"
                                >Seleccione un tipo de constancia</option>
                                <option value="c_calificaciones">Sin calificaciones</option>
                                <option value="s_calificaciones">Con calificaciones</option>
                              </BSelectWithValidation>
                            </span>
                            <!---->
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!---->
                    </div>
                    <div class="field is-horizontal" v-if="selected == 'Constancia de estudios'">
                      <div class="field-label is-normal">
                        <label class="label">Foto</label>
                      </div>
                      <div class="field-body">
                        <div class="field">
                          <!---->
                          <div class="field file">
                            <!---->
                            <label class="upload control">
                              <a class="button is-primary">
                                <span class="icon">
                                  <i class="mdi mdi-upload default"></i>
                                </span>
                                <span>Seleccionar</span>
                              </a>
                              <input type="file" />
                            </label>
                            <!---->
                            <!---->
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!---->
                    </div>
                    <div class="field is-horizontal">
                      <div class="field-label is-normal">
                        <label class="label">Cantidad</label>
                      </div>
                      <div class="field-body">
                        <div class="field">
                          <!---->
                          <div class="control">
                            <b-field class="input_local">
                              <b-numberinput v-model="numberPlaceholder" placeholder="1" :min="1"></b-numberinput>
                            </b-field>
                            <!---->
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!---->
                    </div>
                    <div class="field is-horizontal">
                      <div class="field-label is-normal">
                        <!---->
                      </div>
                      <div class="field-body">
                        <div class="field">
                          <!---->
                          <div class="field is-grouped">
                            <!---->
                            <div class="control">
                              <button
                                type="submit"
                                class="button is-primary"
                                @click="handleSubmit(submit)"
                              >
                                <!---->
                                <span>Submit</span>
                                <!---->
                              </button>
                            </div>
                            <div class="control">
                              <button
                                type="button"
                                class="button is-primary is-outlined"
                                @click="resetForm"
                              >
                                <!---->
                                <span>Reset</span>
                                <!---->
                              </button>
                            </div>
                            <!---->
                          </div>
                          <!---->
                        </div>
                      </div>
                      <!---->
                    </div>
                  </ValidationObserver>
                </div>
              </form>
            </div>
          </div>
        </template>
      </section>
    </div>
  </div>
</body>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import BSelectWithValidation from "@/components/inputs/BSelectWithValidation";
import BInputWithValidation from "@/components/inputs/BInputWithValidation";
import BCheckboxesWithValidation from "@/components/inputs/BCheckboxesWithValidation";

export default {
  components: {
    ValidationObserver,
    BSelectWithValidation,
    BInputWithValidation,
    BCheckboxesWithValidation,
  },

  data() {
    return {
      selected: "",
      tramite: "",
      number: 1,
      numberPlaceholder: undefined,
      loginType: "username",

      email: "",
      password: "",
      confirmation: "",
      subject: "",
      subject2: "",
      file: null,
      choices: [],
    };
  },

  methods: {
    toggleLoginType: function () {
      return (this.loginType =
        this.loginType === "matricula" ? "editar" : "matricula");
    },
    submit() {
      this.$buefy.toast.open({
        message: "Su solicitud ha sido enviada",
        type: "is-success",
      });
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.subject2 = "";
      this.file = null;
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
  },
};

!(function () {
  var e = document,
    t = e.createElement("script");
  if (!("noModule" in t) && "onbeforeload" in t) {
    var n = !1;
    e.addEventListener(
      "beforeload",
      function (e) {
        if (e.target === t) n = !0;
        else if (!e.target.hasAttribute("nomodule") || !n) return;
        e.preventDefault();
      },
      !0
    ),
      (t.type = "module"),
      (t.src = "."),
      e.head.appendChild(t),
      t.remove();
  }
})();
</script>

<style scoped>
.form1 {
  margin-top: -18vh;
}

.input_local {
  width: 300px;
  max-width: 70vw;
  margin-bottom: 10px;
}

.field {
  margin-bottom: 15px;
}
</style>