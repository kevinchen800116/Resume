<template>
    <div>
        <vue-core-video-player
        :webkit-playsinline="true"
        :x5-playsinline="true"
        :muted="true"
        :autoplay="false"
        title="自動化測試範例影片"
        preload="nona"
        :loop="true"
        :src="playSrc"
        ref="videoPlayer"></vue-core-video-player>
        <button @click="playVideo">播放视频</button>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        playSrc:require("@/assets/sample.mp4"),
        resolution: 720,
      }
    },
  methods: {
    playVideo() {
      this.$refs.videoPlayer.play();
    },
  },
  }
  </script>
  