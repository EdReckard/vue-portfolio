<template>
  <div id="app">
      <SidebarComponent/>
      <div :style="{ 'margin-left':sidebarWidth, 'margin-right':'20px'}">
        <TitleBar/>
        <router-view/>
      </div>
  </div>
</template>

<script>

import TitleBar from './components/TitleBar.vue';
import SidebarComponent from './components/sidebar/SidebarComponent.vue';
import {sidebarWidth} from "./components/sidebar/state.js"

export default {
  name: 'App',
  components: {
    TitleBar,
    SidebarComponent
  },
   setup(){
    return {sidebarWidth}
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: rgb(223, 211, 147);
  position:static;
  z-index:1;
  top:0;
  left:0;
  
  bottom:0;
  padding:1em;
  border-radius: 0.2em;
  flex-direction: column;
  transition: 0.9s ease;
}
</style>

