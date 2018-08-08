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
  props: ['streamer'],
  name: 'Highlights',
  data() {
    return {
      show: '',
      h: []
    }
  },
  methods: {
    fetchHighlights() {
          if (this.streamer[0].highlights == 'true') {
            this.show = true;
            this.$http.get('https://api.twitch.tv/kraken/channels/' + this.streamer[0].twitch + '/videos?highlights=true&limit=' + this.streamer[0].num + '&client_id=' + this.$clientId)
              .then(function(response) {
                this.h = response.body.videos
              });
          }
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
