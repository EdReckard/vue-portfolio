<template>
  <div>
    <SingleBlock header="About Me" 
    text="Fill in text here!"/>
    <img alt="funny" src="./../assets/nodeFunny.jpg" width="300" height="300">
    <HelloWorld msg="Want more?"/>
  </div>
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
h2 {
  color: #3498db;
}

p {
  color: #555;
}
</style>