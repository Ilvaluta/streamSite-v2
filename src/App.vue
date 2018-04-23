<template>
  <div id="app">
    <Header/>
    <Vods/>
    <Highlights/>
    <Giveaway/>
    <Donation/>
    <Sponsors/>
  </div>
</template>

<script>
import Header from './components/Header'
import Vods from './components/Vods'
import Highlights from './components/Highlights'
import Giveaway from './components/Giveaway'
import Donation from './components/Donation'
import Sponsors from './components/Sponsors'

export default {
  name: 'App',
  components: {
    Header,
    Vods,
    Highlights,
    Giveaway,
    Donation,
    Sponsors
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
  margin-top: 0;
}

/* Temporary fix to get Header to the top of page for now */
* {
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
}

</style>
