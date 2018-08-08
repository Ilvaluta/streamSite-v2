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
  name: 'Vods',
  data () {
    return {
      show: false,
      v: []
    }
  },
  methods: {
    fetchVods(){
      let num;
      let twitch;
      this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId)
      .then(function(res) {
      if(res.body.vods === 'true') {
        this.show = true;
        num = res.body.vids_number;
        twitch = res.body.twitch
      this.$http.get('https://api.twitch.tv/kraken/channels/'+ twitch +'/videos?broadcasts=true&limit='+num+'&client_id='+this.$clientId)
        .then(function(response){
        this.v = response.body.videos
        });
      }
      });
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
