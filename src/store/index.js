import { createStore } from 'vuex'
import handicapsModule from './handicaps.js'
const store = createStore({
  modules: {
    handicaps: handicapsModule
  }
})
export default store
