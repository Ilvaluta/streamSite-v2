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
      this.$http.get('http://streamsiteb/api/streamer/1').then(function(response){
        if(response.body.sponsors === 'true'){
          this.show = false;
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
.wrapper {
  display: inline-block;
}
.sponsor {
  padding: 0 16px 0 16px;
}
</style>
