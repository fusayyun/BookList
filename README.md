# [Books](https://github.com/UnnotechSoftware/unnotech-frontend-recruit)

## Project 執行頁面

https://fusayyun.github.io/books/ 


## 檔案架構

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

## Vue元件架構

```
App                               #根元件
└── Books(/books)                 #整合元件
    ├──BookList                   #頁面上半部中展示書本的Books List元件
    |  └──BookListCard            #Book List中的Card元件
    └──BookDetail(/books/:id)     #頁面下半部中展示Books Detail的元件
```

## 第三方 library
- Swiper Vue.js Components：

  幻燈片套件
  效能高
  功能齊全
  響應式
  自訂性高
  
- materialize-css：

  基於Material Design的CSS framework
  方便快速

## 困難、問題，以及解決的方法
#### 問題1: Book List在切換成小尺寸頁面時版面跑掉
本來是照Demo的來實作   
後來發現設定內建屬性breakpoints更簡潔靈活   
以及swiper container和slide的高度一定要設定一致   

#### 問題2: Book List卡片切換對應到Book Deatail資料時一直無法同步   
發現是swiper內建的history導航和vue router並不相通，   
棄用swiper的history改成卡片切換時觸發vue router的router.push。
