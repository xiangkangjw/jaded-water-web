<template>
  <Nav></Nav>
  <Title></Title>
  <About></About>
  <Projects></Projects>
  <People></People>
  <Footer></Footer>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
</style>
