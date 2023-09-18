import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Bootstrap
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import App.vue
import App from './App.vue'

// Create the app instance
const app = createApp(App) // Move this line below the import statement for App.vue

// app.use(BootstrapVue)
// app.use(BootstrapVueIcons)

const vuetify = createVuetify({
    components,
    directives
})

import router from './router'
import './assets/main.css'
import './index.css'

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
