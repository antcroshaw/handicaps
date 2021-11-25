export default {
  namespaced: true,
  state () {
    return {
      handicaps: [
        {
          id: '1',
          name: 'York',
          scores: [20, 23, 25]
        },
        {
          id: '2',
          name: 'Western I',
          scores: [30, 35, 36]
        },
        {
          id: '3',
          name: 'Western Short',
          scores: [35, 38, 39]
        }
      ]
    }
  },
  getters: {
    handicaps (state) {
      return state.handicaps
    }
  },
  mutations: {
    addOneToScore (state, payload) {
      const item = state.handicaps.find(item => item.name === payload.name)
      return item.scores[payload.index]++
    },
    subtractOneFromScore (state, payload) {
      const item = state.handicaps.find(item => item.name === payload.name)
      return item.scores[payload.index]--
    }
  },
  actions: {
    addOneToScore (context, payload) {
      context.commit('addOneToScore', payload)
    },
    subtractOneFromScore (context, payload) {
      context.commit('subtractOneFromScore', payload)
    }
  }
}
