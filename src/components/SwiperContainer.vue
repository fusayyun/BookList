<template>
	<!--
		:breakpoints: 設定調整響應式的斷點
		:runCallbacksOnInit: 是否在載入時觸發slideChange等事件
		:mousewheel: 是否啟動滑鼠滾動
		direction: 滑動方向 "vertical" or "horizontal"
		:centeredSlides: active slide是否置中
		:initialSlide: 初始slide的index
		:slides-per-view: 一次顯示幾張
		:slideToClickedSlide: 是否移動到點擊的slide
		navigation: 導航按鈕模組
		:pagination: 分頁模組設定
		@slideChange="onSlideChange": slideChange事件
	-->
	<swiper
		class="section swiperH"
		:breakpoints="{
			760:{
				direction:'horizontal',
				slidesPerView:'3',
				spaceBetween:30,
			}
		}"
		:runCallbacksOnInit=false
		:mousewheel=true
		direction= "vertical"
		:centeredSlides=true
		:initialSlide="3"
		:slides-per-view="1"
		:slideToClickedSlide=true
		navigation
		:pagination="{ clickable:true }"
		@slideChange="onSlideChange"
		@activeIndexChange="onActiveIndexChange"
	>
		<!-- 子元件 -->
		<swiper-slide  class="swiperH" :key="index" v-for="(book, index) in books" :data-history="book.id"
		>
			<!-- BookCard元件載入點 -->
			<BookCard				
				v-bind="book">
			</BookCard>
			<!-- 遮罩 -->
			<span class="mask" style="user-select: auto;"></span>				
		</swiper-slide>
	</swiper>
</template>

<script>
	import BookCard from './BookCard.vue'	
	
	// import Swiper core and required modules
	import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
	
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';

	// Import Swiper styles
	import 'swiper/swiper-bundle.min.css';
	
	// install Swiper modules
	SwiperCore.use([Navigation, Pagination, Mousewheel]);

	export default {
		components: {
			BookCard,
			Swiper,
			SwiperSlide,
		},
		// 承襲自Books的陣列
		props:["books"],

		methods: {
			//偵測到slide變化
			onSlideChange(swiper) {
				//this.activeId = swiper.activeIndex
				// console.log(this.$props.books[swiper.activeIndex]);
				// // let acitveBook = this.$props.books[swiper.activeIndex];
				// //this.activeId = acitveBook.id
				// console.log(this.books);
				// this.$emit("urlChange",swiper.activeIndex)

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
				var url = swiper.$wrapperEl.children('.swiper-slide').eq(swiper.activeIndex).attr('data-history');
				this.$router.push('/books/'+url)
			},
			// slideChangeEnd(){
			// 	let currentPage = window.location.href.split('books/')[1];
			// 	console.log("Changed?",window.location.href)
								
			// 	//this.activeId
			// }
		},
	}
</script>
<style type="text/css">
	.mask{
		background: #fff;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    opacity: .8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
	}
	.swiper-slide-active{
		-webkit-transition: -webkit-box-shadow .25s;
    transition: -webkit-box-shadow .25s;
    transition: box-shadow .25s;
    transition: box-shadow .25s, -webkit-box-shadow .25s;
		background: #fff;
	}
	.swiper-slide-active .mask{
		opacity: 0;
	}
	.swiper-slide {
		text-align: center;
		font-size: 18px;
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
		/*調整container和slide的高度*/
		.swiperH{
			height: 400px;
		}
	}
</style>
