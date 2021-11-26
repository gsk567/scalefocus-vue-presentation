import { createStore } from 'vuex'

export default createStore({
  state: {
    faq: [],
    amount: 0
  },
  getters: {
    faq(state) {
      return state.faq;
    }
  },
  mutations: {
    ADD_QUESTION(state) {
      state.amount++;
    },
    INIT_QUESTIONS(state) {
      state.faq = [];
      for (let i = 1; i <= state.amount; i++) {
        state.faq.push('Question ' + i);
      }
    }
  },
  actions: {
    initQuestions(context) {
      context.commit('INIT_QUESTIONS');
    },
    addQuestion(context) {
      context.commit('ADD_QUESTION');
      context.commit('INIT_QUESTIONS');
    }
  },
  modules: {
  }
})
