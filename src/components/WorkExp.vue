<template>
  <div>
    <div v-for="(item, i) of work" :key="i">
      <div class="infocard">
        <div class="information">
          <h2>{{ item.name }}</h2>
          <br>
          <p class="date">{{ item.Dec }}</p>
          <!-- <a :href="item.url"><p class="date">作品連結:<span class="spaceHover">&nbsp;</span>請點我</p></a> -->
          <!-- <a :href="item.url">作品連結:<span class="spaceHover">&nbsp;</span>請點我</a> -->
          <router-link :to="item.url">作品連結:<span class="spaceHover">&nbsp;</span>請點我</router-link>
        </div>
        <div class="photography"><img :src="item.png" alt="Image" /></div>
        <!-- <div class="photography"><img src="../assets/logo.png" alt="" /></div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import MainPage from "../components/MainPage.vue";
import imgUrl1 from '../assets/autoTest.png'
import imgUrl2 from '../assets/logo.png'

export default {
  name: "WorkExperience",
  inject:['reload'],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      work: [
        // {
        //   name:"EJS Login練習",
        //   url:"http://projecr5-kevin.herokuapp.com",
        //   Dec: "練習使用後端node.js建立具有註冊、登入、新增貼文功能的系統，並結合交通部API查詢捷運班次資料及查詢天氣狀況。",
        //   // png: require('../assets/EJS.png'),
        // },
        {
          name: "自動化測試影片",
          url: "/Video",
          Dec: "使用python selenium測試待辦清單",
          png: imgUrl1,
        },
        {
          name: "待辦清單",
          url: "https://kevinchen800116.github.io/login/",
          Dec: "練習使用vue-cli、vue-router、vux、vuetify、local storage等等、建立具有登入功能的todo-list",
          png: imgUrl2,
        },
        {
          name: "童玩民宿",
          url: "https://kevinchen800116.github.io/twhome/",
          Dec: "練習使用vue-cli、vue-router、vux建立具有圖片輪播功能的民宿網站",
          png: imgUrl2,
        },
      ],
    };
  },
  methods: {
    reflesh(){
      this.reload()
    },
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
  flex-basis: 60%;
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
a {
  text-decoration: none;
  /* color: var(--black-color); */
  color: black;
}
a:hover {
  /* color: var(--blackdrop-color); */
  color:gray
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
