<template>
  <div class="vods" v-show="show">
    <h1>Previous Broadcasts</h1>
    <div v-for="vod in v" class="video-wrapper">
      <div class="video">
        <a :href="vod.url">
          <img :src="vod.thumbnails[3].url"/>
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
  name: 'Vods',
  data () {
    return {
      show: false,
      v: []
    }
  },
  methods: {
    fetchVods(t, num){
      this.$http.get('http://streamsiteb/api/streamer/1')
      .then(function(res) {
      if(res.body.vods === 'true') {
        this.show = true;
      this.$http.get('https://api.twitch.tv/kraken/channels/'+ t +'/videos?broadcasts=true&limit='+num+'&client_id='+this.$clientId)
        .then(function(response){
        this.v = response.body.videos
        });
      }
      });
    }
  },
  created: function(){
    this.fetchVods('quin69', 3)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vods {
  margin-top: 16px;
}
</style>
