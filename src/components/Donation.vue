<!-- <template>
  <div class="donations" v-show="show">
    <h1>Donate to me !</h1>
      <div class="donation">
        <a :href="d" target="_blank"><i class="fas fa-5x fa-donate"></i></a>
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
    fetchDonation() {
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.d = doc.data().donation
        })
      })
    },
    showDonation(){
            if (this.streamer.donation != '') {
              this.d = this.streamer.donation;
            } else {
              this.d = false;
            }
    }
  },
  created: function(){
    this.fetchDonation()
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
</style> -->
