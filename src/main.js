import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap'

import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import Flicking from "@egjs/vue3-flicking";



const app = createApp(App);
app.use(router);
app.component(Flicking)

app.mount('#app');
