<template>
  <div class="hello">
    <h2></h2>
    <p>
      <router-link
        v-for="(item, i) of Menu"
        :key="i"
        :to="{ path: '/' + item.url }"
        ><span> {{ item.name }} &nbsp; </span></router-link
      >
    </p>
  </div>
</template>

<script>
import Introduce from "./Introduce.vue";
export default {
  name: "HelloWorld",
  components: {
    Introduce,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      // Menu: ["自我介紹", "工作經歷", "作品集"],
      Menu: [
        {
          name: "自我介紹",
          url: "Introduce",
        },
        {
          name: "工作經歷",
          url: "InfoCard",
        },
        {
          name: "作品集",
          url: "WorkExp",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.hello {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  color: var(--primary-shade-color);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  padding: 5px;
  border-top-right-radius: 7px;
  background: var(--primary-color);
  color: var(--background-color);
}
p a {
  color: var(--background-color);
  text-decoration: none;
}
</style>
