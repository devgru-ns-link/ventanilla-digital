<template>
  <p>Si ves esto ha ocurrido un error</p>
</template>

<script>
import { accountVerify } from '@/api/users'
export default {
  data () {
    return {
      isFullPage: true
    }
  },
  async created () {
    if (this.$store.state.isLogued) {
      this.$router.push('/home')
    } else {
      const loadingComponent = this.$buefy.loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el
      })
      const data = this.$route.query
      try {
        const res = await accountVerify(data)
        this.$buefy.dialog.confirm({
          title: 'Su cuenta ha sido activada',
          message: '¡Enhorabuena, ahora puede iniciar sesión!',
          type: 'is-success',
          hasIcon: true,
          icon: 'check-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true,
          onConfirm: () => this.$router.push('/login')
        })
      } catch (error) {
        this.$buefy.dialog.alert({
          title: 'Error',
          message: 'Algo ha salido mal',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true
        })
      } finally {
        loadingComponent.close()
      }
    }
  }
}
</script>
