import { createApp } from 'vue'
import { createPinia } from 'pinia';
import "@/assets/scss/style.scss";
// import './style.css'
import App from './App.vue'
import router from './router';
// import axios from 'axios';


const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
// app.use(axios);
// app.config.globalProperties.$axios = axios

app.mount('#app')

// createApp(App).use(router).use(createPinia()).mount('#app');
