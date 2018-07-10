<template>
  <div class="sponsors" v-show="show">
    <h1>My Sponsors</h1>
    <div v-for="sponsor in s" class="wrapper">
      <div class="sponsor">
        <a :href="sponsor.url"><img :src="sponsor.img"/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  data () {
    return {
      show: '',
      s: []
    }
  },
  methods: {
    fetchSponsors(){
      this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId).then(function(response){
        if(response.body.sponsors === 'true'){
          this.show = true;
      this.$http.get('http://streamsiteb/api/streamer/'+this.$streamerId+'/sponsors')
        .then(function(response){
        this.s = response.body;
        });
      }
    });
    }
  },
  created: function(){
    this.fetchSponsors()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sponsors {
  padding-top: 16px;
  background-color: #222;
}

.sponsors > h1 {
  color: #ecf0f1;
}

.wrapper {
  display: inline-block;
}
.sponsor {
  padding: 0 16px 0 16px;
}
</style>
