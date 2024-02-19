<template>
  <div>
    <div class="everything">
      <div class="test0">
        <img style="float:right; margin: 50px;
        
        border-width: 3px;
  border-color: black;
  color: black;
  border-style: solid;
  border-radius: 5px;"  src="./../assets/thumbsup.jpg" width="450" height="400" alt="Image"/>
        <h1 style="margin:10px;">About Me</h1>
        <br>
        
        <div style="margin:20px">
            

            <p1 style="margin:10px; text-align:left; font-size:20px;">Greetings! I'm Edward Reckard, but Ed works just fine. My fascination with technology began in high school, leading me to pursue a computer science degree. Today, I'm passionate about building intuitive software, tackling data challenges, and unlocking the potential of cloud computing.<br><br>
            Beyond code, I find solace in the quiet focus of solo hikes, the strategic tension of a chess match, and the creative satisfaction of whipping up a new dish. But when faced with crackling lightning, I'm just as content conquering a personal coding project or battling opponents in Hearthstone.<br><br>
            Professionally, I've cultivated a diverse skillset through various roles. As an IT Support Technician at Garrety Glass, I mastered data management, web APIs, and networking fundamentals. Later, as a Help Desk Analyst at PennDOT, I crafted technical documentation, guided state employees through technology issues, and honed my troubleshooting skills. Currently, as a Computer Science Tutor, I pay it forward by empowering others on their coding journeys.<br><br>
            This combined experience has equipped me with not only technical prowess but also the ability to communicate effectively, adapt to dynamic challenges, and thrive in collaborative environments. I'm eager to apply this skillset to your projects and push the boundaries of what's possible.<br>
          </p1>
        </div>
        
      </div>
    </div>



  </div>
  <HelloWorld msg="Want more?"/>

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>
/* eslint-disable */
import HelloWorld from './../components/HelloWorld.vue';
import SingleBlock from './../components/SingleBlock.vue';
import {collapsed, toggleSidebar } from '../components/sidebar/state'

export default {
  name: 'About',
  components: {
    HelloWorld, SingleBlock,
  
  },
  setup(){
    return {collapsed, toggleSidebar}
  }
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

</style>