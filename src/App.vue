<template>
  <div id="app">

    <Vods/>
    <Highlights/>
    <Giveaway/>
  </div>
</template>

<script>
import Vods from './components/Vods'
import Highlights from './components/Highlights'
import Giveaway from './components/Giveaway'

export default {
  name: 'App',
  components: {
    Vods,
    Highlights,
    Giveaway
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
