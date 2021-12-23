<template>
  <div class="content">
    <div class="banner">
      <div>
        <h1>自我介紹</h1>
        <div>
          <p class="date">
            因緣際會下接觸了自動化測試，曾練習過python編寫selenium測試腳本。因此就對程式產生濃厚的興趣。在此之後，練習過網頁開發並使用過許多不同的樣板以及網頁架構，閒暇之餘也在許多不同的線上學習資源當中，學習新穎的以及多樣的網頁設計技巧。
          </p>
          <p class="date">目前正在努力邁向前端工程師之路。</p>
        </div>
      </div>
    </div>
    <!-- <component :is="currentTab" keep-alive></component> -->
  </div>
</template>

<style>
.content .banner {
  /* margin-left: 20px; */
  width: 100%;
  height: 531px;
  background: url("../../src/assets/bar.jpg") center center fixed no-repeat;
  background-size: cover;
}

.content .banner div {
  display: inline-block;
}
.bar_picture {
  /* margin-right: 1350px; */
  width: 12%;
  height: 12%;
  border-radius: 50%;
}
</style>