<template>
  <div class="giveaways">
    <h1>Giveaways</h1>
      <div class="giveaway">
        <div v-html="ga"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  data () {
    return {
      ga: ''
    }
  },
  methods: {
    showGiveaway(){
        this.ga = `<a class="e-widget no-button" href="https://gleam.io/6FH24/your-giveaway" rel="nofollow">Your Giveaway</a>`
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
