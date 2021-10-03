<template>
  <div class="h-14 text-lh-jungle-green">
    <Header @sidenavToggle="handleToggleSidenav" />
    <Sidenav :show="displaySidenav" @close="handleCloseSidenav" />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/navigation/Header'
import Sidenav from '@/components/navigation/Sidenav'

export default {
  name: 'Default',
  components: { Header, Sidenav },
  data() {
    return { displaySidenav: false }
  },
  methods: {
    handleToggleSidenav() {
      this.displaySidenav = !this.displaySidenav
    },
    handleCloseSidenav() {
      this.displaySidenav = false
    },
  },
}
</script>
