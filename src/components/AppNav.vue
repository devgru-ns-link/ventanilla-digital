<template>
  <nav class="navbar is-white topNav">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href>
          <img src="logo_self_service2.png" alt="ITM" />
        </a>
        <div class="navbar-burger burger" data-target="topNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="topNav" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item is-flex-touch nav">
            <!-- <div class="field is-grouped">
              <p class="control">
                <a class="button is-small">
                  <span class="icon">
                    <i class="fa fa-user-plus"></i>
                  </span>
                  <span>
                    Register
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-small is-info is-outlined">
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>Login</span>
                </a>
              </p>
            </div>-->
            <template v-if="$store.state.isLogued">
              <!-- <div class="navbar-item">
                <div class="control has-icons-left">
                  <form action>
                    <input type="search" name="nombre" placeholder="Buscar" />
                  </form>
                </div>
              </div> 
              
              <div class="card-table">
                                <div class="content">
                                    <table class="table is-fullwidth is-striped">
                                        <tbody>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
              </div>-->
              <a class="navbar-item" slot="trigger" role="button">
                <i class="material-icons">border_all</i>
              </a>

              <b-dropdown
                v-model="navigation"
                position="is-bottom-left"
                append-to-body
                aria-role="menu"
              >
                <a class="navbar-item" slot="trigger" role="button">
                  <i class="material-icons">notifications</i>
                  <small class="badge">3</small>
                </a>
                <b-dropdown-item has-link value="blog" aria-role="menuitem">
                  <div class="card-table">
                    <div class="content">
                      <table class="table is-fullwidth is-striped">
                        <div v-for="i in 3" :key="i">
                          <router-link tag="a" to="/about">
                            <article class="media">
                              <div class="media-content">
                                <div class="content">
                                  <p>
                                    Et quam aut aperiam expedita eos sit....
                                  </p>
                                </div>
                                <nav class="level is-mobile">
                                  <div class="level-left">
                                    <div class="level-item">
                                      <span class="tag is-small is-danger"
                                        ><span class="icon is-small"
                                          ><i
                                            class="mdi mdi-bell"
                                          ></i></span
                                      ></span>
                                    </div>
                                    <div class="level-item">
                                      <small>2 weeks ago</small>
                                    </div>
                                  </div>
                                </nav>
                              </div>
                            </article>
                          </router-link>
                        </div>
                      </table>
                    </div>
                  </div>
                  <footer class="card-footer is-centered">
                    <a href="#" class="card-footer-item">View All</a>
                  </footer>
                </b-dropdown-item>
              </b-dropdown>
              <b-dropdown
                v-model="navigation"
                position="is-bottom-left"
                append-to-body
                aria-role="menu"
              >
                <a class="navbar-item" slot="trigger" role="button">
                  <i class="material-icons">person_outline</i>
                  <b-icon size="is-small" icon="menu-down"></b-icon>
                </a>
                <b-dropdown-item custom aria-role="menuitem">
                  Registrado como
                  <b>{{ $store.state.user.enrollment }}</b>
                </b-dropdown-item>
                <hr class="dropdown-divider" />
                <!-- <b-dropdown-item has-link value="home" aria-role="menuitem">
                  <router-link tag="a" to="/home">
                    <b-icon size="is-small" icon="home"></b-icon>Inicio
                  </router-link>
                </b-dropdown-item>-->
                <b-dropdown-item has-link value="blog" aria-role="menuitem">
                  <router-link tag="a" to="/about">
                    <b-icon size="is-small" icon="book-open"></b-icon>&nbsp; Mis
                    solicitudes
                  </router-link>
                </b-dropdown-item>
                <b-dropdown-item has-link value="settings">
                  <router-link tag="a" to="/about">
                    <b-icon size="is-small" icon="cog"></b-icon
                    >&nbsp;Configuración
                  </router-link>
                </b-dropdown-item>

                <hr class="dropdown-divider" aria-role="menuitem" />

                <b-dropdown-item
                  @click="logout"
                  value="logout"
                  aria-role="menuitem"
                >
                  <b-icon size="is-small" icon="logout"></b-icon>&nbsp;Cerrar
                  sesión
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navigation: 'home'
    }
  },
  mounted () {
    var burger = document.querySelector('.burger')
    var menu = document.querySelector('#' + burger.dataset.target)
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    })
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      window.location.reload()
    }
  }
}
</script>

<style scoped>
/*Inicia search*/

input[type='search'] {
  width: 45px; /*ancho por defecto*/
  background: #ededed
    url('https://antocas.com/demos/search-css3/search-icon.png') no-repeat 9px
    center; /*icono lupa*/
  padding: 9px 10px 9px 32px;
  border-radius: 15em;
  -webkit-transition: all 0.5s; /* transición de .5seg a todos los elementos para chrome*/
  -moz-transition: all 0.5s; /* transición de .5seg a todos los elementos para mozilla*/
  -o-transition: all 0.5s; /* transición de .5seg a todos los elementos para ophera*/
  transition: all 0.5s; /* transición de .5seg a todos los elementos*/
  outline: none; /* ocultar el fucos automático de los input */
}
input[type='search']:focus {
  width: 230px; /*tamaño del boton buscar al hacer click*/
  padding-left: 32px; /*espacio entre el icono lupa y el placeholder*/
  color: #000;
  background-color: #fff;
}

/*termina search*/

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
</style>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: white;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid lightgray;
}
.navbar-menu footer {
  background-color: #f2f6fa !important;
}
.topNav {
  border-top: 5px solid #800000;
}
/* .topNav .container {
  border-bottom: 1px solid #e6eaee;
} */
.container .columns {
  margin: 3rem 0;
}
/* .navbar-menu .navbar-item {
  padding: 0 2rem;
} */
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li {
  padding: 5px;
}
</style>
