import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      vacancies: []
    }
  },

  getters:{
    getVacancies: (state) => state.vacancies,
  },
  mutations: {
    addVacancy(state, vacancy) {
      state.vacancies.push(vacancy)
    },
    updateVacancy(state, { index, vacancy }) {
      state.vacancies[index] = vacancy
    },
    deleteVacancy(state, index) {
      state.vacancies.splice(index, 1)
    },
  },
  actions:{
    addVacancy({ commit }, vacancy) {
      commit('addVacancy', vacancy);
    },
    updateVacancy({ commit }, { index, vacancy }) {
      commit('updateVacancy', { index, vacancy });
    },
    deleteVacancy({ commit }, index) {
      commit('deleteVacancy', index);
    },
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});


