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
import db from '@/components/firebaseInit'

import Header from '@/components/sections/Header'
import Vods from '@/components/sections/Vods'
import Highlights from '@/components/sections/Highlights'
import Youtube from '@/components/sections/Youtube'
import Sponsors from '@/components/sections/Sponsors'
import Footer from '@/components/sections/Footer'
import Instagram from '@/components/sections/Instagram'
import Twitter from '@/components/sections/Twitter'
import GiveawayModal from '@/components/modal/Giveaway.vue'



export default {
  props: ['streamer'],
  name: 'Home',
  data() {
    return {
      bg: '',
      config: {
        titleBg: '',
        titleText: '',
        headerBg: '',
        headerText: '',
        sectionBg: '',
        socialIcon: '',
        socialText: '',
        twitch: '',
        header: '',
        donation: '',
        giveawayurl: '',
        showHighlights: true,
        showVods: true,
        showYt: true,
        showSponsors: true,
        vidsNum: '4',
        uid: '',
      },
    }
  },
  methods: {
    fetchConfig() {
                this.config.uid = this.streamer.uid
              // this.$nextTick(() => {
                db.collection('colors').doc(this.streamer.uid)
                .get()
                .then(doc => {
                  if (doc.exists) {
                    this.config.titleBg = doc.data().titleBg
                    this.config.titleText = doc.data().titleText
                    this.config.headerBg = doc.data().headerBg
                    this.config.headerText = doc.data().headerText
                    this.config.socialIcon = doc.data().socialIcon
                    this.config.socialText = doc.data().socialText
                    this.config.sectionBg = doc.data().sectionBg
                    this.bg = 'url('+doc.data().bg+')'
                  }
                })
                db.collection('streamers').doc(this.streamer.uid)
                .get()
                .then(doc => {
                  if (doc.exists) {
                    this.config.twitch = doc.data().twitch
                    this.config.showYt = doc.data().showYt
                    this.config.showVods = doc.data().vods
                    this.config.showSponsors = doc.data().sponsors
                    this.config.showHighlights = doc.data().highlights
                    this.config.header = doc.data().header
                    this.config.donation = doc.data().donation
                    this.config.vidsNum = doc.data().vids_num
                    this.config.giveawayurl = doc.data().giveawayurl
                  }
                })
              // })
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
