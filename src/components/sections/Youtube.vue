<template>
<div class="youtube" v-show="config.showYt">
  <div class="section-header" v-bind:style="{background: config.titleBg}">
  <h1 v-bind:style="{color: config.titleText}">Latest YT Vids</h1>
</div>
  <div v-for="vid in ytVids" class="video-wrapper">
    <div class="video">
      <a :href="'http://youtube.com/watch?v=' + vid.id.videoId" target="_blank">
          <img :src="vid.snippet.thumbnails.medium.url"/>
        </a>
      <div class="video-title" v-bind:style="{background: config.titleBg}">
        <h4 v-bind:style="{color: config.titleText}">{{vid.snippet.title}}</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from '../firebaseInit'
export default {
  props: ['config'],
  name: 'Youtube',
  data() {
    return {
      ytVids: [],
    }
  },
  methods: {
    fetchYoutube() {
      this.$nextTick(() => {
        if (this.config.showYt == 'true') {
          this.$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+this.config.youtube+'&maxResults='+this.config.vidsNum+'&order=date&key=AIzaSyBfR3-RIp2rkLTPm3tszJ_e_0N1KUYPCUE')
            .then(function(response) {
            this.ytVids = response.body.items
            })
      }
      })
  }
  },
  created: function() {
    this.fetchYoutube()
  },
  updated: function() {
    this.fetchYoutube()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
