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
      <a class="navbar-item">
        <img src="https://www.itmerida.mx/imagenes/tec.png" alt="Bulma" />
      </a>
    </div>
    <div class="navbar-item is-flex-touch">
      <a class="navbar-item">
        <i class="material-icons">explore</i>
      </a>
      <a class="navbar-item">
        <i class="material-icons">favorite_border</i>
      </a>
      <a class="navbar-item">
        <i class="material-icons">person_outline</i>
      </a>
      <div class="buttons">
        <router-link tag="a" to="/register" class="button is-primary">
          <strong>Sign up</strong>
        </router-link>
        <router-link tag="a" to="/login" class="button is-light"> 
          Log in
        </router-link>
      </div>
    </div>
  </div>
</template>
