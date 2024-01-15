<template>
  <div id="app">
    <NavbarComponent/>
    <img alt="funny" src="./assets/nodeFunny.jpg" width="600" height="300">
    <HelloWorld msg="Horray you've made it!"/>
    
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavbarComponent
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
  margin-top: 60px;
}
</style>
