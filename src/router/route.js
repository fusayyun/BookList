import { createRouter, createWebHistory } from 'vue-router'
import Books from '../views/Books.vue'
import BookDetail from '../components/BookDetail.vue'
const routes = [
  {
    path: '/books',
    name: 'Books',
    component: Books,
    children: [
      {
        // 當 /books/:bookId 匹配成功,
        // BookDetail 會被渲染在 Books 的 <router-view> 中
        path: ':bookId',
        component: BookDetail,
        props:{
          default: true
        }
      }
    ]
  }
]

const router = createRouter({
  // router改變時頁面會刷新
  history: createWebHistory(process.env.BASE_URL),
  routes // "routes: routes" 的縮寫
})

export default router
