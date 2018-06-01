<template>
  <nav class="navbar">
    <ul>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Counts' }">Counts</router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {}
    }
  }
</script>   

<style lang="scss" scoped>

</style>
