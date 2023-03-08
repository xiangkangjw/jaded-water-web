<template>
  <Nav></Nav>
  <Title></Title>
  <About/>
  <Footer></Footer>
</template>

<script>
import Nav from './components/Nav.vue'
import Title from './components/Title.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Title,
    About,
    Footer
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
}
</style>
