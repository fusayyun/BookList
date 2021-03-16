<template>
	<!--
		:history="{key:'' }": 需搭配swiper-slide上設定屬性"data-history"=指定路由
		:initialSlide: 載入初始slide
		:slides-per-view: 顯示幾張
		:direction: 方向
		:breakpoints: 根據大小調整，數字以上
		:space-between: slide之間距離
		:centeredSlides: active slide置中嗎?
		:slideToClickedSlide: 跳轉到點選的slide
		:observeParents: 監測swiper
		navigation: 監測swiper並自動更新
		:pagination: 頁數控制
		:effect //效果
		@swiper="onSwiper"
		@slideChange="onSlideChange"
		@activeIndexChange="activeIndexChange"
		@init="onSizeDetection"
		@swiper:取得swiper實體

		-間隔
	-->
	<swiper
		:history="{key:'books' }"
		class="section swiperH"
		:mousewheel=true
		direction= "vertical"
		:initialSlide="1"
		:breakpoints="{
			760:{
				direction:'horizontal',
				slidesPerView:'3',
				spaceBetween:30,
			}
		}"
		:slides-per-view="1"
		:centeredSlides=true
		:slideToClickedSlide=true
		:observer=true
		:observeParents=true
		navigation
		:pagination="{ clickable:true }"
		:effect="coverflow"
		:coverflowEffect="{
			slideShadows : true,
			rotate: 30,
			stretch: 10,
			depth: 100,
			modifier: 3,		
		}"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
		@transitionEnd="slideChangeEnd"
		@activeIndexChange="activeIndexChange"
		@init="onSizeDetection"
	>
		<!-- 子元件 -->
		<swiper-slide  class="swiperH" :key="index" v-for="(book, index) in books" :data-history="book.id"
		>
			<BookCard				
				v-bind="book">
			</BookCard>				
		</swiper-slide>
	</swiper>
</template>

<script>
	import BookCard from './BookCard.vue'	
	
	// import Swiper core and required modules
	import SwiperCore, { Navigation, Pagination, History, EffectCoverflow,
 Mousewheel } from 'swiper';
	
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';

	// Import Swiper styles
	import 'swiper/swiper-bundle.min.css';
	
	// install Swiper modules
	SwiperCore.use([Navigation, Pagination, History, EffectCoverflow, 
Mousewheel]);

	export default {
		data(){
			return{
				activeId : 0,
				getbooks: this.books
			}
		},
		components: {
			BookCard,
			Swiper,
			SwiperSlide,
		},
		// 承襲自Books的陣列
		props:["books"],

		methods: {
			//取得swipe本身
			onSwiper(swiper) {
				console.log(swiper);
			},
			//偵測到變化
			onSlideChange(swiper) {
				//this.activeId = swiper.activeIndex
				// console.log(swiper.activeIndex);
				// console.log(this.$props.books[swiper.activeIndex]);
				// // let acitveBook = this.$props.books[swiper.activeIndex];
				// //this.activeId = acitveBook.id
				// console.log(this.books);
				this.$emit("urlChange",swiper.activeIndex)

				//console.log(swiper.slides)
				// for (let slide in swiper.slides){
				// 	//slide.style.background="yellow"
				// }
				//console.log(swiper.slides.length)
				//https://stackoverflow.com/questions/32945099/how-to-detect-current-slide-in-swiper-js
				//let index_currentSlide = swiper.realIndex;
				//let currentSlide = swiper.slides[index_currentSlide];
				//console.log(currentSlide.className)
				//currentSlide.className +=" "+"orange accent-1";
				// //this.activeIndex = index_currentSlide
				// var url = swiper.$wrapperEl.children('.swiper-slide').eq(swiper.activeIndex);
				// console.log("what",url)
			},
			// slideChangeEnd(){
			// 	let currentPage = window.location.href.split('books/')[1];
			// 	console.log("Changed?",window.location.href)
								
			// 	//this.activeId
			// 	//this.$router.push({ name:'Books', params:{currentPage}})
			// }
		},


	}
</script>
<style type="text/css">
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		height: 100%;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	@media (max-width: 760px) {
		.swiper-button-next {
			right: 20px;
			transform: rotate(90deg);
		}

		.swiper-button-prev {
			left: 20px;
			transform: rotate(90deg);
		}
		.swiperH{
			height: 400px;
		}
	}
</style>
