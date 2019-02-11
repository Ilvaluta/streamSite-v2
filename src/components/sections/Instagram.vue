<template>
<div class="instagram" v-if="show">
  <div class="section-header" v-bind:style="{background: config.titleBg}">
    <h1 v-bind:style="{color: config.titleText}">Instagram</h1>
  </div>
  <vue-instagram :token="instaToken" :count="5" mediaType="image">
    <template slot="feeds" slot-scope="props">
      <div class="insta-card">
        <img :src="props.feed.images.low_resolution.url" class="insta-image" />
        <div class="insta-footer">
          <p class="footer-item"><i class="fa fa-heart"></i> {{props.feed.likes.count }}</p>
          <p class="footer-item"><i class="fa fa-comment"></i> {{props.feed.comments.count }}</p>
          <p class="footer-item"><a :href="props.feed.link" target="_blank"><i class="fa fa-external-link-square-alt"></i></a></p>
        </div>
      </div>
    </template>
  </vue-instagram>
</div>
</template>

<script>
import db from '../firebaseInit'

export default {
  props: ['config'],
  name: 'Instagram',
  data() {
    return {
      show: '',
      instaToken: ''
    }
  },
  methods: {
    fetchToken() {
      let streamer = this.$route.params.streamer
      let uid
      if (streamer != null | streamer != '' | streamer != '#') {
        db.collection('su').where('twitch', '==', streamer).get().then(querySnapshot => {
          querySnapshot.forEach((doc) => {
            uid = doc.data().uid
            db.collection('streamers').where('streamer_id', '==', uid).get().then(querySnapshot => {
              querySnapshot.forEach((doc) => {
                this.instaToken = doc.data().instagram
                this.show = 'true'
              })
            })
          })
        })
      }
    }
  },
  created: function() {
    this.fetchToken()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.insta-card {
  padding: 8px;
  margin: 8px;
  background: #121212;
  display: inline-block;
}

.insta-card>.insta-image {
  max-height: 50%;
  max-width: 50%;
}

.insta-footer>.footer-item {
  display: inline-block;
  color: #EAEAEA;
}

.insta-footer>.footer-item>a {
  color: #3498db;
}
</style>
