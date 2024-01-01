<template>
    <div>
      <video controls width="60%"  muted playsinline @click="playVideo">
        <source src="@/assets/sample.mp4" type="video/mp4">
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
  