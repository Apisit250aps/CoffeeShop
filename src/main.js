import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';

import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import "@egjs/vue3-view360/css/view360.min.css";

import View360 from "@egjs/vue3-view360";
import Flicking from "@egjs/vue3-flicking";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const app = createApp(App);
app.use(router);
app.use(View360);

app.component(Flicking);
app.mount('#app');
