<template>
    <div class="twitter" v-if="show">
      <div class="section-header" v-bind:style="{background: colors.titleBg}">
        <h1 v-bind:style="{color: colors.titleText}">Twitter</h1>
      </div>
      <Timeline :id="t" :sourceType="'profile'" :widget-class="`twitter-timeline-settings`" :options="{ tweetLimit: '5', theme: 'dark' }"><div class="lds-dual-ring"></div></Timeline>
      <!-- <a data-height="400" data-theme="dark" href="https://twitter.com/twitterdev">Tweets</a> -->
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
  props: ['colors', 'social'],
  name: 'Twitter',
  data() {
    return {
      show: false,
      t: ''
    }
  },
  methods: {
    fetchTwitter() {
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.t = doc.data().twitter
          this.$nextTick(() => {
            this.show = true
          })
        })
      })
    }
  },
  created: function(){
    this.fetchTwitter()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.6s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
