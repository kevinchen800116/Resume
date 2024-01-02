<template>
    <div>
      <vue-core-video-player  
        muted autoplay preload loop
        x5-video-player-fullscreen="true"
        x5-playsinline
        playsinline
        webkit-playsinline :src="playSrc"></vue-core-video-player>
      <!-- <video 
        controls width="60%" muted autoplay preload loop
        x5-video-player-fullscreen="true"
        x5-playsinline
        playsinline
        webkit-playsinline
        @click="playVideo">
        <source src="require(@/media/sample.mp4)" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        playSrc:require("@/assets/sample.mp4")
      }
    },
    methods: {
      playVideo() {
        this.$refs.video.play();
      }
    }
  }
  </script>
  