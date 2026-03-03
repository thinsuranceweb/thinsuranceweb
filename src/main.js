import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css'
// import './assets/tailwind.css' // if using Tailwind

const app = createApp(App)
app.use(router) // ✅ MUST come before mount
app.mount('#app')
