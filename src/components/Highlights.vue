<template>
<div class="highlights" v-show="show">
  <h1>Previous Highlights</h1>
  <div v-for="highlight in h" class="video-wrapper">
    <div class="video">
      <a :href="highlight.url">
          <img :src="highlight.thumbnails[0].url"/>
        </a>
      <div class="video-title">
        <h4>{{highlight.title}}</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
export default {
  props: ['streamer'],
  name: 'Highlights',
  data() {
    return {
      show: '',
      h: [],
      num: '',
      twitch: ''
    }
  },
  methods: {
    fetchInfo() {
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.twitch = doc.data().twitch;
          this.show = doc.data().highlights;
          this.num = doc.data().vids_num;
        })
      })
    },
    fetchHighlights() {
      if (this.show == 'true') {
        this.$http.get('https://api.twitch.tv/kraken/channels/' + this.twitch + '/videos?highlights=true&limit=' + this.num + '&client_id=' + this.$clientId)
          .then(function(response) {
            this.h = response.body.videos
          });
      }
    }
  },
  created: function() {
    this.fetchInfo()
    this.fetchHighlights()
  },
  updated: function() {
    this.fetchInfo()
    this.fetchHighlights()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
