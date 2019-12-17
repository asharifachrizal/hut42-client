<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/Logo-hut.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Peserta/>
    <!-- <div class="row">
      <div class="col-md-9">
        <iframe src="https://html.com" width="100%" height="100%"></iframe>
  </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12">
              <Clock/>
  </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <iframe src="https://www.youtube.com/embed/C2yFJaXmdQs" width="100%" height="320px"></iframe>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <iframe src="https://www.youtube.com/embed/C2yFJaXmdQs" width="100%" height="320px"></iframe>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Peserta from './components/Peserta.vue'
import Clock from './components/Clock.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Peserta,
    Clock
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
