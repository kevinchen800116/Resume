<template>
  <div id="app">
    <router-view name="hello" />
    <HeaderBox :providers="providers" />
    <HelloWorld />

    <router-view />
  </div>
</template>

<script>
import HeaderBox from "./components/HeaderBox.vue";
import HelloWorld from "./components/HelloWorld.vue";
import InfoCard from "./components/InfoCard.vue";

export default {
  components: {
    HeaderBox,
    HelloWorld,
    InfoCard,
  },
  name: "App",
  data() {
    return {
      providers: [
        {
          id: "franceinfo",
          name: "自我介紹",
          url: "https://www.francetvinfo.fr/titres.rss",
        },
        {
          id: "lemonde",
          name: "工作經歷",
          url: "https://www.lemonde.fr/rss/une.xml",
        },
        {
          id: "lemonde2",
          name: "作品集",
          url: "https://www.lemonde.fr/rss/une.xml",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* color: white; */
  /* margin-top: 60px; */
}
</style>
