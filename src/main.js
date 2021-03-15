import { createApp } from 'vue'
import App from './App.vue'
import route from './router/route'

// 新增「根實體」，並掛載於 #app 之上
createApp(App).use(route).mount('#app')
