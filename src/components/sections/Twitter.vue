<template>
    <div class="twitter" v-if="show">
      <div class="section-header" v-bind:style="{background: config.titleBg}">
        <h1 v-bind:style="{color: config.titleText}">Twitter</h1>
      </div>
        <Timeline :id="twitter" :sourceType="'profile'" :widget-class="`twitter-timeline-settings`" :options="{ tweetLimit: '5', theme: 'dark' }">
          <div class="lds-dual-ring"></div>
        </Timeline>
      <!-- <a data-height="400" data-theme="dark" href="https://twitter.com/twitterdev">Tweets</a> -->
    </div>
</template>

<script>
import db from '../firebaseInit'

export default {
  props: ['config'],
  name: 'Twitter',
  data() {
    return {
      show: '',
      twitter: ''
    }
  },
  methods: {
    fetchTwitter() {
            db.collection('streamers').doc(this.config.uid)
            .get()
            .then(doc => {
                if(doc.data().twitter == null || doc.data().twitter == ''){
                  this.show = false
                } else {
                  this.show = true
                  this.twitter = doc.data().twitter
                }
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
