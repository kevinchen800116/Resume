
<template>
  <div class="infocard">
    <div class="information">
      <!-- <h2>{{ mdata }}</h2> -->
      <br>
      <h2>自我介紹</h2>
      <br>
      <p class="date2">
        您好，我叫陳光昇，畢業於文化大學國際貿易學系，目前在億力資訊擔任自動化測試工程師，駐點於台新行動銀行負責協助App自動化測試腳本撰寫。
      </p>
      <p class="date2">
        過去曾參與台灣人壽新核心系統專案、法國巴黎人壽專案、第三方支付後台網站的測試，以及API的開發測試等。也曾參與銀行應收帳款承購系統的UAT測試並撰寫測試報告。之前是用Java或Python寫測試腳本(
        Selenium)，並套用testNG或Pytest框架進行assert驗證測試結果，產出測試報告。曾使用過katalon測試工具進行E2E的自動化測試，以及API自動化測試。
      </p>

      <!-- <p class="date2">
         使用Java套件Selenium搭配testNG開發 android 與 ios 腳本，並將開發完成的腳本上傳至bitbucket讓jenkins可以拉取source code進行測試。
        未來希望能朝全端工程師的方向前進，但礙於沒有開發前、後端經驗的關係，因此閒暇之餘，會在udemy線上課程進行學習，並做些side-project，目前會繼續在自動化工程師的領域發展。
      </p> -->
    </div>
    <div class="photography"><img src="../assets/title.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  // props: {
  //   mdata: {},
  // },
  inject:['reload'],
  data() {
    return {
      backupURL: "@/assets/bg.png",
    };
  },
  methods: {
    reflesh(){
      this.reload()
    },
  }
};
</script>

<style scoped>
.infocard {
  background: var(--background-shade-color);
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 15px;
  box-shadow: 3px 3px 6px var(--blackdrop-color);
  border-radius: 7px;
  min-height: 150px;
  max-width: 650px;
}
.information {
  background: url("../assets/bg.png") 0 0 no-repeat;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

h3,
p {
  margin: 5px 0;
  margin-right: 10px;
}
h2 {
  color: black;
}
h3 {
  font-size: 1em;
  color: black;
}
p.date {
  font-size: 0.9em;
  color: black;
}
p.date2 {
  font-size: 0.9em;
  color: black;
  text-align: left;
}
a {
  text-decoration: none;
  color: var(--black-color);
}
a:hover {
  color: var(--blackdrop-color);
}
a:hover span.spaceHover::before {
  content: "_";
  color: var(--background-shade-color);
}
.information p.link {
  padding-top: 20px;
}

@media (max-width: 800px) {
  .infocard {
    flex-direction: column-reverse;
  }
  .photography {
    text-align: center;
  }
  .photography img {
    max-width: 100%;
    height: auto;
  }
}
</style>
