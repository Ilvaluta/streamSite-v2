<template>
  <div class="vods">
    <h1>Previous Broadcasts</h1>
    <div v-for="vod in v" class="vod-wrapper">
      <div class="vod">
        <a :href="vod.url">
          <img :src="vod.thumbnails[3].url"/>
        </a>
        <h3>{{vod.title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vods',
  data () {
    return {
      v: []
    }
  },
  methods: {
    fetchVods(){
      this.$http.get('https://api.twitch.tv/kraken/channels/lirik/videos?broadcasts=true&limit=2&client_id=sy8t405is27qepl3jf8j7by99b3wo5k')
        .then(function(response){
        this.v = response.body.videos
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
  .vod-wrapper {
    display: inline-block;
  }
  .vod {
    padding: 0 16px 0 16px
  }
</style>
