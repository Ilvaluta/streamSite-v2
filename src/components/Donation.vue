<template>
  <div class="donations" v-show="d">
    <h1>Donate to me !</h1>
      <div class="donation">
        <a :href="d"><i class="fas fa-5x fa-donate"></i></a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Donation',
  data () {
    return {
      d: ''
    }
  },
  methods: {
    showDonation(){
        this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId)
          .then(function(res) {
            if (res.body.donation != null) {
              this.d = res.body.donation;
            } else {
              this.d = false;
            }
          });
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
