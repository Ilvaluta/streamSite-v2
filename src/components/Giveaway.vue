<template>
  <div class="giveaways">
    <h1>Giveaways</h1>
      <div class="giveaway">
        <a class="e-widget no-button" :href="ga" rel="nofollow">Your Giveaway</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway',
  data () {
    return {
      ga: ''
    }
  },
  methods: {
    showGiveaway(){
        this.ga = `https://gleam.io/6FH24/your-giveaway`
    }
  },
  created: function(){
    this.showGiveaway()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hl-wrapper {
    display: inline-block;
  }
  .highlight {
    padding: 0 16px 0 16px
  }
</style>
