<template>
  <div id="people">
    <div class="document">
      <h1 class="title document-title" >
        Under Construction
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeoplePeople',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style the footer */
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}

/* Container for flexboxes */
section {
  display: -webkit-flex;
  display: flex;
}

.container {
  display: flex;
  justify-content: center;
  /* Horizontally centers the child */
  align-items: center;
  /* Vertically centers the child */
  height: 100vh;
  /* Sets the container height to fill the entire viewport height */
  background-color: #2c3e50;
  /* Example background color for contrast */
  display: inline-block;
}

#people {
  background-image: url('./../assets/consulting-pic-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%; /* Adjust to your preference */
  height: 100%; /* Adjust to your preference */
  background-position: center;
  padding: 100px 0;
}

#people::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5); /* Semi-transparent white overlay */
  z-index: 1;
}

.document {
  max-width: 800px; /* Optimal reading width */
  margin: 0 auto; /* Center the document container */
  padding: 10px; /* Padding around the content */
  color: #111; /* Text color */
  position: relative;
  z-index: 2; /* Ensures content is above the overlay */
}

.document-title {
  font-size: 50px; /* Title size */
  margin-bottom: 20px; /* Space between the title and first paragraph */
}
</style>
