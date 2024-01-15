<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  // other configuration or methods
}
</script>

<style scoped>
/* Add styles for your navigation bar here */
nav {
  background-color: #f80a0a;
  padding: 10px;
  
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
}

li {
  margin-right: 15px;
}

a {
  text-decoration: none;
  color: white;
}
</style>