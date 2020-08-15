<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://www.itmerida.mx/imagenes/tec.png" width="150px" alt="Logo">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Correo" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Contraseña">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Registro</a> &nbsp;·&nbsp;
                        <a href="../">Recuperar contraseña</a> &nbsp;·&nbsp;
                        <a href="../">Contacto</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
html,body {
  font-family: 'Questrial', sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #5c1b1b;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
  background: rgb(73, 21, 21);
  border-radius: 1%;
  border: 1px solid rgb(238, 144, 22);
}
.avatar {
  margin-top: -0px;
  padding-bottom: 50px;
}
.avatar img {
  padding: 0px;
  background: rgb(73, 21, 21);
  
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

.login-hr{
  border-bottom: 1px solid rgb(7, 7, 7);
}

.has-text-black{
  color: black;
}

.field{
  padding-bottom: 10px;
}

.fa{
  margin-left: 5px; 
}
</style>