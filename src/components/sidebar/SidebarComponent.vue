<script>
import SidebarLink from './SidebarLink.vue'
import {collapsed, toggleSidebar, sidebarWidth} from './state.js'


export default {
    props: {},
    components: {SidebarLink},
    setup() {
        return {collapsed, toggleSidebar, sidebarWidth}
    },
}
</script>

<template>
    
<div class="sidebar" :style="{width:sidebarWidth}">
        
        <h1 class="h1">
            <span v-if="collapsed">
                <div>Ed R.</div>
            </span>
            <span v-else>Edward Reckard</span>
        </h1>



        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/About" icon="fas fa-columns">About</SidebarLink>
        <SidebarLink to="/Projects" icon="fa-solid fa-cloud">Projects</SidebarLink>
        <SidebarLink to="Resume" icon="fa-solid fa-file-pdf">Resume</SidebarLink>
        <SidebarLink to="Contact" icon="fas fa-users">Contact</SidebarLink>
       

        <span class="collapse-icon" 
              :class = "{ 'rotate-180' : collapsed }" 
              @click="toggleSidebar"
              >
            <i class="fas fa-angle-double-left"/>
        </span>

 </div>

</template>

<style>
:root{
    --sidebar-bg-color:rgb(79, 161, 79);
    --sidebar-item-hover: rgb(2, 136, 2);
    --sidebar-item-active: rgb(2, 63, 2);
    --sidebar-item-background-color:rgb(3, 165, 3);
    --sidebar-item-border-style:solid;
    --sidebar-item-border-color:rgb(2, 63, 2);
    --sidebar-item-radius:0.25em;

}
</style>

<style scoped>
.h1{
    background-color: var(--sidebar-item-active);
    border-style:var(--sidebar-item-border-style);
    border-color: var(--sidebar-item-active);
    border-radius: var(--sidebar-item-radius);
}

.sidebar{
    color:white;
    background-color: var(--sidebar-bg-color);

    float:left;
    position:fixed;
    z-index: 1;
    top:0;
    left: 0;
    bottom:0;
    padding:0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;

    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

}
.collapse-icon{
    position:absolute;
    bottom:0;
    padding:0.75em;
    color:rbga(255, 255, 255, 0.7);
    transition: 0.2s linear;
    
}
.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>

