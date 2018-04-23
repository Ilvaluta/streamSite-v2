<template>
  <div id="app">

    <Vods/>
    <Highlights/>
    <Giveaway/>
    <Donation/>
  </div>
</template>

<script>
import Vods from './components/Vods'
import Highlights from './components/Highlights'
import Giveaway from './components/Giveaway'
import Donation from './components/Donation'

export default {
  name: 'App',
  components: {
    Vods,
    Highlights,
    Giveaway,
    Donation
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
