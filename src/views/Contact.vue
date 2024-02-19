<template>
  <div class="everything">
    <div>
      
      <h1> Contact</h1>
      <p1>Thank you for visiting my portfolio! If you have any 
       questions, inquiries, or just want to say hello, feel free to 
       reach out. I'm always open to new opportunities and collaborations</p1><br><br>

      <p1>Email: edwardreckard13@gmail.com</p1><br><br>
      <p1>Phone Number: (717) 398-5325 </p1><br><br>
      <a href="www.linkedin.com/in/edreckard" target="_blank" rel="noopener">Click here to visit my LinkedIn</a><br><br>
      <a href="https://github.com/EdReckard" target="_blank" rel="noopener">Click here to visit my Github</a><br><br>
      <p >Feel free to screenshot the QR code below to share this portfolio.</p>
      <img style=" margin: 50px;
        float: left;
        border-width: 3px;
        border-color: black;
        color: black;
        border-style: solid;
        border-radius: 5px;"  src="./../assets/ed-reckard-vue-portfolio.png" width="450" height="400" alt="Image"/>

    </div>


  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>
/* eslint-disable */
import SingleBlock from './../components/SingleBlock.vue';
export default {
  name: 'Contact',
  components: {
    SingleBlock,
  
  },
}
</script>

<style scoped>

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
  padding: 20px;
  

}

</style>

