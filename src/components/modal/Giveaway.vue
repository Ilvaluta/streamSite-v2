<template>
<modal name="ga-modal" transition="pop-out" :width="modalWidth" :height="600">
  <div class="ga-box">
      <iframe :src="ga" class="ga-frame" frameborder="0" scrolling="yes"></iframe>
  </div>
</modal>
</template>
<script>
import db from '../firebaseInit'
const MODAL_WIDTH = 656

export default {
  props: ['streamer'],
  name: 'GiveawayModal',
  data () {
    return {
      modalWidth: MODAL_WIDTH,
      ga: ''
    }
  },
  methods: {
    fetchGiveaway() {
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.ga = doc.data().giveawayurl
        })
      })
    }
  },
  created: function() {
    this.fetchGiveaway()
    this.modalWidth = window.innerWidth < MODAL_WIDTH
      ? MODAL_WIDTH / 2
      : MODAL_WIDTH
  }
}
</script>
<style>

.ga-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
