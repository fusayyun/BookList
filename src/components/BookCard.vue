<template>
		<div>
<!-- 			<router-link :to="/books/+id" class="waves-effect  "> -->
			<div class="card-image">
				<img :src="image" width="200" height="260">
			</div>
			<div class="card-content">
				<span class="card-title">{{name}}</span>
			</div>						
			<!-- </router-link> -->
		</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:["id","image","name"],
	}
</script>