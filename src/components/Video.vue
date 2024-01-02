<template>
    <div>
      <vue-core-video-player
        :muted="true"
        :autoplay="false"
        title="自動化測試範例影片"
        preload="nona"
        :loop="true"
        :src="playSrc"></vue-core-video-player>
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
        playSrc:require("@/media/sample.mp4"),
        resolution: 720,
      }
    },
    // methods: {
    //   playVideo() {
    //     this.$refs.video.play();
    //   }
    // }
  }
  </script>
  