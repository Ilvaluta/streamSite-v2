<template>
  <div class="sponsors" v-show="show">
    <!-- <div class="section-header" v-bind:style="{background: colors.titleBg}">
    <h1 v-bind:style="{color: colors.titleText}">Sponsors</h1>
  </div> -->
    <div v-for="sponsor in s" class="wrapper">
      <div class="sponsor">
        <div class="sponsorHeader" v-bind:style="{background: colors.titleBg}">
          <h1 v-bind:style="{color: colors.titleText}">G2A</h1>
        </div>
        <div class="sponsorImage">
          <a :href="sponsor.url"><img :src="sponsor.img"/></a>
        </div>
          <h4 v-bind:style="{color: colors.titleText}">{{sponsor.text}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'Sponsors',
  props: ['colors'],
  data () {
    return {
      show: '',
      s: []
    }
  },
  methods: {
    fetchInfo() {
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.show = doc.data().sponsors
        })
      })
    },
    fetchSponsors() {
      db.collection('sponsors').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
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
  created: function(){
    this.fetchInfo()
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
