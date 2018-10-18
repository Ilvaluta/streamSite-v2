<template>
<modal name="ga-modal" transition="pop-out" :width="modalWidth" :height="600">
  <div class="ga-box">
      <iframe :src="config.giveawayurl" class="ga-frame" frameborder="0" scrolling="yes"></iframe>
  </div>
</modal>
</template>
<script>
import db from '../firebaseInit'
const MODAL_WIDTH = 656

export default {
  props: ['config'],
  name: 'GiveawayModal',
  data () {
    return {
      modalWidth: MODAL_WIDTH,
    }
  },
  created: function() {
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
