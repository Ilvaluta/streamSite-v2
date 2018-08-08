<template>
<modal name="ga-modal" transition="pop-out" :width="modalWidth" :height="600">
  <div class="ga-box">
      <iframe src="https://gleam.io/6FH24/your-giveaway" class="ga-frame" frameborder="0" scrolling="no"></iframe>
  </div>
</modal>
</template>
<script>
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
    getGiveaway(){
            if (this.streamer[0].donation != null) {
              this.ga = this.streamer[0].giveawayurl;
            } else {
              this.ga = false;
            }
    }
  },
  created: function() {
    this.getGiveaway();
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
