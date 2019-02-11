<template>
  <div class="vods" v-show="config.showVods">
    <div class="section-header" v-bind:style="{background: config.titleBg}">
    <h1 v-bind:style="{color: config.titleText}">Previous Broadcasts</h1>
  </div>
    <div v-for="vod in v" class="video-wrapper">
      <div class="video">
        <a :href="vod.url" :aria-label="vod.title">
          <img :src="vod.preview" />
        </a>
        <div class="video-title" v-bind:style="{background: config.titleBg}">
          <h4 v-bind:style="{color: config.titleText}">{{vod.title}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebaseInit'
export default {
  props: ['config'],
  name: 'Vods',
  data () {
    return {
      v: []
    }
  },
  methods: {
    fetchVods(){
      if(this.config.registered == 'true'){
        if(this.config.showVods == 'true') {
        this.$http.get('https://api.twitch.tv/kraken/channels/'+this.config.twitch +'/videos?broadcasts=true&limit='+this.config.vidsNum+'&client_id='+this.$clientId)
          .then(function(response){
          this.v = response.body.videos
          });
        }
      }
    }
  },
  created: function(){
    this.fetchVods()
  },
  updated: function(){
    this.fetchVods()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
