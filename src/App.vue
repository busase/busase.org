<template>
  <div>
    <navBar />
    <router-view />
    <foot />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import navBar from "@/components/NavBar.vue";
import foot from "@/components/Foot.vue";

export default {
  name: "App",
  components: {
    navBar,
    foot,
  },
};
</script>

<style>
</style>
