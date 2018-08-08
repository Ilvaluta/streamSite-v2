<template>
  <div class="vods" v-show="show">
    <h1>Previous Broadcasts</h1>
    <div v-for="vod in v" class="video-wrapper">
      <div class="video">
        <a :href="vod.url">
          <img :src="vod.thumbnails[1].url"/>
        </a>
        <div class="video-title">
          <h4>{{vod.title}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['streamer'],
  name: 'Vods',
  data () {
    return {
      show: false,
      v: []
    }
  },
  methods: {
    fetchVods(){
      if(this.streamer[0].vods == 'true') {
        this.show = true;
      this.$http.get('https://api.twitch.tv/kraken/channels/'+this.streamer[0].twitch+'/videos?broadcasts=true&limit='+this.streamer[0].num+'&client_id='+this.$clientId)
        .then(function(response){
        this.v = response.body.videos
        });
      }
    }
  },
  created: function(){
    this.fetchVods()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
