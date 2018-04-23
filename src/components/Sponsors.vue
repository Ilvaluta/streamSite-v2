<template>
  <div class="sponsors">
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
      s: [
        {url: '#', img: 'http://via.placeholder.com/150x150'},
        {url: '#', img: 'http://via.placeholder.com/150x150'},
        {url: '#', img: 'http://via.placeholder.com/150x150'}
      ]
    }
  },
  // To be used when backend is set up
  // methods: {
  //   fetchSponsors(){
  //     this.$http.get('')
  //       .then(function(response){
  //       this.s =
  //       });
  //   }
  // },
  // created: function(){
  //   this.fetchSponsors()
  // }
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
