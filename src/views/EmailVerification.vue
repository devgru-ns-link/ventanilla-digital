
<template>
<p>Si ves esto ha ocurrido un error</p>
</template>

<script>
import { accountVerify } from "@/api/users";
export default {
  data() {
    return {
      isFullPage: true,
    };
  },
  async created() {
    if (this.$store.state.isLogued) {
      this.$router.push("/home");
    } else {
      const loadingComponent = this.$buefy.loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el,
      });
      open()
      const data = this.$route.query;
      const res = await accountVerify(data);
      loadingComponent.close();
      if (res.detail == "User verified successfully") {
        this.$buefy.dialog.alert({
        title: "Su cuenta ha sido activada",
        message:
          "¡Enhorabuena, ahora puede iniciar sesión!",
        type: "is-success",
        hasIcon: true,
        icon: "check-circle",
        iconPack: "fa",
        ariaRole: "alertdialog",
        ariaModal: true,
      }); 
      } else {
        this.$buefy.dialog.alert({
        title: "Error",
        message:
          "Algo ha salido mal",
        type: "is-danger",
        hasIcon: true,
        icon: "times-circle",
        iconPack: "fa",
        ariaRole: "alertdialog",
        ariaModal: true,
      }); 
      }
      await this.$router.push("/login"); //Redireccionamiento con codigo
      console.log(res);
    }
  },
};
</script>
