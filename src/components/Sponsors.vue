<template>
  <div class="sponsors" v-show="show">
    <h1>Sponsors</h1>
    <div v-for="sponsor in s" class="wrapper">
      <div class="sponsor">
        <a :href="sponsor.url"><img :src="sponsor.img"/></a>
      </div>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'Sponsors',
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
            'img': doc.data().img
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
.sponsors {
  padding-top: 16px;
  background-color: #222;
}

.sponsors > h1 {
  color: #ecf0f1;
}

.wrapper {
  display: inline-block;
}
.sponsor {
  padding: 0 16px 0 16px;
}
</style>
