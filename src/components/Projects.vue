<template>
  <div id="projects">
    <div class="document">

      <h1 class="title document-subtitle">Seamless Cloud Migration for Enhanced Retail Operations</h1>
      <p class="content document-paragraph">
        Embarking on a digital transformation journey, we collaborated with a distinguished retail chain to transition
        their aging IT infrastructure to a sophisticated cloud environment. This initiative was aimed at consolidating
        disparate systems into a unified, cloud-based ecosystem, thereby enabling real-time inventory insights,
        bolstering data security, and providing a scalable foundation to nurture their burgeoning online footprint.
      </p>
      <p class="content document-paragraph">
        Before our engagement, the client contended with data fragmentation, cumbersome inventory management, and
        limited flexibility to adapt to the dynamic market landscape. Our solution entailed deploying a bespoke cloud
        infrastructure tailored to streamline operational workflows and furnish a powerful analytics platform for
        strategic decision-making and superior customer engagement.
      </p>
      <p class="content document-paragraph">
        The project redefined operational efficiency, with the client experiencing a notable uplift in online consumer
        engagement and a significant elevation in operational agility. Our strategic cloud migration initiative has not
        only positioned our client at the forefront of digital innovation in retail but also underscored the potential
        of cloud technology in transforming traditional retail landscapes. </p>

      <h1 class="title document-subtitle">Tailored Mobile App Revolutionizes Inventory Management</h1>
      <p class="content document-paragraph">Confronted with obsolete inventory systems, a premier manufacturing entity
        enlisted our expertise to craft a
        custom mobile application that reimagined their approach to inventory management. This innovative app offered
        instantaneous access to stock levels, streamlined the procurement cycle, and facilitated direct communication
        between the warehouse team and upper management.</p>
      <p class="content document-paragraph">Designed with user experience in mind, the app's intuitive interface and
        offline capabilities ensured
        uninterrupted operations, even in connectivity-challenged locales. By automating the inventory tracking and
        reporting process, the application drastically minimized manual inaccuracies and optimized inventory handling
        time.</p>
      <p class="content document-paragraph">This groundbreaking application not only fortified operational efficiency
        but also championed sustainability by
        reducing excess inventory. This venture exemplifies our dedication to delivering bespoke IT solutions that
        bolster operational excellence and foster environmental stewardship.</p>

      <h1 class="title document-subtitle">
        Empowering Decision-Making with Cloud-Based Data Analytics
      </h1>
      <p class="content document-paragraph">In collaboration with a global finance leader facing decision-making delays,
        we introduced a cutting-edge cloud-based analytics platform. This solution integrates data from various sources
        to provide real-time insights and predictive analytics, enhancing strategic decision-making capabilities.</p>
      <p class="content document-paragraph">Our cloud-native platform facilitated a shift from reactive to proactive
        decision-making for our client, allowing them to anticipate market trends and adjust strategies swiftly.
        Designed for scalability and flexibility, it proves essential in the fluid financial markets, significantly
        enhancing operational efficiency and risk management strategies.</p>
      <p class="content document-paragraph">This advanced analytics platform underscores our commitment to leveraging
        cloud technology for empowering businesses with timely, data-driven decisions, maintaining their competitive
        edge in a fast-paced industry.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectProject',
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

#projects {
  background-image: url('./../assets/meeting.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  /* Adjust to your preference */
  height: 100%;
  /* Adjust to your preference */
  background-position: center;
  padding: 30px 0;
}

#projects::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  /* Semi-transparent white overlay */
  z-index: 1;
}

.document {
  max-width: 800px;
  /* Optimal reading width */
  margin: 0 auto;
  /* Center the document container */
  padding: 10px;
  /* Padding around the content */
  color: #111;
  /* Text color */
  position: relative;
  z-index: 2;
  /* Ensures content is above the overlay */
}

.document-title {
  font-size: 50px;
  /* Title size */
  margin-bottom: 20px;
  /* Space between the title and first paragraph */
}

.document-paragraph {
  font-size: 24px;
  /* Paragraph text size */
  text-align: justify;
  /* Justify text for a clean, aligned look */
  margin-bottom: 10px;
  /* Space between paragraphs */
}
</style>
