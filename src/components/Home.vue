<template>
<div class="home" v-bind:style="{background: bg}">
  <Header v-bind:config="config" />
  <GiveawayModal v-bind:config="config"/>
  <div class="social-embeds">
    <Instagram v-bind:config="config" />
    <Twitter v-bind:config="config" />
  </div>
  <Vods v-bind:config="config" />
  <Highlights v-bind:config="config" />
  <Youtube v-bind:config="config" />
  <Sponsors v-bind:config="config" />
  <Footer />
</div>
</template>

<script>
import db from './firebaseInit'

import Header from './sections/Header'
import Vods from './sections/Vods'
import Highlights from './sections/Highlights'
import Youtube from './sections/Youtube'
import Sponsors from './sections/Sponsors'
import Footer from './sections/Footer'
import Instagram from './sections/Instagram'
import Twitter from './sections/Twitter'
import GiveawayModal from './modal/Giveaway.vue'



export default {
  name: 'Home',
  data() {
    return {
      bg: '',
      config: {
        titleBg: '',
        titleText: '',
        headerBg: '',
        headerText: '',
        socialIcon: '',
        socialText: '',
        twitch: '',
        youtube: 'UCkRfArvrzheW2E7b6SVT7vQ',
        twitter: '',
        header: '',
        donation: '',
        giveawayurl: '',
        showHighlights: true,
        showVods: true,
        showYt: true,
        showSponsors: true,
        showInstagram: 'true',
        vidsNum: '4',
        registered: 'false',
        uid: '',
      },
    }
  },
  methods: {
    fetchConfig() {
      let streamer = this.$route.params.streamer
        if (streamer != null | streamer != '' | streamer != '#') {
          db.collection('su').where('twitch', '==', streamer).get().then(querySnapshot => {
            querySnapshot.forEach((doc) => {
              this.config.registered = 'true'
              this.config.uid = doc.data().uid
              // this.$nextTick(() => {
                db.collection('colors').where('streamer_id', '==', this.config.uid).get().then(querySnapshot => {
                  querySnapshot.forEach((doc) => {
                    this.config.titleBg = doc.data().titleBg
                    this.config.titleText = doc.data().titleText
                    this.config.headerBg = doc.data().headerBg
                    this.config.headerText = doc.data().headerText
                    this.config.socialIcon = doc.data().socialIcon
                    this.config.socialText = doc.data().socialText
                    this.bg = 'url('+doc.data().bg+')'
                  })
                })
                db.collection('streamers').where('streamer_id', '==', this.config.uid).get().then(querySnapshot => {
                  querySnapshot.forEach((doc) => {
                    this.config.twitch = doc.data().twitch
                    this.config.showYt = doc.data().showYt
                    this.config.showVods = doc.data().vods
                    this.config.showSponsors = doc.data().sponsors
                    this.config.showHighlights = doc.data().highlights
                    this.config.twitter = doc.data().twitter
                    this.config.header = doc.data().header
                    this.config.donation = doc.data().donation
                    this.config.vidsNum = doc.data().vids_num
                    this.config.giveawayurl = doc.data().giveawayurl
                  })
                })
              // })
            })
          })
        } else {
          this.registered = 'false'
        }
    },
  },
  created: function() {
    this.fetchConfig()
  },
  components: {
    'Header': Header,
    'Footer': Footer,
    'Highlights': Highlights,
    'Instagram': Instagram,
    'Sponsors': Sponsors,
    'Twitter': Twitter,
    'Vods': Vods,
    'Youtube': Youtube,
    'GiveawayModal': GiveawayModal
  }
}
</script>

<style>
.home {
  background-color: #333;
  background-size: cover !important;
}
</style>
