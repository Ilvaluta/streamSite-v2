<template>
  <div class="giveaways">
    <h1>Giveaways</h1>
      <div class="giveaway">
        <a class="e-widget no-button" :href="this.$giveAway" rel="nofollow">Your Giveaway</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway',
  data () {
    return {
    }
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
