<template>
<div class="youtube">
  <div class="section-header" v-bind:style="{background: colors.titleBg}">
  <h1 v-bind:style="{color: colors.titleText}">Latest YT Vids</h1>
</div>
  <div v-for="vid in ytVids" class="video-wrapper">
    <div class="video">
      <a :href="'http://youtube.com/watch?v=' + vid.id.videoId" target="_blank">
          <img :src="vid.snippet.thumbnails.medium.url"/>
        </a>
      <div class="video-title" v-bind:style="{background: colors.titleBg}">
        <h4 v-bind:style="{color: colors.titleText}">{{vid.snippet.title}}</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
export default {
  props: ['colors'],
  name: 'Youtube',
  data() {
    return {
      show: true,
      ytVids: [],
      num: '3',
      ytchan: 'AIzaSyBfR3-RIp2rkLTPm3tszJ_e_0N1KUYPCUE'
    }
  },
  methods: {
    fetchInfo() {
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.twitch = doc.data().ytchan
          this.show = doc.data().showyt
          this.num = doc.data().vids_num
        })
      })
    },
    fetchYoutube() {
      if (this.show == true) {
        this.$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCEmOgh0uJDBoKSHfgzdxRuw&maxResults='+this.num+'&order=date&key=AIzaSyBfR3-RIp2rkLTPm3tszJ_e_0N1KUYPCUE')
          .then(function(response) {
          this.ytVids = response.body.items
          });
      }
    }
  },
  created: function() {
    this.fetchInfo()
    this.fetchYoutube()
    console.log(this.ytVids)
  },
  updated: function() {
    this.fetchInfo()
    this.fetchYoutube()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
