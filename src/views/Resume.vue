<template>
  <div>
    <SingleBlock header="Resume" 
    text="Below you can see my resume. Click the link below to download it."/>
    <div class="resume">
      <img src="./../assets/Ed_Reckard_Resume(Feburary 2023).png" width="900" height="1200"/>
      <br>
      <a href="https://drive.google.com/file/d/1ylBDW12jWk2JvOGy3bSkj1G8bbGM7p5R/view?usp=sharing" target="_blank" rel="noopener">Click here to download</a>.
    </div>
    

  </div>
</template>

<script>
/* eslint-disable */
import SingleBlock from './../components/SingleBlock.vue';


export default {
  name: 'Resume',
  components: {
    SingleBlock,
    
  },
  
}
</script>

<style scoped>
.resume{
  text-align: left;
  margin-left: 10px;
}
</style>