<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:rgb(10, 177, 127);
    margin: 0px;
    background-color: rgb(223, 211, 147);
    position:static;
    z-index:1;
    top:0;
    left:0;
    width: 99%;
    bottom:0;
    padding:1em;
    border-radius: 0.2em;
    flex-direction: column;
    transition: 0.9s ease;
  }
</style>

<template>

<!-- 
(Deployment notes) 
npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages

npm update
npm install


set -e
npm run build
cd dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:EdReckard/vue-portfolio.git main:gh-pages

-->


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




