<template>
  <div>
    <div id="nav">
      <router-link to="/">Intro</router-link> |
      <router-link :to="{ name: 'Basic' }">Basic</router-link> |
      <router-link :to="{ name: 'Fundamentals' }">Fundamentals</router-link> |
      <router-link :to="{ name: 'ShortWays' }">Short Ways</router-link> |
      <router-link :to="{ name: 'Faq' }">FAQ</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;
  position: fixed;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>