<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
import db from './components/firebaseInit'

export default {
  name: 'App',
  data() {
    return {
      // bg: ''
    }
  },
  methods: {
    // fetchBg(){
    //   db.collection('colors').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
    //     querySnapshot.forEach((doc) => {
    //       this.bg = 'url('+doc.data().bg+')'
    //     })
    //   })
    // },
  },
  created: function(){
    // this.fetchBg()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  width: 100%;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

#app h1 {
  font-family: 'Open Sans', sans-serif;
}

/* Temporary fix to get Header to the top of page for now */

* {
  margin: 0;
}

.vods,
.highlights, .youtube
{
  margin: 32px 6% 32px 6%;
  border-radius: 4px;
}

.section-header{
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-bottom: 8px;
}

.instagram {
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
  border-radius: 16px 16px 0 0;
}

.video-wrapper {
  display: inline-block;
}

.video-title {
  margin-top: -8px;
  max-width: 352px;
  border-radius: 0 0 16px 16px;
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

.instagram {
  grid-area: instagram;
}

.twitter {
  grid-area: twitter;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-left: 16px;
}

.twitter > .section-header {
  margin-right: 17px;
  margin-bottom: -4px;
  z-index: 9;
  position: relative;
}

.twitter-timeline-settings {
  z-index: 8;
  position: relative;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  max-height: 480px;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 24px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
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
  margin-bottom: -5px
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
  .twitter > .section-header {
    margin-right: 18px;
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
