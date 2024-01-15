<template>
  <div id="app">
    <NavbarComponent />
    <router-view></router-view>
    <img alt="funny" src="./assets/nodeFunny.jpg" width="300" height="300">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    HelloWorld
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
