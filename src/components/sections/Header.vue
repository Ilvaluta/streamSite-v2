<template>
  <div class="header" v-bind:style="{background: config.headerBg}">
    <div class="logo">
    <img :src="config.header">
  </div>
    <div class="giveaway" v-show="ga">
      <a @click="$modal.show('ga-modal')" v-bind:style="{color: config.socialIcon}" aria-label="Giveaway"><i class="fas fa-4x fa-gift"></i></a>
      <h5 v-bind:style="{color: config.socialText}">Giveaway</h5>
    </div>
    <div class="donation">
      <a :href="config.donation" target="_blank" v-bind:style="{color: config.socialIcon}" aria-label="Donation"><i class="fas fa-4x fa-donate"></i></a>
      <h5 v-bind:style="{color: config.socialText}">Donate</h5>
    </div>
    <div class="status" :class="{ live : isLive }">
      <div id="online" v-if="isLive">
        <a :href="'http://twitch.tv/' + config.twitch" target="_blank" aria-label="Twitch">
          <img :src="img" />
        </a>
        <hr>
        <h4>Playing - {{game}}</h4>
        <h5>{{ viewers }} viewers</h5>
      </div>
      <div id="offline" v-else>
        <h3>Offline !</h3>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebaseInit'
export default {
  props: ['config'],
  name: 'Header',
  data () {
    return {
      isLive: '',
      game: '',
      viewers: '',
      img: '',
      // headerImg: '',
      ga: '',
    }
  },
  methods: {
    //Fetch info from Streamers with the doc ref equal to the uid of the current URL
    fetchInfo(){
      db.collection('streamers').doc(this.config.uid)
      .get()
      .then(doc => {
        //Check to see if streamer is currently live, if live set isLive to true and show relative info, if not set isLive to false
          this.$http.get('https://api.twitch.tv/kraken/streams/'+this.config.twitch+'?&client_id='+this.$clientId)
            .then(function(response){
              if(response.body.stream == null)
                {
                  this.isLive = false
                }
              else {
                this.isLive = true
                this.game = response.body.stream.game
                this.viewers = response.body.stream.viewers
                this.img = response.body.stream.preview.medium
              }
            })
            this.$nextTick(() => {
              //Check if giveaway is empty or false, if empty or false don't show giveaway icon
              if(this.config.giveawayurl == null || this.config.giveawayurl == 'false') {
                this.ga = false
              } else {
                this.ga = true
              }
            })
      })
    },
    //Currently only accepting image logos in header, will add text in future.  Saving method until then.
    //
    // isImage(input) {
    //     if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(input)) {
    //         return true
    //     } else { // input is not an image
    //         return false
    //     }
    // }
  },
  created: function(){
    this.fetchInfo()
  },
  updated: function(){
    this.fetchInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  background-color: #3498db;
  height: 2px;
  border: 0;
}

.header {
  display: grid;
  grid-gap: 40px;
  grid-template-areas: "text giveaway donation status";
  width: 100%;
}
.logo {
  margin: 2.5em 0 0 0;
  display: flex;
  grid-area: text;
  color: #ecf0f1;
  display: inline;
}

.logo > img {
  margin-top: 16px;
  display: inline;
}

.donation {
  grid-area: donation;
}

.giveaway {
  grid-area: giveaway;
}

.giveaway > a {
  cursor: pointer;
}


.donation, .giveaway {
  margin: 32px;
}

.donation > h5, .giveaway > h5 {
  margin: 4px 0 0 0;
  font-weight: 500;
  letter-spacing: 0.25px;
}

.status {
  grid-area: status;
  display: flex;
  justify-content: flex-end;
}

#online > a {
  text-decoration: none;
}

#online {
  max-height: 200px;
  max-width: 300px;
  margin: 8px;
  padding: 4px 0 4px 0;
  background: #EAEAEA;
  border-radius: 4px;
}

#online > h5, h4 {
  padding: 0;
  margin: 0;
  color: #333;
  text-decoration: none;
  font-weight: 400;
}

#online >a > img {
  width: 60%;
}

#offline {
  align-self: center;
  padding: 16px;
  margin-right: 80px;
  background: #D2D7D3;
  border-radius: 4px;
}

#offline > h3 {
  color: #C91F37;
  font-weight: 400;
  letter-spacing: 0.25px;
}


@media only screen and (max-width:800px) {
  .header {
    grid-template-areas: "text text" "status status" "donation giveaway";
    grid-gap: 0;
  }
  .logo {
    justify-content: center;
  }
  .logo > h1 {
    margin-bottom: 1em;
  }
  .logo > img {
    margin: 1em 0 1em 0;
  }
  .status {
    justify-content: center;
  }
  #offline {
    margin: 0 1em 0 1em;
  }

}

@media only screen and (max-width:480px) {
  .header {
    grid-template-areas: "text text" "status status" "giveaway donation";
    grid-gap: 0;
  }
  .logo > h1 {
    margin-bottom: 1em;
  }
  #offline {
    margin-right: -0.5em;
  }
}

</style>
