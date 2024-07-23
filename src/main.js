// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa la configuración de Firebase
import firebase from './firebase';

const app = createApp(App);

// Si necesitas usar Firebase en toda la aplicación, puedes proporcionarlo globalmente
app.config.globalProperties.$firebase = firebase;

app.use(store).use(router).mount('#app');
