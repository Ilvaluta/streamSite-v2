<template>
  <div class="donations" v-show="show">
    <h1>Donate to me !</h1>
      <div class="donation">
        <a :href="d"><i class="fas fa-5x fa-donate"></i></a>
      </div>
  </div>
</template>

<script>
export default {
  props: ['streamer'],
  name: 'Donation',
  data () {
    return {
      show: 'false',
      d: ''
    }
  },
  methods: {
    showDonation(){
            if (this.streamer[0].donation != '') {
              this.d = this.streamer[0].donation;
            } else {
              this.d = false;
            }
    }
  },
  created: function(){
    this.showDonation()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.donations {
  display: inline-block;
  background: #303030;
  padding: 8px 0 8px 0;
}

.donation {
  padding: 8px 16px 8px 16px;
}
</style>
