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
  name: 'GiveawayModal',
  data () {
    return {
      modalWidth: MODAL_WIDTH,
      ga: ''
    }
  },
  methods: {
    getGiveaway(){
        this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId)
          .then(function(res) {
            if (res.body.donation != null) {
              this.ga = res.body.giveawayurl;
            } else {
              this.ga = false;
            }
          });
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
