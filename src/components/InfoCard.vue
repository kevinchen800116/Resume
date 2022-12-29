<template>
  <div>
    <div
      id="pagetop"
      class="fixed right-0 bottom-0"
      v-show="scY > 300"
      @click="toTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f9f6de"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="arcs"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
    <div v-for="(item, i) of product" :key="i">
      <div class="infocard">
        <div class="information">
          <h2>{{ item.name }}</h2>
          <p class="date">職務：{{ item.job }}</p>
          <p class="date">任職期間：{{ item.age }}</p>
          <p class="date2">工作內容：</p>
          <p class="date2">{{ item.Dec }}</p>
          <p class="date2">{{ item.Dec2 }}</p>
          <p class="date2">{{ item.Dec3 }}</p>
          <p class="date2">{{ item.Dec4 }}</p>
          <p class="date2">{{ item.Dec5 }}</p>
          <p class="date2">{{ item.Dec6}}</p>
          <p class="date2">{{ item.Dec7 }}</p>
          <!-- <p class="link">
            <a v-if="'url' in item == true" target="_blank" :href="item.url">
              作品連結
              <span class="spaceHover">&nbsp;</span>
              >&nbsp; 請點我
            </a>
            <a v-else>
              作品連結
              <span class="spaceHover">&nbsp;</span>
              >&nbsp; 請點我</a>
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  // props: {
  //   mdata: {},
  // },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
      backupURL: "@/assets/bg.png",
      product: [
        {
          id: "1",
          name: "緯創軟體股份有限公司",
          age: "仍在職",
          job: "測試工程師",
          // Dec: "1.測試保險系統及錯誤追蹤管理驗證。2.整理回報測試結果，並協助工程師除錯。3.撰寫測試報告並記錄問題。4.python編寫selenium測試腳本，並使用pytest測試框架進行驗證結果，產出測試報告。",
          Dec:"1.測試壽險新核心保險系統及錯誤追蹤管理驗證。",
          Dec2:"2.整理並回報測試結果，協助工程師除錯。",
          Dec3:"3.撰寫測試報告並記錄問題。",
          Dec4:"4.python編寫selenium測試腳本，並使用pytest測試框架進行驗證結果，產出測試報告。",
          Dec5:"5.撰寫Sikulix測試腳本搭配TestNG測試框架，實現桌面自動化進行end to end測試。",
          Dec6:"6.利用postman發送request至壽險建單api，通過檢核後，於系統內查詢該筆單號資訊是否正確。",
          Dec7:"7.依照需求規格設計符合User使用情境之Test plan。",
        },
        {
          id: "2",
          name: "cubepayment(立方支付)",
          age: "1年7個月",
          job: "自動化測試工程師",
          Dec: "1.執行軟體測試工作及錯誤追蹤管理驗證。",
          Dec2: "2.Api測試with postman insomnia。",
          Dec3: "3.Katalon測試腳本。",
          Dec4: "4.整理回報測試結果協助工程師除錯，並利用Utrack記錄問題。",
          Dec5: "5.管理local enviroment模擬問題。",
          Dec6: "6.依照user使用情境利用python編寫selenium測試腳本。",
          Dec7: "7.查看Linux log。",
        },
        {
          id: "3",
          name: "信深科技",
          age: "5個月",
          job: "系統分析師",
          Dec: "1.Sap Hybris 整合測試。",
          Dec2: "2.Uml流程圖繪製",
          Dec3: "3.編寫Product Specifications產品規格文件。",
          Dec4: "4.參與需求會議訪談。",
        },
        {
          id: "4",
          name: "天逸財金科技公司",
          age: "2年",
          job: "系統維護／操作人員",
          Dec: "1.銀行端應收帳款承購系統整合測試、功能測試、使用者測試。",
          Dec2: "2.編寫使用、操作手冊。",
          Dec3: "3.編寫測試報告並進行問題追蹤處理。",

          
        },
      ],
    };
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.infocard {
  background: var(--background-shade-color);
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
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
.photography {
  text-align: right;
  vertical-align: middle;
  align-self: right;
  flex-basis: 40%;
  padding: 30px 5px;
}
.photography img {
  border-radius: 7px;
  right: 0px;
  max-width: 250px;
  height: auto;
}
h3,
p {
  margin: 2px 0;
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
