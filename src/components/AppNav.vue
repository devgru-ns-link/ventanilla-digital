<template>
  <div class="navbar is-inline-flex is-transparent">
    <div class="navbar-brand">
      <div class="navbar-item">
        <div class="control has-icons-left">
          <input class="input is-small has-text-centered" type="text" placeholder="search" />
          <span class="icon is-left is-small">
            <i class="material-icons">search</i>
          </span>
        </div>
      </div>
    </div>
    <div class="navbar-menu">
      <router-link tag="a" to="/home" class="navbar-item">
        <p>Servicios Escolares ITM</p>
        <img src="https://www.itmerida.mx/imagenes/tec.png" alt="Bulma" />
      </router-link>
    </div>
    <div class="navbar-item is-flex-touch">
      <template v-if="$store.state.isLogued">
        <a class="navbar-item">
          <i class="material-icons">notifications</i>
        </a>
        <router-link tag="a" to="/about" class="navbar-item">
          <i class="material-icons">person_outline</i>
        </router-link>
      </template>
      <div v-else class="buttons">
        <router-link tag="a" to="/register" class="button is-primary">
          <strong>Sign up</strong>
        </router-link>
        <router-link tag="a" to="/login" class="button is-light">Log in</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-item img {
  padding-left: 20px;
}

.navbar-item p {
  font-weight: 800;
  font-size: 25px;
}
</style>
