<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/Logo-hut.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Peserta/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Peserta from './components/Peserta.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Peserta
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: url("./assets/bg-web-hut42@2x.png") no-repeat center center fixed; 
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  background-size: 100% 100%;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  html {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}
</style>
