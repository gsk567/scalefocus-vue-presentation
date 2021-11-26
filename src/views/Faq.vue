<template>
  <div>
    <h1>FAQ</h1>
    <button class="btn btn-dark d-inline-block py-1 px-2" @click="addQuestion">ADD</button>
    <div class="row">
      <div class="col-2" v-for="question in faq" :key="question">
        <div class="card">
          <div class="card-header"> 
            <h3 class="card-title">{{ question }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    faq() {
      return this.$store.getters.faq;
    }
  },
  methods: {
    addQuestion() {
      this.$store.dispatch('addQuestion');
    }
  },
  mounted() {
    this.$store.dispatch('initQuestions');
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: black;
  }

  .row {
    margin-top: 20px;
  }

  .card {
    margin-bottom: 10px;
    background: darkblue;
  }

  .card-title {
    color: white;
    font-size: 16px;
    margin: 0;
    font-weight: bold;
  }
</style>