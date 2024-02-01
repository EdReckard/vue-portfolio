<template>
  <div>
    <SingleBlock header="Welcome to the Resume Page!" 
    text="Below you can see my resume and a link below to download"/>
    <img src="../assets/Ed_Reckard_Resume(January 2024).png"/>
    <a href="https://drive.google.com/file/d/1ylBDW12jWk2JvOGy3bSkj1G8bbGM7p5R/view?usp=sharing" target="_blank" rel="noopener">Click here to download</a>.

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