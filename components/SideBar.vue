<template>
  <div id="sideBar" @click="click">
    <nav-bar />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'SideBar',
  components: {
    NavBar
  },
  emits: ['handleClick'],
  methods: {
    click () {
      this.$emit('handleClick')
    }
  }
}
</script>
