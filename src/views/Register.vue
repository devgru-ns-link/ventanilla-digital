<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left is-hidden-touch">
            <h1 class="title is-1">Ventanilla Digital</h1>
            <h2 class="subtitle colored is-4">Tramites electronicos para el ITM.</h2>
            <p>
              Esta es una plataforma para solicitar a distancia los tramites de control escolar y ayudar contra el covid.
            </p>
          </div>
          <div class="column right ">
            <div class="has-text-centered">
              <h1 class="title is-4">Registrate ahora!</h1>
              <p class="description">
                El usuario es necesario para acceder a los tramites en linea
              </p>
            </div>

            <form>

              <!-- Como hacer otra barrita
              <b-field> 
                <b-input type="text" placeholder="Matricula" v-model="enrollment"></b-input>
              </b-field> 
              -->

              <b-field type="is-success" message="La matricula esta disponible">
                <b-input type="text" placeholder="Matricula" maxlength="30" v-model="enrollment"></b-input>
              </b-field>

              <b-field type="is-danger" message="El correo es invalido">
                <b-input type="email" placeholder="Correo" maxlength="30" v-model="email"> </b-input>
              </b-field>

              <b-field>
                <b-input
                  type="password"
                  placeholder="Contraseña"
                  password-reveal
                  v-model="password"
                >
                </b-input>
              </b-field>

              <b-field>
                <b-input
                  type="password"
                  placeholder="Confirmar contraseña"
                  password-reveal
                  v-model="password_confirm"
                >
                </b-input>
              </b-field>

              <button class="button is-block is-primary is-fullwidth" @click="signup">
                Registrarse
              </button>
              <br />
              <small><em>Rellena todos los datos.</em></small>
            </form>
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
              &copy; Instituto Tecnologico de Merida. Todos los derechos reservados.
            </small>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import {register} from '@/api/users'
export default {
    data(){
        return {
            enrollment: "",
            email: "",
            password: "",
            password_confirm: ""
        }
    },
    methods:{
        async signup(){
            const res = await register({
                enrollment: this.enrollment,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
            })
            console.log(res)
            this.$router.push("/home") //Redireccionamiento con codigo
        }
    }
}
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

.field:not(:last-child) {
  margin-bottom: 1rem;
}

.register {
  margin-top: 10rem;
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
</style>
