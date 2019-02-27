<template>
<div class="instagram" v-if="show" v-bind:style="{background: config.sectionBg}">
  <div class="section-header" v-bind:style="{background: config.titleBg}">
    <h1 v-bind:style="{color: config.titleText}">Instagram</h1>
  </div>
  <div class="insta-wrapper">
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
            db.collection('streamers').doc(this.config.uid)
            .get()
            .then(doc => {
                if(doc.data().instagram == null || doc.data().instagram == ''){
                  this.show = false
                } else {
                  this.show = true
                  this.instaToken = doc.data().instagram
                }
            })
    }
  },
  created: function() {
    this.fetchToken()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.insta-wrapper {
  display: flex;
  justify-content: space-between;
}

.insta-card {
  display: inline-block;
  margin: 16px;
  padding: 4px;
  max-height: 184px;
  max-width: 184px;
}

.insta-card>.insta-image {
  max-height: 160px;
  max-width: 160px;
}

.insta-footer>.footer-item {
  display: inline-block;
  color: #EAEAEA;
}

.insta-footer>.footer-item>a {
  color: #3498db;
}
</style>
