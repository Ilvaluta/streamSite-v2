<template>
  <div class="check">
    <!-- If registered is true, show Home component, if false show noStream component -->
    <Home v-if="registered === 'true'" :streamer="streamer"/>
    <noUser v-else-if="registered === 'false'" />
  </div>
</template>

<script>
import db from '@/components/firebaseInit'
import noUser from '@/views/noUser'
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
      //Get the :streamer parameter from URL and check a doc exists in DB
      let streamer = this.$route.params.streamer
      if (streamer != null | streamer != '' | streamer != '#') {
        //If :streamer isn't empty and exists in database, set registered variable to true
        db.collection('su').doc(streamer)
        .get()
        .then(doc => {
          if (doc.exists) {
            this.streamer.username = streamer
            this.streamer.uid = doc.data().uid
            this.registered = 'true'
          } else {
            //Not registerd, set var to false
            this.registered = 'false'
          }

        })
      } else {
        //Streamer param is empty, set var to false
        this.registered = 'false'
      }
    }
  },
  created: function() {
    this.checkReg()
  },
  components: {
    'noUser' : noUser,
    'Home' : Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
