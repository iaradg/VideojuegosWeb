<template>
    <div class="fondo">

      <Navbar class="navbar" />
      <router-view></router-view>
      
    </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped lang="css">
  .fondo{
    margin-left: 10rem;
    margin-right: 10rem;
  }
  .navbar{
    padding: 0.5rem 2rem;
    margin-top: 3rem;
  }

  h1 {
    color: rgb(125, 116, 240);
  }

</style>
