<template>
	<!-- 防止送出 -->
	<form @submit.prevent="onSubmit">
		<div class="section">
			<div class="row">
				<div class="col l2 s12">
					<h4>價格</h4>
				</div>
				<div class="col l2 s2 input-field">
					<!-- price值大於1才可做減法 -->
					<button class="btn" @click="book.price > 1 ? book.price-- : ''">-</button>
				</div>
				<div class="col l4 s8 input-field">
					<input class="center input-text" type="number" name="price" v-model.number="book.price" min="1">
				</div>
				<div class="col l2 s2 input-field">
					<button type="button" class="btn" @click="book.price++">+</button>
				</div>
			</div>
			<div class="row">
				<div class="col l2 s12">
					<h4>數量</h4>	
				</div>
				<div class="col l2 s2 input-field">
					<!-- count值大於1才可做減法 -->
					<button type="button" class="btn" @click="book.count > 1 ? book.count-- : ''">-</button>
				</div>
				<div class="col l4 s8 input-field">
					<input type="number" name="count" class="center input-text" v-model.number="book.count" min="1">
				</div>
				<div class="col l2 s2 input-field">
					<button type="button" class="btn" @click="book.count++">+</button>
				</div>
			</div>
		</div>

		<button type="submit" class="btn-large wave">save</button>
	</form>
</template>
<script>
	export default{
		data() {
			return {
				book: {
					id: '1',
					price: 1,
					count: 1
				},
			}
		},
		computed: {
			// 取得bookId
			bookId(){	
				console.log('zz');
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
			this.book = await this.fetchBookDetail(this.bookId).catch((err) => {console.error(err)})
		},
	};
	
</script>
<style type="text/css">
	.input-text{
		font-size: 1.64rem!important; 
	}
</style>