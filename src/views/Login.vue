<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <h1>Ventanilla Digital</h1>
            <figure class="avatar">
              <img src="https://www.itmerida.mx/imagenes/tec.png" width="125px" alt="Logo" />
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Matrícula"
                    autofocus
                    v-model="user.enrollment"
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Contraseña"
                    v-model="user.password"
                  />
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" />
                  Recuérdame
                </label>
              </div>
              <button class="button is-block is-info is-large is-fullwidth" @click="submit">
                Iniciar sesión
                <i class="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link tag="a" to="/register">Registrarse</router-link>&nbsp;·&nbsp;
            <a href="../">Olvidé mi contraseña</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    if (this.$store.state.isLogued) {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      user: {
        enrollment: "",
        password: "",
      }
    };
  },
  methods: {
    async submit() {
      await this.$store.dispatch('login', this.user)
      this.$router.push("/home"); //Redireccionamiento con codigo
    },
  },
};
</script>

<style scoped>
html,
body {
  font-family: "Questrial", sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: rgb(247, 247, 247);
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 1rem;
  background: white;
  border-radius: 10px;
}
.avatar {
  margin-top: 20px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 0px;
  background: white;
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.login-hr {
  border-bottom: 1px solid rgb(7, 7, 7);
}

.has-text-black {
  color: black;
}

.field {
  padding-bottom: 10px;
}

.fa {
  margin-left: 5px;
}

.button {
  background: #800000;
}

.button:hover {
  background: #d9ad26;
  color: black;
  transition: 0.6s;
}

.box h1 {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -2px;
}
</style>