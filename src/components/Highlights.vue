<template>
  <div class="highlights">
    <h1>Previous Highlights</h1>
    <div v-for="highlight in h" class="hl-wrapper">
      <div class="highlight">
        <a :href="highlight.url">
          <img :src="highlight.thumbnails[0].url"/>
        </a>
        <h3>{{highlight.title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  data () {
    return {
      h: []
    }
  },
  methods: {
    fetchHighlights(){
      this.$http.get('https://api.twitch.tv/kraken/channels/lirik/videos?highlights=true&limit=2&client_id=sy8t405is27qepl3jf8j7by99b3wo5k')
        .then(function(response){
        this.h = response.body.videos
        });
    }
  },
  created: function(){
    this.fetchHighlights()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hl-wrapper {
    display: inline-block;
  }
  .highlight {
    padding: 0 16px 0 16px
  }
</style>
