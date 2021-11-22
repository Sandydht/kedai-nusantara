<template>
  <div id="appBar">
    <button @click="click">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <h1>Kedai Nusantara</h1>
    <nav-bar />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'AppBar',
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
