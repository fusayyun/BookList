<template>
	<!-- 防止送出 -->
	<form @submit.prevent="onSubmit">
		<div>
			<label for="price" class="">價格</label>
			<div>
				<button type="button" class="" @click="book.price > 1 ? book.price-- : ''">-</button>
				<input type="number" name="price" v-model.number="book.price" min="1">
				<button type="button" class="" @click="book.price++">+</button>
			</div>
		</div>
		<div>
			<label for="count" class="">數量</label>	
			<div>
				<button type="button" class="" @click="book.count > 1 ? book.count-- : ''">-</button>
				<input type="number" name="count" v-model="book.count" min="1">
				<button type="button" class="" @click="book.count++">+</button>
			</div>
		</div>

		<button type="submit" class="">save</button>
	</form>
</template>
<script>
	export default{
		data() {
			return {
				book: {
					id: '',
					price: 1,
					count: 1
				}
			}
		},
		computed: {
			// 取得bookId
			bookId(){	
				return this.$route.params.bookId;
			}

		},
		watch:{
			// 監聽網址變化
			bookId: async function(val){ 
				this.book = await this.fetchBookDetail(val);
			}
		},
		methods:{
			// 下載請求
			async fetchBookDetail(id){
				return await fetch("https://fe-interview-api.unnotech.com/profile/"+id)
					.then((response) => response.json())
					.then((json) => json)
			},
			// 上傳請求
			async postBookDetail(id,data){
				return await fetch("https://fe-interview-api.unnotech.com/profile/"+id,{
					method: 'PATCH',
					// header外參數 cache mode redirect referrer
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}).then((response) => response.json())
			},
			// 表單送出處理
			async onSubmit(){ 
				console.log(this.book);
				await this.postBookDetail(this.bookId,this.book)
					.then((book) => {console.log(book);	this.book=book})
					.catch((err) => {console.error(err)})
			}
		},
		// created時執行
		async created(){
			this.book = await this.fetchBookDetail(this.bookId)
			console.log(this.book) 
		}
	};
	
</script>