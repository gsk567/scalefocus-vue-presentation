<template>
  <div class="intro h-100 w-100">
    <div class="w-100 d-flex text-right">
      <img class="logo" :src="logo"/>
    </div>
    <p>Innovate. Transform. Accelerate.</p>
    <h1>Vue</h1>
  </div>
</template>

<script>

export default {
  name: 'Intro',
  components: {

  },
  data() {
    return {
      logo: require('@/assets/images/scalefocus.png')
    }
  }
}
</script>

<style scoped lang="scss">
  .intro {
    text-align: right;
    position: relative;
    left: 400px;

    p {
      font-size: 18px;
      word-spacing: 2px;
      letter-spacing: 1px;
    }

    h1 {
      font-size: 130px;
    }

    .logo {
      width: 600px;
    }
  }

  
</style>