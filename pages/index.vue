<template>
  <div id="app">
    <app-bar @handleClick="toggleSidebar" />
    <div v-if="showSidebar">
      <side-bar @handleClick="toggleSidebar" />
    </div>
    <nuxt />
  </div>
</template>

<script>
import AppBar from '~/components/AppBar.vue'
import SideBar from '~/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    SideBar
  },
  data () {
    return {
      showSidebar: false
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>
