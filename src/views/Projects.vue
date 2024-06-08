<template>
  <div>
      <div class="everything"> 
        <div class="text0">
          <h1>Projects</h1>
          <h2>Privilege Walk - Capstone I + II - York College</h2>
          
          <div class="image-container">
            <img v-for="image in images" :key="image" :src="image" alt="Image">
          </div>

          <p1>The Privilege Walk Web Application was developed for psychology professors at York College of Pennsylvania to host online privilege walks, enabling participants to reflect on their privilege. Anonymity and inclusivity were prioritized to prevent potential issues. The application, using Spring Boot, Java, Liquibase, Vue.js, and MySQL, allows synchronous or asynchronous engagement and is hosted on Digital Ocean. It aims to replicate the in-class privilege walk experience, ensuring user-friendliness, anonymity, and flexibility in answering questions. The project also provides features for personalization and future use in various scenarios like surveys and questionnaires.</p1>
          <br> <br>
          <p1>The Privilege Walk Web Application utilizes Vue.js for front-end development, Spring Boot with Java for the back-end, and MySQL for the database. Developed on IntelliJ Ultimate and deployed on Digital Ocean, Vue.js is chosen for its modular design, enhancing code maintainability. Spring Boot seamlessly hosts and integrates with MySQL, while the transition to Digital Ocean ensures cost-effectiveness. Chart.js is used for dynamic data visualization, Liquibase handles database schema evolution, and Docker streamlines deployment. Development tools like IntelliJ IDEA and GitHub support efficient coding and version control. Node.js and NPM handle server-side execution and dependency management, and Maven optimizes adding new dependencies. This technology stack aims to deliver a scalable, responsive, and user-friendly Privilege Walk Web Application.</p1>

          
          <h2>CRM and Azuga Address Update Application - Garrety Glass - Dallastown, PA</h2>
          <img src="./../assets/azugamap.png" style="border-style: solid; border-width: 1px; border-color: black; height: 329px; width: 683px"/><br><br>
          <p1>
            
In a Python-based project showcased in my web portfolio, I designed an application to streamline data management between Computer Ease CRM and Azuga(Commmerical Truck Tracking Software). The application systematically extracted addresses from Computer Ease, specifically focusing on active job sites, and seamlessly uploaded them to Azuga while creating corresponding location beacons. Simultaneously, it addressed manual data input disparities by adding Azuga site locations to the CRM. Notably, the application dynamically updated the status of job sites in Computer Ease CRM, reflecting changes in Azuga, particularly marking sites as inactive if closed on the Azuga platform. This project highlights my adeptness in creating solutions that enhance data synchronization, accuracy, and status management across diverse platforms, underscoring my proficiency in data integration and automation.
          </p1>
          <h2>HR Automation Script - Garrety Glass - Dallastown, PA</h2>
          

          <p1>
I developed a Python script designed to enhance data quality for streamlined utilization by the HR department in payroll processes. This script systematically cleansed and transformed the data, ensuring it adhered to a standardized and usable format. The objective was to facilitate seamless integration into the payroll system, ultimately improving efficiency and accuracy in HR operations. This project exemplifies my ability to leverage programming skills to optimize data preparation workflows, contributing to enhanced functionality and effectiveness within organizational processes.



</p1>

          <h2>Text Based Advanture Game - CS320 - York College</h2>
          <img src="./../assets/Tbag.jpg" style="border-style: solid; border-width: 1px; border-color: black;"/>
          <br><br>
          <p1>
Collaborating with a team, I assisted in the development of a text-based adventure game using Java classes and objects. Hosted through Java servlets and employing a Derby database, the game featured dynamic player interactions through a web interface. It included randomly generated elements such as enemies, locations, maps, NPCs, potions, and weapons.</p1>

          <h2>Data Visualization Application - York College 2022 Hackathon - York College</h2>
          <h2>Set up Ubuntu Database on Company Server- Garrety Glass - Dallastown, PA</h2>
          <h2>Equiptment/Part Price checking script using Selenium- Garrety Glass - Dallastown, PA</h2>
          <h2>Set up Ubuntu 20.04 virtual machine using VMware Fusion on personal Macbook to run ROS application</h2>

          
          
        </div>
        
      </div>
    
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </div>
</template>

<script>
/* eslint-disable */
import SingleBlock from './../components/SingleBlock.vue';
export default {
  name: 'Projects',
  components: {
    SingleBlock,
  
  },
  data() {
    return {
      images: [
        require('@/assets/pw1.jpg'),
        require('@/assets/pw2.jpg'),
        require('@/assets/pw3.jpg')
      ]
    };
  },
}
</script>

<style scoped>
/* Add component-specific styles here */
.everything{
  border-radius: 0.2em;
  border-style: solid;
  position: relative;
  left: 10px;
  
  bottom: 10px;
  display: flex;
  flex-direction: column;
  transition: 0.9s ease;

  color: black;
  background-color:white;
  margin: 10px;
  

}

.text0{
  margin: 20px;
  position: relative;

}
.image-container {
  display: flex;
  justify-content: space-around; /* Adjust spacing between images */
  }
.image-container img {
    max-width: 30%; /* Ensure images are responsive */
}

</style>