import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
        component: BookDetail
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 註釋中webpackChunkName的值告訴webpack打包後chunk的名稱
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  // router改變時頁面會刷新
  history: createWebHistory(process.env.BASE_URL),
  routes // "routes: routes" 的縮寫
})

export default router
