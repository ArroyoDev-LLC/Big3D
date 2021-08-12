<template>
  <RouterView />
</template>
<Script>



export default {
  components: {  }
}

</Script>
<style>
html,
body {
  height: 100%;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
}
.navbar {
  background: #c4c4c4;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
