<template>
  <div class="infocard">
    <div class="infomation">
      <!-- <h2>{{ mdata }}</h2> -->
      <p class="date">
        您好，我叫陳光昇，畢業於文化大學國際貿易學系，目前在緯創軟體擔任測試工程師，負責台灣人壽新核心保險系統的系統整合測試。例如:台壽保單系統的黑箱測試。
      </p>
      <p class="date">
        過去曾參與第三方支付(立方支付公司)後台網站的測試，以及API的開發測試等。也曾參與銀行應收帳款承購系統(天逸財金科技公司)的UAT測試並撰寫測試報告。之前是用Python寫測試腳本(
        Selenium
        )，並套用Pytest進行assert驗證測試結果，產出測試報告。曾使用過katalon測試工具進行E2E的自動化測試，以及API自動化測試
      </p>

      <p class="date">
        未來希望能朝全端工程師的方向前進，但礙於沒有開發前、後端經驗的關係，因此閒暇之餘，會在udemy線上課程進行學習，並做些side-project，目前會繼續在自動化工程師的領域發展。
      </p>
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
  data() {
    return {
      backupURL: "@/assets/bg.png",
    };
  },
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
  flex-basis: 60%;
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
