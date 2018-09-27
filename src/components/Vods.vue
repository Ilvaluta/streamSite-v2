<template>
  <div class="vods" v-show="show">
    <div class="section-header" v-bind:style="{background: colors.titleBg}">
    <h1 v-bind:style="{color: colors.titleText}">Previous Broadcasts</h1>
  </div>
    <div v-for="vod in v" class="video-wrapper">
      <div class="video">
        <a :href="vod.url">
          <img :src="vod.preview"/>
        </a>
        <div class="video-title" v-bind:style="{background: colors.titleBg}">
          <h4 v-bind:style="{color: colors.titleText}">{{vod.title}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  props: ['colors'],
  name: 'Vods',
  data () {
    return {
      show: false,
      num: '',
      titleBg: '',
      titleText: '',
      twitch: '',
      v: []
    }
  },
  methods: {
    fetchInfo(){
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.twitch = doc.data().twitch;
          this.show = doc.data().vods;
          this.num = doc.data().vids_num;
        })
      })
    },
    fetchVods(){
      if(this.show == 'true') {
      this.$http.get('https://api.twitch.tv/kraken/channels/'+this.twitch+'/videos?broadcasts=true&limit='+this.num+'&client_id='+this.$clientId)
        .then(function(response){
        this.v = response.body.videos
        });
      }
    }
  },
  created: function(){
    this.fetchInfo()
    this.fetchVods()
  },
  updated: function(){
    this.fetchInfo()
    this.fetchVods()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
