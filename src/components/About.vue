<template>
  <div style="min-height:50ex; background-color: #99738e;">
    <section id="about">
      <div class="title">
        About
      </div>
      <div class="content">
        <p>
          Our team of experienced professionals provides specialized expertise and advice in a range of technical areas,
          including software development, data analytics, cybersecurity, and IT infrastructure management. We work with
          clients across a variety of industries to help them optimize their technology investments and achieve their
          business objectives.
        </p>
        <p>
          From strategic planning and project management to software development and systems integration, our services are
          tailored to meet the unique needs of each client. We partner with technology vendors to provide access to the
          latest tools and technologies, and our goal is to help clients stay ahead in an increasingly competitive and
          fast-paced business environment.
        </p>
      </div>
    </section>
  </div>
  <div id="people">
    <div class="title">People</div>
    <div>
      Under construction
    </div>
   
    <!-- <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
      </div> -->
  </div>
  <div id="projects">
    <div  class="title">
      Projects
    </div>
    <div>
      Under construction
    </div>
  </div>
  <footer id="contact">
    <p><a href="mailto:jacob.wang@jadedwater.com">Email us</a></p>
    <p>Jaded Water Technologies, Toronto, Canada</p>
  </footer>
</template>

<script>
export default {
  name: 'AboutCompany',
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
  /* padding: 30px; */
}

.title {
  /* scale: 3; */
  font-size: 500%;
  font-weight: bold;
  padding: 30px;
  width: fit-content;
}

#about .content {
  padding: 30px;
  margin-top: 10em;
  font-size: 95%;
}

#about {
  min-height: 100ex;
  background-image: url('./../assets/mobile-app.jpg');
  background-repeat: no-repeat;
  background-size:cover;
}

#people {
  min-height: 100ex;
  background-image: url('./../assets/consulting-pic-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

#projects {
  min-height: 100ex;
  background-image: url('./../assets/meeting.jpg');
  background-repeat: no-repeat;
  background-size:cover;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  background-color: #2196F3;
  padding: 10px;
}

.grid-item {
  background-color: rgba(144, 73, 73, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

a[href^="mailto:"] {
  font-family: sans-serif;
  color: black;
}
</style>
