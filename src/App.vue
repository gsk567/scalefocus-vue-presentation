<template>
  <div class="h-100">
    <navigation />
    <div class="h-100 d-flex">
      <div v-if="isStartupPage" class="m-auto">
        <router-view />
      </div>
      <div v-else class="m-auto content">
        <div class="content-container">
          <router-view />
        </div>
      </div>
    </div>
    <author />
  </div>
  
</template>

<script>
import Navigation from "./components/layout/Navigation.vue";
import Author from './components/layout/Author.vue';
export default {
  components: {
    Navigation,
    Author,
  },
  computed: {
    isStartupPage() {
      return this.$route.name === "Intro";
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-image: url("~@/assets/images/back.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 300px rgba(0,0,0,.9);
}

.content {
  padding: 100px;
  width: 100%;
  height: 100%;

  .content-container {
    background: rgba(255, 255, 255, .7);
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
  }
}
</style>
