<template>
<div id="app">
  <Header />
  <GiveawayModal />
  <Vods />
  <Highlights />
  <Sponsors />
  <Footer />
</div>
</template>

<script>

import Header from './components/Header'
import Vods from './components/Vods'
import Highlights from './components/Highlights'
import Donation from './components/Donation'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import GiveawayModal from './components/modal/Giveaway.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Header,
    Vods,
    Highlights,
    GiveawayModal,
    Donation,
    Sponsors,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Archivo|Montserrat');

#app {
  background: #222;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  font-family: 'Montserrat', sans-serif;
}

#app h1 {
  font-family: 'Archivo', sans-serif;
}

/* Temporary fix to get Header to the top of page for now */

* {
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
}

.vods,
.highlights {
  margin: 32px 6% 32px 6%;
  background: #303030;
  padding: 8px 0 8px 0;
}

.vods>h1,
.highlights>h1,
.giveaway-wrapper>h1,
.donations>h1 {
  color: #ecf0f1;
  background: #3498db;
  margin-top: -16px;
  padding: 8px;
  font-family: 'Archivo', sans-serif;
}

.video {
  padding: 0 16px 0 16px;
}

.video>a>img {
  border-right: 16px solid black;
  border-left: 16px solid black;
}

.video-wrapper {
  display: inline-block;
}

.video-title {
  margin-top: -8px;
  background: #2980b9;
  color: #ecf0f1;
  max-width: 352px;
}

.video-title>h4 {
  padding: 8px;
}
</style>
