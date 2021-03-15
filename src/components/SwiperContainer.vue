<template>
	<!-- 
		-顯示投影片數
		-間隔
	-->
	<swiper
		:slides-per-view="3"
		:space-between="50"
		:centeredSlides=true
		navigation
		:pagination="{ clickable:true }"
		@swiper = "onSwiper"
		@slideChange="onSlideChange"
	>
		<!-- 子元件 -->
		<swiper-slide :key="index" v-for="(book, index) in books">
			<BookCard				
				v-bind="book">
			</BookCard>				
		</swiper-slide>
	</swiper>
</template>

<script>
	// import Swiper core and required modules
	import SwiperCore, { Navigation, Pagination } from 'swiper'
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';

	// Import Swiper styles
	import 'swiper/swiper-bundle.min.css';

	import BookCard from './BookCard.vue'	
	// install Swiper modules
	SwiperCore.use([Navigation, Pagination]);

	export default {
		name: 'swiper-example-centered-slides',
		title: 'Centered slides',
		components: {
			BookCard,
			Swiper,
			SwiperSlide,
		},
		// 承襲自Books的陣列
		props:["books"],

		methods: {
			onSwiper(swiper) {
				console.log(swiper);
			},
			onSlideChange() {
				console.log('slide change');
			},
		},
	}
</script>