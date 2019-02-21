<template>
  <div class="noUser">
    <div class="logo">
      <a href="https://www.streamsite.net" target="_blank"><img src="https://streamsite.net/wp-content/uploads/2018/11/newlogo2.png" alt="StreamSite" /></a>
    </div>
    <div class="main-text">
      <h3>User is not registered !</h3>
      <hr>
      <p>It appears that the streamer's site you tried to access isn't registered in our database, there could be a few reasons.</p>
      <ol>
        <li>You made a small typo in the website address.</li>
        <li>The streamer hasn't signed up.</li>
        <li>A problem on our end.</li>
      </ol>
      <div class="cases">
        <p>In case #1, double check what you have typed in to make sure there are no errors.  If after doing that you still arrive back here, follow the link from the streamers Twitch page.</p>
        <p>In case #2, the streamer may not have signed up to StreamSite.  If you think they should, why not let them know about us :).</p>
        <p>In case #3, if there is a problem on our end that is preventing streamer's sites from loading, we will put out an announcement whilst working on getting the problem fixed asap.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noUser',
  data() {
    return {
    }
  },
  methods: {
  },
  created: function() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noUser {
  text-align: left;
  background: linear-gradient(180deg,#2e3857 0%,#212529 100%);
  height: 100vh;
  width: 100%;
  color: #fbfbfb;
}

.logo {
  text-align: center;
}

.logo > a > img {
  background: #fbfbfb;
  padding: 24px 0 8px 24px;
  margin-top: -12px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.0,5);
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
