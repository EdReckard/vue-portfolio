<template>
<div class="everything">
    <div class="insideText">
       <h1>{{ header }}</h1>
       <p1>{{ text }}</p1>
    </div>
</div>
  
</template>

<script>
export default{
    name: 'SingleBlock',
    props:{
        header:{ type: String, required:true},
        text:{ type: String, required:true}
    },
    
}

</script>

<style scoped>
.everything{
  border-radius: 0.2em;
  position: relative;
  left: 10px;
  
  bottom: 10px;
  display: flex;
  flex-direction: column;
  transition: 0.9s ease;

  color: black;
  background-color:white;
  border-style: solid;

}
.insideText{
  left: 0px;
  right: 0px;
  
  position: relative;
  text-align: left;
  padding:10px;
}
</style>