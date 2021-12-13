export default {
  handicaps (state) {
    return state.handicaps
  },
  getHandicapById: (state) => (id) => {
    return state.handicaps.find(handicaps => handicaps.id === id)
  }
}
