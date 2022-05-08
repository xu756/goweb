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
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 设置请求头
  // config.headers.Authorization = localStorage.getItem('token')
  return config;
}, function (error) {
  // 对请求错误做些什么
  ElMessage.error('请求错误')
  return Promise.reject(error);
});
import md5 from 'js-md5';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
//配置全局
app.config.globalProperties.$http = axios
app.config.globalProperties.$md5 = md5