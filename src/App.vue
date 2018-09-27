<template>
<div id="app" v-bind:style="{background: bg}">
  <Header v-bind:colors="colors"/>
  <GiveawayModal />
  <div class="social-embeds">
    <Instagram v-bind:colors="colors" />
    <Twitter v-bind:colors="colors" />
  </div>
  <Vods v-bind:colors="colors" />
  <Highlights v-bind:colors="colors" />
  <Youtube v-bind:colors="colors" />
  <Sponsors v-bind:colors="colors" />
  <Footer />
</div>
</template>

<script>
import db from './components/firebaseInit'

import Header from './components/Header'
import Vods from './components/Vods'
import Highlights from './components/Highlights'
import Youtube from './components/Youtube'
import Donation from './components/Donation'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import Instagram from './components/Instagram'
import Twitter from './components/Twitter'
import GiveawayModal from './components/modal/Giveaway.vue'



export default {
  name: 'App',
  data() {
    return {
      colors: {
        titleBg: '',
        titleText: '',
        headerBg: '',
        headerText: '',
        socialIcon: '',
        socialText: '',
      },
      bg: ''
    }
  },
  methods: {
    fetchStyles(){
      db.collection('colors').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.colors.titleBg = doc.data().titleBg
          this.colors.titleText = doc.data().titleText
          this.colors.headerBg = doc.data().headerBg
          this.colors.headerText = doc.data().headerText
          this.colors.socialIcon = doc.data().socialIcon
          this.colors.socialText = doc.data().socialText
          this.bg = 'url('+doc.data().bg+')'
        })
      })
    },
  },
  created: function(){
    this.fetchStyles()
  },
  components: {
    Header,
    Vods,
    Highlights,
    Youtube,
    GiveawayModal,
    Instagram,
    Twitter,
    Sponsors,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

#app {
  background-color: #333;
  background-size: cover !important;
  width: 100%;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
}

#app h1 {
  font-family: 'Nunito', sans-serif;
}

/* Temporary fix to get Header to the top of page for now */

* {
  margin: 0;
}

.vods,
.highlights, .youtube
{
  margin: 32px 6% 32px 6%;
  background: rgba(48, 48, 48, 0.95);
  border-radius: 4px;
}

.section-header{
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.instagram {
  background: rgba(48, 48, 48, 0.95);
  border-radius: 4px;
}

.vods>h1,
.highlights>h1,
.giveaway-wrapper>h1,
.donations>h1, .sponsors>h1, .instagram>h1, .twitter>h1, .youtube>h1 {
  color: #ecf0f1;
}

.video {
  padding: 0 16px 16px 16px;
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
  max-width: 352px;
}

.video-title>h4 {
  padding: 8px;
}

.social-embeds {
  margin: 32px 6% 32px 6%;
  display: grid;
  grid-template-areas: "instagram instagram instagram twitter";
  grid-gap: 4em;
}

.twitter {
  grid-area: twitter;
}

.instagram {
  grid-area: instagram;
}

.twitter-timeline-settings {
  margin: 0;
  padding: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  max-height: 480px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.sponsors {
  margin-bottom: 32px;
}

.sponsor {
  border-radius: 4px;
  display: grid;
  background: rgba(48, 48, 48, 0.95);
  margin: 8px;
  padding: 0;
  grid-template-areas: "header header"
                       "image text";
}

.sponsorHeader {
  grid-area: header;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.sponsorImage {
  grid-area: image;
}

.sponsorText {
  grid-area: text;
}

@media only screen and (max-width:440px) {
  .video>a>img {
    border-right: 32px solid black;
    border-left: 32px solid black;
    height: 80%;
    width: 80%;
  }
  .video-title{
    margin-top: -6px;
  }
}

@media only screen and (max-width:740px) {
  .social-embeds {
    grid-template-areas:
    "instagram"
    "twitter";
    grid-gap: 4em;
  }
}

</style>
