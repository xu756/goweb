/*
 * @Author: xu756
 * @Date: 2022-05-06 22:32:48
 * @LastEditTime: 2022-05-07 01:19:31
 * @LastEditors: xu756
 * @Description: 配置
 * @FilePath: \goweb\src\main.js
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
//配置axios
axios.defaults.baseURL = 'http://localhost:4000'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')