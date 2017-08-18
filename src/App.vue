<template>
  <div id="app">
    <my-header></my-header>>
    <div class="container">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import myHeader from './components/myHeader.vue'
  export default {
    name: 'app',
    components: {
      myHeader
    }
  }
</script>

<style>
body {
    background: #15191e;
    background: url('https://images4.alphacoders.com/232/thumb-1920-232854.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>