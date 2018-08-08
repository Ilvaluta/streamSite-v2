<template>
  <div id="app">
    <Header v-bind:streamer="streamer"/>
    <GiveawayModal v-bind:streamer="streamer"/>
    <Vods v-bind:streamer="streamer"/>
    <Highlights v-bind:streamer="streamer"/>
    <Sponsors v-bind:streamer="streamer"/>
    <Footer v-bind:streamer="streamer"/>
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
    streamer:[
      {id: '',twitch: '',vids_number: '', vods: '', highlights: '', sponsors: '', donation: '', header: '', headerImg: 'false', giveawayurl: ''}
    ]
  }
  },
  methods: {
    fetchStreamer(){
      this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId).then(function(response){
          if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(response.body.header)) {
            this.streamer[0].headerImg = true;
          } else { // input is not an image
            this.streamer[0].headerImg = false;
          }
        this.streamer[0].id = response.body.id;
        this.streamer[0].header = response.body.header;
        this.streamer[0].twitch = response.body.twitch;
        this.streamer[0].vods = response.body.vods;
        this.streamer[0].highlights = response.body.highlights;
        this.streamer[0].sponsors = response.body.sponsors;
        this.streamer[0].donation = response.body.donation;
        this.streamer[0].giveawayurl = response.body.giveawayurl;
        });
    }
    },
    created: function(){
      this.fetchStreamer();
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

.vods, .highlights {
  margin: 32px 6% 32px 6%;
  background: #303030;
  padding: 8px 0 8px 0;
}

.vods > h1, .highlights > h1, .giveaway-wrapper > h1, .donations > h1 {
  color: #ecf0f1;
  background: #3498db;
  margin-top: -16px;
  padding: 8px;
  font-family: 'Archivo', sans-serif;
}

.video {
  padding: 0 16px 0 16px;
}

.video > a > img {
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

.video-title > h4 {
  padding: 8px;
}

</style>
