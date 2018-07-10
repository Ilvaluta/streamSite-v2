<template>
  <div class="giveaway-wrapper" v-show="ga">
    <h1>Giveaway</h1>
      <div class="giveaway">
        <button @click="$modal.show('ga-modal')">Click</button>
      </div>
  </div>

</template>

<script>
export default {
  name: 'Giveaway',
  data () {
    return {
      ga: true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.giveaway-wrapper {
  display: inline-block;
  background: #303030;
  padding: 8px 0 8px 0;
  margin-top: 16px;
}

.giveaway {
  padding: 8px 16px 8px 16px;
}

.giveaway > button {
  border: 0;
  background: #2980b9;
  color: #ecf0f1;
  padding: 4px;
  font-weight: bold;
}

</style>
