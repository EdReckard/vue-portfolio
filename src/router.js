/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Resume from './views/Resume.vue';
import Projects from './views/Projects.vue';

const routes = [
  { path: '/', name:"Home", component: Home },
  { path: '/about', name:"About", component: About },
  { path: '/contact', name:"Contact", component: Contact },
  { path: '/resume', name:"Resume", component: Resume },
  { path: '/projects', name:"Projects", component: Projects },
  
];

const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
