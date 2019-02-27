<template>
  <div class="noStream">
    <div class="navbar">
      <div class="logo">
        <a href="https://www.streamsite.net" target="_blank"><img src="https://streamsite.net/wp-content/uploads/2018/11/newlogo2.png" alt="StreamSite" /></a>
      </div>
    </div>
    <div class="main-text">
      <h3>Welcome to StreamSite !</h3>
      <hr>
      <p>If you were expecting to see your favourite streamer's site, you need to add their name to the end of the URL, for example : <pre>https://my.streamsite.net/name</pre></p>
      <p>If you are interested about using streamsite for yourself or suggesting it to someone else, visit the <a href="https://streamsite.net">Main Site</a> to find out more.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noStream',
  data() {
    return {
    }
  },
  methods: {
  },
  created: function() {
    document.title = 'Streamsite - Personal website for streamers'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noStream {
  text-align: left;
  background: linear-gradient(180deg,#2e3857 0%,#212529 100%);
  min-height: 100vh;
  width: 100%;
  color: #fbfbfb;
}

.navbar {
  background: #fbfbfb;
  padding: 8px;
}

.logo {
  margin-left: 8%;
}

.logo > a > img {
  max-height: 52%;
}


/* .logo > a > img:hover {
  padding: 16px 0 8px 24px;
  margin-top: -12px;
  border-radius: 4px;
  transition: all 0.2s ease;
} */

.main-text {
  margin-right: 24%;
  margin-left: 24%;
  margin-top: 64px;
  padding: 2rem;
  border-radius: .25rem;
  background: #538bf8;
}

.main-text > hr {
  border-top: 1px solid #2e3857;
  border-bottom: 0;
  margin-top: 16px;
}

.main-text > p {
  margin: 24px 0 8px 0;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
}

.main-text > h3{
  text-align: center;
  font-weight: 400;
  font-size: 2.2em;
  color: #2e3857;
}

.main-text > ol {
  margin: 8px 0 8px -24px;
}

.main-text > ol > li {
  text-align: left;
  padding: 2px 0 2px 0;
}

.cases {
  line-height: 1.5rem;
}

</style>
