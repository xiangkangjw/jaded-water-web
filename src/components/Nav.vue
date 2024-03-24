<template>
  <div class="topnav sticky">
    <div class="navbar-container">
      <div id="navbar-logo">
      <h1><router-link to="/">Jaded Water Technologies</router-link></h1>
    </div>
    <div id="navbarMenus">
      <ul id="navBody">
        <li class="navList">
          <router-link to="/about">About</router-link>
        </li>
        <li class="navList">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li class="navList">
          <router-link to="/people">People</router-link>
        </li>
      </ul>
    </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Roboto', sans-serif;
}

.topnav {
  background-color: #553d67;
  overflow: hidden;
  z-index: 10;
  padding: 5px  10px;
  display: flex;
   justify-content: space-between;
}

.navbar-container {
   width: 90%;
   margin: 0 auto;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 5px 5px;
  text-decoration: none;
  font-size: 12px;
  transition: all 0.3s;
  border-radius: 1px;
}

/* Change the color of links on hover */
.topnav #navbarMenus a:hover {
  color: #f64c72;
}

#navbarMenus {
   display: flex;
   justify-content: center;
   align-items: center;
}

#navbarMenus ul {
   display: flex;
   justify-content: center;
   gap: 40px;
   list-style: none;
}

#navbar-logo {
  font-size: 500%;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky+.content {
  padding-top: 30px;
}
</style>