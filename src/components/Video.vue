<template>
    <div>
      <!-- <vue-core-video-player src="require(../assets/sample.mp4)"></vue-core-video-player> -->
      <video 
        controls width="60%"  muted playsinline 
        x5-video-player-fullscreen="true"
        x5-playsinline
        webkit-playsinline 
        @click="playVideo">
        <source src="require(@/media/sample.mp4)" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      playVideo() {
        this.$refs.video.play();
      }
    }
  }
  </script>
  