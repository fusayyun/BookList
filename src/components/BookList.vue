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
		:initialSlide=initialSlideNum
		:slides-per-view="1"
		:slideToClickedSlide=true
		navigation
		:pagination="{ clickable:true }"
		@slideChange="onSlideChange"
	>
		<!-- 子元件 -->
		<swiper-slide  class="swiperH" :key="index" v-for="(book, index) in books" :data-history="book.profile"
		>
			<!-- BookListCard元件載入點 -->
			<BookListCard				
				v-bind="book">
			</BookListCard>
			<!-- 遮罩 -->
			<span class="mask" style="user-select: auto;"></span>				
		</swiper-slide>
	</swiper>
</template>

<script>
	import BookListCard from './BookListCard.vue'	
	
	// import Swiper core and required modules
	import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
	
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';

	// Import Swiper styles
	import 'swiper/swiper-bundle.min.css';
	
	// install Swiper modules
	SwiperCore.use([Navigation, Pagination, Mousewheel]);

	export default {
		data(){
			return{
				initialSlideNum:3	//初始slide的index設定
			}
		},
		components: {
			BookListCard,
			Swiper,
			SwiperSlide,
		},
		// 承襲自Books的陣列
		props:["books"],
		computed: {
			// 取得網址bookId
			bookId(){	
				return this.$route.params.bookId;
			}
		},
		methods: {
			//偵測到slide變化
			onSlideChange(swiper) {
				// 取得active slide的"data-history"屬性
				var url = swiper.$wrapperEl.children('.swiper-slide').eq(swiper.activeIndex).attr('data-history');
				//更新網址
				this.$router.push('/'+url)
			},
		},
		created(){
			//如果網址指定bookId，更改initialSlide
			console.log('載入')
			if(this.bookId){
				this.initialSlideNum = this.bookId-1;
			}		
		},
	}
</script>
<style type="text/css">
	/*mask設定*/
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
	/*active sslide的mask設定*/
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
	/*響應式調整*/
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
