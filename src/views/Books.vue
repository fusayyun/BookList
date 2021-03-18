<template>
	<!-- Slider main container -->
	<div class="section">
		<!-- Book List，取得值才載入 -->
		<BookList v-if="books.length" :books="books"></BookList>
	</div>
	<div class="section">
		<!-- BookDetail -->
		<router-view/>
	</div>
</template>

<script>
	import BookList from '../components/BookList.vue';

	export default{
		components:{
			BookList
		},
		data(){
			return{
				books:[],	// [{id,name,image}]
			}
		},
		methods:{
			// 取得書籍資料
			async fetchBooks(){
				return await fetch("https://fe-interview-api.unnotech.com/books")
					.then((response) => response.json())
					.then((json) => json)
			},

		},
		// created時執行
		async created(){
			this.books = await this.fetchBooks()
			console.log("hello?") 
		}

	}
</script>