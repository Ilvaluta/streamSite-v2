<template>
<div class="youtube" v-if="config.showYt">
  <div class="section-header" v-bind:style="{background: config.titleBg}">
  <h1 v-bind:style="{color: config.titleText}">Latest YT Vids</h1>
</div>
  <div v-for="vid in ytVids" class="video-wrapper">
    <div class="video">
      <a :href="'https://youtube.com/watch?v=' + vid.id.videoId" target="_blank" :aria-label="vid.snippet.title">
          <img :src="vid.snippet.thumbnails.medium.url"/>
        </a>
      <div class="video-title" v-bind:style="{background: config.titleBg}">
        <h4 v-bind:style="{color: config.titleText}">{{vid.snippet.title}}</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from '../firebaseInit'
export default {
  props: ['config'],
  name: 'Youtube',
  data() {
    return {
      ytVids: [],
      show: true
    }
  },
  methods: {
    fetchYoutube() {
      let streamer = this.$route.params.streamer
      let uid
      let yt
      let nums
      if (streamer != null | streamer != '' | streamer != '#') {
        db.collection('su').where('twitch', '==', streamer).get().then(querySnapshot => {
          querySnapshot.forEach((doc) => {
            uid = doc.data().uid
            db.collection('streamers').where('streamer_id', '==', uid).get().then(querySnapshot => {
              querySnapshot.forEach((doc) => {
                yt = doc.data().youtube
                nums = doc.data().vids_num
                this.show = doc.data().showYt
                this.$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + yt +'&maxResults='+nums+'&order=date&key=AIzaSyBfR3-RIp2rkLTPm3tszJ_e_0N1KUYPCUE')
                  .then(function(response) {
                  this.ytVids = response.body.items
                  })
              })
            })
          })
        })
      }
  }
  },
  created: function() {
    this.fetchYoutube()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
