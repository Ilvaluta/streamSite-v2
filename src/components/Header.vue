<template>
  <div class="header">
    <h1>{{name}}</h1>
    <ul class="social">
      <li v-for="social in sl"><a :href="social.url"><i :class="social.icon"></i></a></li>
    </ul>
    <div class="status">
      <div id="online" v-if="isLive">
        <!-- Add link when backend done -->
        <img :src="img" />
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
  name: 'Header',
  data () {
    return {
      isLive: false,
      game: '',
      viewers: '',
      img: '',
      name: 'StreamSite',
      sl: [
        {url: 'https://twitter.com', icon: 'fab fa-facebook-square fa-3x'},
        {url: 'https://facebook.com', icon: 'fab fa-twitter-square fa-3x'},
        {url: 'https://instagram.com', icon: 'fab fa-instagram fa-3x'},
      ]
    }
  },
  methods: {
    onlineCheck(){
      this.$http.get('https://api.twitch.tv/kraken/streams/'+ this.$twitch +'?&client_id='+this.$clientId)
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
    }
  },
  created: function(){
    this.onlineCheck()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  width: 100%;
  background: #333;
}
.header > h1 {
  text-align: left;
  color: #FFF;
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
  color: rgb(133, 32, 204);
  text-decoration: none;
}
.status {
  background: rgb(73, 73, 73);
}

#online {
  margin: 8px;
  padding-top: 4px;
  background: rgb(97, 97, 97);
  border-radius: 8px;
}

#online > h5, h4 {
  padding: 0;
  margin: 0;
  color: rgb(19, 212, 27);
}

#offline {
  color: rgb(204, 48, 48);
  margin: 20px 0 20px 0;
  font-weight: bold;
}

</style>
