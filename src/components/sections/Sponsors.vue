<template>
<div class="sponsors" v-show="config.showSponsors">
    <div v-for="sponsor in s" class="wrapper">
      <div class="sponsor">
        <div class="sponsorHeader" v-bind:style="{background: config.titleBg}">
          <h1 v-bind:style="{color: config.titleText}"></h1>
        </div>
        <div class="sponsorImage">
          <a :href="sponsor.url" :aria-label="sponsor.text"><img :src="sponsor.img" /></a>
        </div>
        <h4 v-bind:style="{color: config.titleText, background: config.sectionBg}">{{sponsor.text}}</h4>
      </div>
    </div>
</div>
</template>

<script>
import gleam from '@/plugins/gleam.js'
import db from '../firebaseInit'

export default {
  name: 'Sponsors',
  props: ['config'],
  data() {
    return {
      s: []
    }
  },
  methods: {
    fetchSponsors() {
            db.collection('sponsors').where('streamer_id', '==', this.config.uid).get().then(querySnapshot => {
              querySnapshot.forEach((doc) => {
                const sponsor = {
                  'id': doc.id,
                  'name': doc.data().name,
                  'url': doc.data().url,
                  'img': doc.data().img,
                  'text': doc.data().text
                }
                this.s.push(sponsor)
              })
            })
    },
  },
  created: function() {
    this.fetchSponsors()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: inline-block;
  padding: 0;
  margin: 0;
}
</style>
