<template>

	<router-link :to="/books/+id">
		<slot>
			<div class="card-image">
				<img :src="image">
			</div>
			<div class="card-content">
				<span class="card-title">{{name}}</span>
			</div>			
		</slot>
	</router-link>
</template>
<script>
	export default{
		props:["id","image","name"],
	}
</script>