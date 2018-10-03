<template>
  <div class="header" v-bind:style="{background: colors.headerBg}">
    <img :src="header" v-if="headerImg">
    <h1 v-else v-bind:style="{color: colors.headerText}">{{header}}</h1>
    <div class="giveaway" v-show="ga">
      <a @click="$modal.show('ga-modal')" v-bind:style="{color: colors.socialIcon}"><i class="fas fa-4x fa-gift"></i></a>
      <h5 v-bind:style="{color: colors.socialText}">Giveaway</h5>
    </div>
    <div class="donation">
      <a :href="d" target="_blank" v-bind:style="{color: colors.socialIcon}"><i class="fas fa-4x fa-donate"></i></a>
      <h5 v-bind:style="{color: colors.socialText}">Donate</h5>
    </div>
    <div class="status" :class="{ live : isLive }">
      <div id="online" v-if="isLive">
        <a :href="'http://twitch.tv/' + twitch" target="_blank">
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
import db from './firebaseInit'
export default {
  props: ['colors'],
  name: 'Header',
  data () {
    return {
      isLive: '',
      game: '',
      viewers: '',
      img: '',
      twitch: '',
      header: '',
      headerImg: false,
      d: '',
      ga: true,
    }
  },
  methods: {
    fetchInfo(){
      db.collection('streamers').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          this.twitch = doc.data().twitch
          this.header = doc.data().header
          this.d = doc.data().donation
          this.$http.get('https://api.twitch.tv/kraken/streams/'+doc.data().twitch+'?&client_id='+this.$clientId)
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
              if(this.isImage(doc.data().header)){
                this.headerImg = true
              } else {
                this.headerImg = false
              }
              if(doc.data().giveawayurl == null || doc.data().giveawayurl == 'false') {
                this.ga = false
              } else {
                this.ga = true
              }
            })
        })
      })
    },
    isImage(input) {
        if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(input)) {
            return true
        } else { // input is not an image
            return false
        }
    },
    // fetchSocial(){
    //   db.collection('social').where('streamer_id', '==', this.$streamerId).get().then(querySnapshot => {
    //     querySnapshot.forEach((doc) => {
    //       const social = {
    //         icon : doc.data().icon,
    //         url : doc.data().url
    //       }
    //       this.social.push(social)
    //     })
    //   })
    // },
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
.header > h1 {
  grid-area: text;
  text-align: left;
  color: #ecf0f1;
  margin: 56px 0 0 40px;
  display: inline;
}

.header > img {
  margin: 32px 0 0 32px;
  display: inline;
}

/* .social {
  text-align: center;
  list-style: none;
  margin: 32px;
}

.social > li {
  display: inline-block;
  padding: 0 8px 0 8px;
}
.social > li > a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 4em;
}

.social > li > a:hover {
  transition: all 0.2s ease-in-out;
  color: #222;
} */

.donation {
  grid-area: donation;
}

.giveaway {
  grid-area: giveaway;
}

.donation, .giveaway {
  margin: 32px;
}

.donation > h5, .giveaway > h5 {
  margin: 4px 0 0 0;
  color: #ecf0f1;
}

.donation > a, .giveaway > a{
 color: #ecf0f1;
}

.donation > a:hover, .giveaway > a:hover {
  transition: all 0.2s ease-in-out;
  color: #222;
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
}

#online >a > img {
  width: 60%;
}

#offline {
  align-self: center;
  color: #C91F37;
  padding: 16px;
  margin-right: 80px;
  font-weight: bold;
  background: #D2D7D3;
  border-radius: 4px;
}


@media only screen and (max-width:800px) {
  .header {
    grid-template-areas: "text text text" "status donation giveaway";
    grid-gap: 0;
  }
  .header > h1 {
    margin-bottom: 0.5em;
    text-align: center;
  }
  .status {
    justify-content: center;
  }
  #offline{
    margin: 0 1em 0 1em;
  }

}

@media only screen and (max-width:480px) {
  .header {
    grid-template-areas: "text text" "status status" "giveaway donation";
    grid-gap: 0;
  }
  .header > h1 {
    margin-bottom: 1em;
  }
  #offline {
    margin-right: -0.5em;
  }
}

</style>
