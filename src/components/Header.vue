<template>
  <div class="header">
    <img :src="streamer[0].header" v-if="streamer[0].headerImg">
    <h1 v-else>{{streamer[0].header}}</h1>
    <div class="giveaway" v-show="ga">
      <a @click="$modal.show('ga-modal')"><i class="fas fa-4x fa-gift"></i></a>
      <h5>Giveaway</h5>
    </div>
    <div class="donation">
      <a :href="d"><i class="fas fa-4x fa-donate"></i></a>
      <h5>Donate</h5>
    </div>
    <ul class="social">
      <li v-for="sl in social"><a :href="sl.url"><i :class="sl.icon"></i></a></li>
    </ul>
    <div class="status" :class="{ live : isLive }">
      <div id="online" v-if="isLive">
        <a :href="'http://twitch.tv/' +streamer[0].twitch">
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
export default {
  props: ['streamer'],
  name: 'Header',
  data () {
    return {
      isLive: 'true',
      game: '',
      viewers: '',
      img: '',
      d: '',
      ga: 'ss',
      social: []
    }
  },
  methods: {
    onlineCheck(){
      this.$http.get('https://api.twitch.tv/kraken/streams/'+ this.streamer[0].twitch +'?&client_id='+this.$clientId)
        .then(function(response){
          if(response.body.stream == null)
            {
              this.isLive = false
            }
          else {
            this.isLive = true
            this.game = response.body.stream.game
            this.viewers = response.body.stream.viewers
            this.img = response.body.stream.preview.small
          }
        });
    },
    showDonation(){
            if (this.streamer[0].donation != '') {
              this.d = this.streamer[0].donation;
            } else {
              this.d = false;
            }
    },
    fetchSocial(){
      this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId+'/social').then(function(response){
        this.social = response.body;
        });
    }
  },
  created: function(){
    this.onlineCheck();
    this.fetchSocial();
    this.showDonation();
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
  grid-template-columns: 2fr 1fr 1fr 2fr 1fr;
  width: 100%;
  background: #3498db;
}
.header > h1 {
  text-align: left;
  color: #ecf0f1;
  margin: 56px 0 0 40px;
  display: inline;
  font-family: 'Archivo', sans-serif;
}

.header > img {
  margin: 32px 0 0 32px;
  display: inline;
}

.social {
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

#online {
  margin: 8px;
  padding: 4px 0 4px 0;
  background: #D2D7D3;
  border-radius: 8px;
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

#online > h5, h4 {
  padding: 0;
  margin: 0;
  color: #4D8FAC;
}

#online > img {
  width: 50%;
}

#offline {
  color: #C91F37;
  margin: 30px 80px 0 80px;
  font-weight: bold;
  background: #D2D7D3;
  border-radius: 8px;
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 0px 0px #8e44ad;
  }
  50% {
    box-shadow: 0px 0px 12px 0px #8e44ad;
  }
  100 {
    box-shadow: 0px 0px 36px 8px #8e44ad;
  }
}

</style>
