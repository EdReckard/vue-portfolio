<template>
<div class="everything">
    <div class="insideText">
       <h1>{{ header }}</h1>
       <p1>{{ text }}</p1><br><br>
       <div v-if="text0">
          <p1>{{ text0 }}</p1><br><br>
       </div>
       <div v-if="text1">
          <p1>{{ text1 }}</p1><br><br>
       </div>
       <div v-if="text2">
          <p1>{{ text2 }}</p1><br><br>
       </div>
       <div v-if="text3">
          <p1>{{ text3 }}</p1><br><br>
       </div>
    </div>
</div>
  
</template>

<script>
export default{
    name: 'SingleBlock',
    props:{
        header:{ type: String, required:true},
        text:{ type: String, required:true},
        text0:{ type: String, required:false},
        text1:{ type: String, required:false},
        text2:{ type: String, required:false},
        text3:{ type: String, required:false},
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
  

}
.insideText{
  left: 0px;
  right: 0px;
  
  position: relative;
  text-align: left;
  padding:10px;
}
</style>