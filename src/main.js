import { createApp } from 'vue'
import { createPinia } from 'pinia';
import "@/assets/scss/style.scss";
// import './style.css'
import App from './App.vue'
import router from './router';


const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount('#app')


// createApp(App).use(router).use(createPinia()).mount('#app');
