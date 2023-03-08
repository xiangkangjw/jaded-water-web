<template>
  <Nav></Nav>
  <Title></Title>
  <About/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Nav from './components/Nav.vue'
import Title from './components/Title.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Title,
    About
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #242582;
}
</style>
