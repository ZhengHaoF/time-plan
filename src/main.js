import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {router} from './route'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import store from "./store/index.js";
import { createPinia } from 'pinia'





const app = createApp(App)
app.use(Antd)
// app.use(store);
app.use(createPinia())
app.use(router);
app.use(VueAxios, axios)
app.mount('#app')
