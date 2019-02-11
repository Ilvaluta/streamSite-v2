<template>
<div class="highlights" v-show="config.showHighlights">
  <div class="section-header" v-bind:style="{background: config.titleBg}">
    <h1 v-bind:style="{color: config.titleText}">Previous Highlights</h1>
  </div>
  <div v-for="highlight in h" class="video-wrapper">
    <div class="video">
      <a :href="highlight.url" :aria-label="highlight.title">
          <img :src="highlight.thumbnails[0].url"/>
        </a>
      <div class="video-title" v-bind:style="{background: config.titleBg}">
        <h4 v-bind:style="{color: config.titleText}">{{highlight.title}}</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from '../firebaseInit'
export default {
  props: ['config'],
  name: 'Highlights',
  data() {
    return {
      h: [],
      num: '',
    }
  },
  methods: {
    fetchHighlights() {
      if (this.config.registered == 'true') {
        if (this.config.showHighlights == 'true') {
          this.$http.get('https://api.twitch.tv/kraken/channels/' + this.config.twitch + '/videos?clips=true&limit=' + this.config.vidsNum + '&client_id=' + this.$clientId)
            .then(function(response) {
              this.h = response.body.videos
            });
        }
      }
    }
  },
  created: function() {
    this.fetchHighlights()
  },
  updated: function() {
    this.fetchHighlights()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
