# booklist
https://github.com/UnnotechSoftware/unnotech-frontend-recruit

```
books
├── babel.config.js             # babel設定檔
├── deploy.sh                   # 部屬到GitHub Pages的建置檔
├── package-lock.json           
├── package.json                # 專案、相依套件檔案
├── public                      # 公開檔案目錄
│   └── index.html              # Vue 實體掛載目標
├── README.md                   
├── src                         # 原始碼目錄
│   ├── App.vue                 # 根元件
│   ├── components              # 元件目錄
│   │   ├── BookDetail.vue      # Book Detail元件、頁面(/books/:bookId)
│   │   ├── BookList.vue        # List 元件
│   │   └── BookListCard.vue    # Card元件
│   ├── main.js                 # 專案進入點
│   ├── router
│   │   └── route.js            # 路由設定檔案
│   └── views
│       └── Books.vue           # Books元件、頁面(/books)
└── vue.config.js               # Vue CLI 配置檔案


```
## Project 執行頁面

https://fusayyun.github.io/books/ 


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
