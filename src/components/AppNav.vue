<template>
  <div class="navbar is-inline-flex is-transparent">
    <div class="navbar-brand">
      <div class="navbar-item">
        <div class="control has-icons-left">
          <input
            class="input is-small has-text-centered"
            type="text"
            placeholder="search"
          />
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
    <div class="navbar-item is-flex-touch nav">
      <template v-if="$store.state.isLogued">

        <a class="navbar-item">
          <i class="material-icons">notifications</i>
          <small class="badge">3</small>
        </a>
        <b-dropdown
          v-model="navigation"
          position="is-bottom-left"
          append-to-body
          aria-role="menu"
        >
          <a class="navbar-item" slot="trigger" role="button">
            <i class="material-icons">person_outline</i>
            <b-icon icon="menu-down"></b-icon>
          </a>
          <b-dropdown-item custom aria-role="menuitem">
            Registrado como <b>Jacinto Canek</b>
          </b-dropdown-item>
          <hr class="dropdown-divider" />
          <b-dropdown-item has-link value="home" aria-role="menuitem">
            <router-link tag="a" to="/home">
              <b-icon icon="home"></b-icon>
              Inicio
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item has-link value="blog" aria-role="menuitem">
            <router-link tag="a" to="/about">
              <b-icon icon="book-open"></b-icon>
              Mis solicitudes
            </router-link>
          </b-dropdown-item>
          <hr class="dropdown-divider" aria-role="menuitem" />
          <b-dropdown-item has-link value="settings">
            <router-link tag="a" to="/about">
              <b-icon icon="cog"></b-icon>
              Configuración
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item value="logout" aria-role="menuitem">
            <b-icon icon="logout"></b-icon>
            Cerrar Sesión
          </b-dropdown-item>
        </b-dropdown>
      </template>
      <div v-else class="buttons">
        <router-link tag="a" to="/register" class="button is-primary">
          <strong>Sign up</strong>
        </router-link>
        <router-link tag="a" to="/login" class="button is-light"
          >Log in</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navigation: 'home'
    }
  }
}
</script>

<style scoped>
.badge {
  position: absolute;
  top: -3px;
  right: -1px;
  padding: 1px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 100%;
  background: red;
  color: white;
}
.navbar-item img {
  padding-left: 20px;
}

.navbar-item p {
  font-weight: 800;
  font-size: 25px;
}
</style>
 