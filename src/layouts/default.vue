<template>
  <div>
    <AppNav/>
    <router-view />
    <Modal/>
    <AppFooter/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: { AppNav, AppFooter,  Modal: () => import('@/components/Modal')}
}
</script>
