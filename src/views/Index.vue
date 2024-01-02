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
    <InfoCard></InfoCard>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import HeaderBox from "../components/HeaderBox.vue";
import InfoCard from "../components/InfoCard.vue";

export default {
  name: "WorkExp2",
  components: {
    Menu,
    HeaderBox,
    InfoCard,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
      // providers: [
      //   {
      //     id: "franceinfo",
      //     name: "自我介紹",
      //     url: "https://www.francetvinfo.fr/titres.rss",
      //   },
      //   {
      //     id: "lemonde",
      //     name: "工作經歷",
      //     url: "https://www.lemonde.fr/rss/une.xml",
      //   },
      //   {
      //     id: "lemonde2",
      //     name: "作品集",
      //     url: "https://www.lemonde.fr/rss/une.xml",
      //   },
      // ],
      item: [],
      newsSources: [
        // {
        //   id: "1",
        //   name: "我叫陳光昇",
        //   age: "30",
        //   job: "希望可以",
        //   Dec: "錄取",
        // },
      ],
      // product: [
      //   {
      //     id: "1",
      //     name: "緯創軟體股份有限公司",
      //     age: "仍在職",
      //     job: "測試工程師",
      //     Dec: "1.測試保險系統及錯誤追蹤管理驗證。2.整理回報測試結果，並協助工程師除錯。3.撰寫測試報告並記錄問題。4.python編寫selenium測試腳本，並使用pytest測試框架進行驗證結果，產出測試報告。",
      //   },
      //   {
      //     id: "2",
      //     name: "cubepayment(立方支付)",
      //     age: "1年7個月",
      //     job: "自動化測試工程師",
      //     Dec: "1.執行軟體測試工作及錯誤追蹤管理驗證。2.Api測試with postman insomnia。3.Katalon測試腳本。4.整理回報測試結果協助工程師除錯。5.管理local enviroment模擬問題。6.Utrack記錄問題7.python編寫selenium測試腳本8.查看Linux log",
      //   },
      //   {
      //     id: "3",
      //     name: "信深科技",
      //     age: "5個月",
      //     job: "系統分析師",
      //     Dec: "1.Sap Hybris 整合測試。2.Uml流程圖繪製3.編寫Product Specifications產品規格文件。4.需求會議訪談。",
      //   },
      //   {
      //     id: "4",
      //     name: "天逸財金科技公司",
      //     age: "2年",
      //     job: "系統維護／操作人員",
      //     Dec: "1.銀行端應收帳款承購系統整合測試、功能測試、使用者測試。2.編寫使用、操作手冊。3.編寫測試報告並進行問題追蹤處理。",
      //   },
      //   {
      //     id: "5",
      //     name: "童玩民宿練習",
      //     url: "https://kevinchen800116.github.io/twhome/",
      //     Dec: "使用技術:",
      //   },
      // ],
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
    // reloadFeed(updatedSources) {
    //   if (JSON.stringify(this.newsSources) != JSON.stringify(updatedSources)) {
    //     this.newsSources = updatedSources;
    //     this.items = [];
    //     updatedSources.forEach((element) => {
    //       this.providers.forEach((newsProvider) => {
    //         if (element === newsProvider.id) {
    //           this.getRss(newsProvider.url, newsProvider.name);
    //         }
    //       });
    //     });
    //   }
    // },
    // async getRss(url, source) {
    //   if (!url) {
    //     url = this.providers[0].url;
    //   }
    //   if (!source) {
    //     source = this.providers[0].name;
    //   }
    //   const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
    //   const { contents } = await res.json();
    //   const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    //   const items = feed.querySelectorAll("item");
    //   let newitems = [...items].map((el) => ({
    //     title: this.cleanNews(this.safegetXML(el, "title")),
    //     news: this.cleanNews(this.safegetXML(el, "description")),
    //     date: this.safegetXML(el, "pubDate"),
    //     link: this.safegetXML(el, "link"),
    //     photoUrl: this.photoParserXML(el),
    //     source: source,
    //   }));
    //   this.items = [...this.items, ...newitems];
    // },
    photoParserXML(el) {
      if (
        el &&
        el.querySelector("enclosure") &&
        el.querySelector("enclosure").getAttribute
      ) {
        return el.querySelector("enclosure").getAttribute("url");
      }
      if (el && el.lastElementChild && el.lastElementChild.getAttribute) {
        return el.lastElementChild.getAttribute("url");
      }
      return "";
    },
    safegetXML(el, selectMe) {
      if (!el) return "";
      let selected = el.querySelector(selectMe);
      if (!selected) {
        return "";
      }
      return selected.innerHTML;
    },
    cleanNews(dirty) {
      let clean = dirty
        .replace("<![CDATA[", "")
        .replace("]]>", "")
        .replace("&quot;", "'")
        .replace("&#039;", "'")
        .replace("&nbsp;", " ")
        .replace(".&nbsp;", " ");
      return clean;
    },
  },
  // created: function () {
  //   this.getRss();
  // },
};
</script>

<style>
:root {
  --primary-color: #4fb2b2;
  --primary-shade-color: #20605d;
  --background-color: #f9f6de;
  --background-shade-color: #f2efe2;
  --black-color: #2c3e50;
  --blackdrop-color: #2c3e5033;
}
html {
  background-color: var(--background-color);
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-shade-color);
  margin-top: 10px;
} */
h3 {
  font-size: 18px;
}
#pagetop {
  position: fixed;
  left: 80vw;
  bottom: 10px;
  background: var(--primary-color);
  color: var(--background-color);
  border-radius: 7px;
}
</style>
