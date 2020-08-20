<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left is-hidden-touch">
            <h1 class="title is-1">Ventanilla Digital</h1>
            <h2 class="subtitle colored is-4">Trámites electronicos para el ITM.</h2>
            <p>
              Esta es una plataforma para solicitar a distancia los trámites de
              control escolar y ayudar contra el
              <b>covid-19</b>.
            </p>
          </div>
          <div class="column right">
            <div class="has-text-centered">
              <h1 class="title is-4">Registrate ahora!</h1>
              <p class="description">El usuario es necesario para acceder a los tramites en linea</p>
            </div>

            <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
              <form>
                <!-- Como hacer otra barrita
              <b-field> 
                <b-input type="text" placeholder="Matricula" v-model="user.enrollment"></b-input>
              </b-field> 
                -->
                <b-field>
                  <BInputWithValidation
                    rules="required"
                    type="text"
                    placeholder="Nombre(s)"
                    v-model="user.first_name"
                  />
                </b-field>

                <b-field>
                  <BInputWithValidation
                    rules="required"
                    type="text"
                    placeholder="Apellido(s)"
                    v-model="user.last_name"
                  />
                </b-field>

                <b-field type="text" :isValid="false">
                  <BInputWithValidation
                    rules="required"
                    type="text"
                    placeholder="Matricula"
                    use-html5-validation
                    required
                    validation-message="La matricula esta disponible"
                    v-model="user.enrollment"
                  />
                </b-field>

                <b-field>
                  <BInputWithValidation
                    rules="required|email"
                    type="email"
                    v-model="user.email"
                    pattern="(E|e|le|LE)[0-9]+@((itmerida[.]edu[.]mx)|(merida[.]tecnm[.]mx))"
                    validation-message="El correo es inválido"
                    placeholder="Correo"
                  />
                </b-field>

                <b-field>
                  <BInputWithValidation
                    rules="required"
                    type="password"
                    placeholder="Contraseña"
                    password-reveal
                    vid="password"
                    v-model="user.password"
                  />
                </b-field>

                <b-field>
                  <BInputWithValidation
                    rules="required|confirmed:password"
                    name="Password"
                    type="password"
                    placeholder="Confirmar contraseña"
                    password-reveal
                    v-model="user.password_confirm"
                  />
                </b-field>
                <button class="button is-block is-primary is-fullwidth" @click="signup">Registrarse</button>
                <br />
                <small>
                  <em>¿Ya tienes una cuenta?</em>
                  <router-link tag="a" to="/login"> Iniciar sesión</router-link>
                </small>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
      <div class="column is-8 is-offset-2">
        <br />
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="level-right">
            <small class="level-item" style="color: var(--textLight)">
              &copy; Instituto Tecnologico de Merida. Todos los derechos
              reservados.
            </small>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { register } from "@/api/users";
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
      user: {
        first_name: "",
        last_name: "",
        enrollment: "",
        email: "",
        password: "",
        password_confirm: "",
      },
      email: "",
      password: "",
      confirmation: "",
      subject: "",
      choices: [],
    };
  },

  methods: {
    async signup() {
      const res = await register(this.user);
      console.log(res);
      this.$buefy.dialog.alert({
        title: "¡Ya casi!",
        message: "Por favor checa tu correo para confirmar tu cuenta",
        type: "is-success",
        hasIcon: true,
        icon: "check-circle",
        iconPack: "fa",
        ariaRole: "alertdialog",
        ariaModal: true,
      });
      await this.$router.push("/home"); //Redireccionamiento con codigo
    },

    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>

<style>
:root {
  /* --brandColor: hsl(166, 67%, 51%); */
  --background: rgb(247, 247, 247);
  --textDark: hsla(0, 0%, 0%, 0.66);
  --textLight: hsla(0, 0%, 0%, 0.33);
}

body {
  background: var(--background);
  height: 100vh;
  color: var(--textDark);
}

/* .field:not(:last-child) {
  margin-bottom: 1rem;
} */

.register {
  margin-top: 3rem;
  background: white;
  border-radius: 10px;
}

.left,
.right {
  padding: 3rem;
}

.left {
  border-right: 5px solid var(--background);
}

.left .title {
  font-weight: 800;
  letter-spacing: -2px;
}

.left .colored {
  color: var(--brandColor);
  font-weight: 500;
  margin-top: 1rem !important;
  letter-spacing: -1px;
}

.left p {
  color: var(--textLight);
  font-size: 1.15rem;
}

.right .title {
  font-weight: 800;
  letter-spacing: -1px;
}

.right .description {
  margin-top: 1rem;
  margin-bottom: 1rem !important;
  color: var(--textLight);
  font-size: 1.15rem;
}

.right small {
  color: var(--textLight);
}

input {
  font-size: 1rem;
}

input:focus {
  border-color: var(--brandColor) !important;
  box-shadow: 0 0 0 1px var(--brandColor) !important;
}

.fab,
.fas {
  color: var(--textLight);
  margin-right: 1rem;
}

.va {
  display: flex;
  align-items: center;
}
</style>
