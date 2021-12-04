// import { createApp } from 'vue'
// import store from './store/index.js'
// import App from './App.vue'
// import router from './router'
// import BaseBadge from './components/ui/BaseBadge'
// import BaseButton from './components/ui/BaseButton'
// import BaseCard from './components/ui/BaseCard'
//
// const app = createApp(app)
// app.mount('#app')
// app.use(store)
// app.use(router)
// app.component('base-card', BaseCard)
// app.component('base-badge', BaseBadge)
// app.component('base-button', BaseButton)
import { createApp } from 'vue'

import router from './router'
import store from './store/index.js'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton'
import BaseBadge from './components/ui/BaseBadge'
import BaseCard from './components/ui/BaseCard'
const app = createApp(App)

app.use(router)
app.use(store)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.mount('#app')
