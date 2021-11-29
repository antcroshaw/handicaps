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
    },
    addNewHandicap (state, newHandicap) {
      const item = state.handicaps.find(item => item.name === newHandicap.name)
      return item.scores.push(newHandicap.value)
    },
    deleteHandicap (state, payload) {
      const item = state.handicaps.find(item => item.name === payload.name)
      return item.scores.splice(payload.index, 1)
    },
    addNewHandicapName (state, name) {
      // first need to work out the max id, we need the id values from all the handicaps
      const ids = state.handicaps.map(user => state.handicaps.id)
      const sorted = ids.sort((a, b) => a - b)
      const id = sorted.length + 1
      const newHandicap = { id: id, name: name, scores: [] }
      return state.handicaps.push(newHandicap)
    }
  },
  actions: {
    addOneToScore (context, payload) {
      context.commit('addOneToScore', payload)
    },
    subtractOneFromScore (context, payload) {
      context.commit('subtractOneFromScore', payload)
    },
    addNewHandicap (context, newHandicap) {
      context.commit('addNewHandicap', newHandicap)
    },
    deleteHandicap (context, payload) {
      context.commit('deleteHandicap', payload)
    },
    addNewHandicapName (context, name) {
      context.commit('addNewHandicapName', name)
    }
  }
}
