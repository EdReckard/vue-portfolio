<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  // other configuration or methods
}
</script>

<style scoped>
/* Add styles for your navigation bar here */
div {
  background-color: #f80a0a;
  padding: 2px;
  
}

ul {
  list-style: none;
  padding:2px;
  display: flex;
  text-align: right;
}

li {
  margin-left: 10px;
  border-style:solid;
  border-width: 5px;
  border-color: black;
  color: black;
  background-color: yellow;
  padding: 10px;
}

a {
  text-decoration: none;
  color: black;
}
</style>