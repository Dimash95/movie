// import bootstrap from 'bootstrap'
// import './css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import * as Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)

app.mount('#app')

// app.use(VueAxios, axios)
