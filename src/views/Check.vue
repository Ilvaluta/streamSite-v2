<template>
  <div class="check">
    <Home v-if="registered === 'true'" :streamer="streamer"/>
    <noStream v-else-if="registered === 'false'" />
  </div>
</template>

<script>
import db from '@/components/firebaseInit'
import noStream from '@/views/noStream'
import Home from '@/views/Home'

export default {
  name: 'Check',
  data() {
    return {
      registered: '',
      streamer: {
        username: '',
        uid: ''
      }
    }
  },
  methods: {
    checkReg() {
      let streamer = this.$route.params.streamer
      if (streamer != null | streamer != '' | streamer != '#') {
        db.collection('su').doc(streamer)
        .get()
        .then(doc => {
          if (doc.exists) {
            this.streamer.username = streamer
            this.streamer.uid = doc.data().uid
            this.registered = 'true'
          } else {
            this.registered = 'false'
          }

        })
      } else {
        this.registered = 'false'
        console.log('False no doc')
      }
    }
  },
  created: function() {
    this.checkReg()
  },
  components: {
    'noStream' : noStream,
    'Home' : Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
