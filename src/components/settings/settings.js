const settings = {
  data () {
    return {
      twitch: ''
    }
  },
  methods: {
    fetchTwitch(){
      this.$http.get('http://streamsite/api/streamer/12')
        .then((response) => {
        this.twitch = response.body.twitch
        });
    }
  },
  created: function(){
    this.fetchTwitch()
  }
   }
