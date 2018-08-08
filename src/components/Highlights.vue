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

export default {
  name: 'Highlights',
  data() {
    return {
      show: '',
      h: []
    }
  },
  methods: {
    fetchHighlights() {
      let num;
      let twitch;
      this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId)
        .then(function(res) {
          if (res.body.highlights === 'true') {
            this.show = true;
            num = res.body.vids_number;
            twitch = res.body.twitch;
            this.$http.get('https://api.twitch.tv/kraken/channels/' + twitch + '/videos?highlights=true&limit=' + num + '&client_id=' + this.$clientId)
              .then(function(response) {
                this.h = response.body.videos
              });
          }
        });
    }
  },
  created: function() {
    this.fetchHighlights()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
