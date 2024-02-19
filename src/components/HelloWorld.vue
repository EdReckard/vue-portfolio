<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This link will send you to the most interesting web page if you  
      <a href="https://edreckard.github.io/ER-Portfolio/" target="_blank" rel="noopener">click here.</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #7942b9;
}
</style>
