<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: { AppNav, AppFooter }
}
</script>
