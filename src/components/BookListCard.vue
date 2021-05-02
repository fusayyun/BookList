<template>
		<div>
			<!-- 圖片 -->
			<div class="card-image">
				<img :src="image" width="200" height="260">
			</div>
			<!-- 書名 -->
			<div class="card-content">
				<span class="card-title">{{name}}</span>
			</div>						
		</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		// 承襲自上層BookList
		props:["profile","image","name"],
	}
</script>