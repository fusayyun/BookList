<template>
	<!-- Slider main container -->
	<div class="section">
		<SwiperContainer @urlChange="updateDetail" :books="books"></SwiperContainer>
	</div>
	<div class="section">
		<!-- BookDetail -->
		<router-view :changedUrl=updateUrl></router-view>
	</div>
</template>

<script>
	import SwiperContainer from '../components/SwiperContainer.vue';

	export default{
		components:{
			SwiperContainer
		},
		data(){
			return{
				books:[],	// [{id,name,image}]
				updateUrl:""
			}
		},
		methods:{
			// 取得書籍資料
			async fetchBooks(){
				return await fetch("https://fe-interview-api.unnotech.com/books")
					.then((response) => response.json())
					.then((json) => json)
			},
			updateDetail(index){
				console.log(index+1)
				this.updateUrl = index+1;
			}

		},
		// created時執行
		async created(){
			this.books = await this.fetchBooks()
			console.log(this.book) 
		}

	}
</script>