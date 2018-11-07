<template>
  <div id="app">
    <FlappyBird/>
  </div>
</template>

<script>
import FlappyBird from './components/FlappyBird'

export default {
  name: 'App',
  components: {
    FlappyBird
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
</style>
