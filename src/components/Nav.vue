<template>
   <div class="topnav sticky">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#people">People</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>
  </template>

<script>
export default {
  name: 'NavBar',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topnav {
  background-color: #553d67;
  overflow: hidden;
  z-index: 100;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 30px;
  text-decoration: none;
  font-size: 15px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #f64c72;
  color: white;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
    position: -webkit-sticky;
	position: sticky;
	top: 0;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}
</style>