<template>
	<section class="bg-gray">
		<div class="banner" v-loading="loading">
			<el-carousel indicator-position height="880px">
		    <el-carousel-item v-for="(item, index) in bannerList" :key="index">
		      <router-link :to='item.url+"&&wareName="+item.wareName+"&wareImg="+item.imgUrl' target="_blank">
		      	<img :src="item.imgUrl" :alt="item.wareName">
		      </router-link>
		    </el-carousel-item>
		  </el-carousel>
		</div>
		<div class="main">
			<div class="container">
				<div class="destination">
					<div class="title">
						<h2>全球100+旅拍目的地</h2>
						<h4 class="uppercase">GLOBAL TRAVEL DESTINATIONS</h4>
						<div class="line"></div>
					</div>
					<div class="des-rows">
						<ul class="des-row">
							<li v-for="des in desRow1" :index="des.id">
								<router-link :to="des.url">{{des.name}}</router-link>
							</li>
						</ul>
						<ul class="des-row">
							<li v-for="des in desRow2" :index="des.id">
								<router-link :to="des.url">{{des.name}}</router-link>
							</li>
						</ul>
						<ul class="des-row">
							<li v-for="des in desRow3" :index="des.id">
								<router-link :to="des.url">{{des.name}}</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="recommend-section">
					<div class="recommend-title">
						<h3>热门推荐</h3>
					</div>
					<div class="recommend-list">
						<ul class="show-list clearfix">
							<li class="show-item" v-for="item in recommendList" :index="item.id">
								<router-link to="/">
									<img :src="item.imgUrl" class="responsive-img">
									<!-- <i class="icon iocn-tag native"></i> -->
									<p class="item-name">
										{{item.name}} 
										<span class="uppercase">{{item.englishName}}</span>
									</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="native-section">
					<div class="title has-line">
						<h2>国内作品</h2>
						<h4 class="uppercase">GLOBAL TRAVEL DESTINATIONS</h4>
						<div class="line"></div>
					</div>
					<div class="des-rows">
						<ul class="des-row">
							<li v-for="des in nativeDesRow1" :index="des.id">
								<router-link :to="des.url">{{des.name}}</router-link>
							</li>
						</ul>
						<ul class="des-row">
							<li v-for="des in nativeDesRow2" :index="des.id">
								<router-link :to="des.url">{{des.name}}</router-link>
							</li>
						</ul>
					</div>
					<div class="recommend-list">
						<ul class="show-list clearfix">
							<li class="show-item" v-for="item in nativeList" :index="item.id">
								<router-link to="/">
									<img :src="item.imgUrl" class="responsive-img">
									<!-- <i class="icon iocn-tag native"></i> -->
									<p class="item-name">
										{{item.name}} 
										<span class="uppercase">{{item.englishName}}</span>
									</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { getIndexBanner, getDestinations, getShowImgList } from '@/api'
	export default {
		data() {
			return {
				loading: false,
				bannerList: [],
				destinations: [],
				// recommendList: [
				// 	{ id: '20171115001', name: '阿联酋迪拜旅拍婚纱摄影4天3晚套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095049872238.jpg',},
				// 	{ id: '20171115002', name: '阿联酋迪拜旅拍婚纱照一天套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095301943684.jpg',},
				// 	{ id: '20171115003', name: '阿联酋迪拜3天2晚旅拍婚纱摄影套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/06/415099541207583.jpg',},
				// 	{ id: '20171115004', name: '阿联酋迪拜3天2晚旅拍婚纱摄影套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/06/415099541207583.jpg',},
				// 	{ id: '20171115005', name: '阿联酋迪拜旅拍婚纱摄影4天3晚套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095049872238.jpg',},
				// 	{ id: '20171115006', name: '阿联酋迪拜旅拍婚纱照一天套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095301943684.jpg',},
				// 	{ id: '20171115001', name: '阿联酋迪拜旅拍婚纱摄影4天3晚套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095049872238.jpg',},
				// 	{ id: '20171115007', name: '阿联酋迪拜3天2晚旅拍婚纱摄影套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/06/415099541207583.jpg',},
				// 	{ id: '20171115002', name: '阿联酋迪拜旅拍婚纱照一天套系', imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095301943684.jpg',},
				// ],
				tabActive: 1,
				imgSlideNum: 0,
				products: {
					photo: [
						{
							id: 20171116201,
							name: '阿联酋迪拜3天2晚旅拍婚纱摄影套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/06/415099541207583.jpg',
						},
						{
							id: 20171116202,
							name: '上海旅拍婚纱摄影1天套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/07/415100215997889.jpg',
						},
						{
							id: 20171116102,
							name: '马尔代夫玛娜法鲁岛旅拍婚纱照6天4晚',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097792405875.jpg'
						},
					],
					global: [
						{
							id: 20171116101,
							name: '阿联酋迪拜旅拍婚纱摄影4天3晚套系',
							url: '',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095049872238.jpg'
						},
						{
							id: 20171116102,
							name: '马尔代夫玛娜法鲁岛旅拍婚纱照6天4晚',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097792405875.jpg'
						},
						{
							id: 20171116103,
							name: '马尔代夫曼德芙仕岛旅拍婚纱照6天4晚套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097797422734.jpg'
						},
						{
							id: 20171116104,
							name: '圣托里尼旅拍婚纱摄影9天7晚套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097832020875.jpg'
						},
						{
							id: 20171116105,
							name: '马尔代夫阿雅达岛旅拍婚纱照6天4晚',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097805508655.jpg'
						},
						{
							id: 20171116106,
							name: '苏梅岛旅拍婚纱摄影6天4晚套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097847306484.jpg'
						},
						{
							id: 20171116107,
							name: '法国巴黎旅拍婚纱摄影8天6晚套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097857190947.jpg'
						},
						{
							id: 20171116108,
							name: '捷克布拉格旅拍婚纱摄影7天5晚套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097868660247.jpg'
						},
						{
							id: 20171116109,
							name: '马尔代夫神仙珊瑚岛旅拍婚纱照6天4晚',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097773489411.jpg'
						},  
					],
					travel: [
						{
							id: 20171116301,
							name: '新西兰皇后镇旅拍婚纱照一天套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095236434522.jpg',
						},
						{
							id: 20171116302,
							name: '法国普罗旺斯旅拍婚纱照一天套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/01/415095270295456.jpg',
						},
						{
							id: 20171116301,
							name: '马尔代夫阿雅达岛旅拍婚纱照一天套系',
							imgUrl: 'http://fileServer.yueshijue.com/fileService/uploads/2017/11/02/415095965326664.jpg',
						}
					],
				},
			}
		},
		methods: {
			getBanners() {
				this.loading = true;
				getIndexBanner().then(res => {
					this.loading = false;
					if(res.data.code === '0001') {
						this.bannerList = res.data.result.bannerList;
					} else {
						this.$message.error(res.data.message)
					}
				}).catch(err => {
					console.log(err)
					this.loading = false;
				})
			},
			getDes() {
				getDestinations().then(res => {
					this.destinations = res.data.result.destinations;
					this.destinations.sort(() => {
      			return 0.5 - Math.random()
      		})
					console.log(this.destinations)
				})
			},
			imageSlide(val) {
				this.imgSlideNum += val;
				if(this.imgSlideNum <= 0) {
					this.imgSlideNum = 0
				} else if(this.imgSlideNum >= (this.recomendSlideNum - 1)) {
					this.imgSlideNum = this.recomendSlideNum - 1
				}
				this.$refs.recommend.style.left = -(this.imgSlideNum * 100)+ '%';
			},
			changeTabActive(val) {
				this.tabActive = val;
			},
			// handlePlay () {
			// 	this.videoPlayed = true;
			// },
			// handlePause () {
			// 	this.videoPlayed = false;
			// },
			// handlePlayed() {
			// 	let yueVideo = this.$refs.yueVideo;
			// 	if(!(yueVideo && yueVideo.readyState)) {
			// 		this.$message('该视频暂无法播放')
			// 		return;
			// 	}
			// 	yueVideo.paused ? yueVideo.play() : yueVideo.pause()
			// },
			// videoSwitch(video) {
			// 	this.currMv = video;
			// 	let yueVideo = this.$refs.yueVideo;
			// 	let videoTop = document.querySelector('.mv-section').offsetTop;
			// 	yueVideo.load();
			// 	yueVideo.play();
			// 	window.scrollTo(0, videoTop);
			// },
			autoImgSlide() {
				this.imgSlideNum += 1;
				this.imgSlideNum = this.imgSlideNum >= this.recomendSlideNum ? 0 : this.imgSlideNum
				document.querySelector('.recommend-list').style.left = -(this.imgSlideNum * 100)+ '%';
			}
		},
		computed: {
			desRow1() {
				return this.destinations.filter((des, index) => index >= 0 && index < 10 )
			},
			desRow2() {
				return this.destinations.filter((des, index) => index >= 10 && index < 19 )
			},
			desRow3() {
				return this.destinations.filter((des, index) => index >= 19 && index < 27 )
			},
			nativeList(){
				return this.destinations.filter(des => des.region === 'native' && des.imgUrl)
			},
			nativeDesRow1(){
				return this.nativeList.filter((des, index) => index >= 0 && index < 6 )
			},
			nativeDesRow2(){
				return this.nativeList.filter((des, index) => index >= 6 && index < 11 )
			},
			recommendList() {
				return this.destinations.filter(des => des.recommend === true)
			},
			overseaList(){
				return this.destinations.filter(des => des.region === 'oversea')
			},
			recomendSlideNum() {
				return Math.ceil(this.recommendList.length / 3);
			}
		},
		mounted() {
			this.getBanners()
			this.getDes()
		}
	}
</script>
<style scoped lang="scss">
	.banner {
		width: 100%;
		overflow: hidden;
		.el-carousel {
			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
  .main {
  	color: #fff;
  	background: #212121;
  }
  .title {
		padding: 30px;
		text-align: center;
		position: relative;
		h2 {
			font-size: 28px;
			letter-spacing: 2px;
		}
		h4 {
			font-size: 12px;
		}
		.line {
			display: block;
			width: 50px;
			height: 2px;
			margin: 8px auto;
			background: #c60c1a;
		}
		&.has-line {
			h2, h4 {
				display: block;
				width: 200px;
				margin: auto;
			}
			&::before, &::after {
				content: '';
				position: absolute;
				top: 68px;
				width: calc(50% - 150px);
				height: 1px;
				background: #ccc;
			}
			&::before {
				left: 0;
			}
			&::after {
				right: 0;
			}
		}
	}
	.destination {
		margin: 15px 0;
		padding: 15px 0;
  	text-align: center;
	}
	div[class$="-section"] {
		margin: 30px 0;
	}
	.des-rows {
		width: 100%;
		.des-row {
			display: flex;
			justify-content: center;
			margin-bottom: 15px;
			a {
				display: block;
				width: 105px;
				height: 30px;
				line-height: 30px;
				margin-left: 9px;
				text-align: center;
				color: #666;
				background: #F5F4EF;
				border-radius: 5px;
				position: relative;
				&::before {
					content: '';
					position: absolute;
					top: 9px;
					left: 9px;
					width: 10px;
					height: 12px;
					background: url(../assets/img/coordinate.png) no-repeat center;
				}
				&:hover {
					color: #fff;
					background: #009FE9;
					&::before {
						background: url(../assets/img/coordinate_hover.png) no-repeat center;
					}
				}
			}
		}
	}
	.recommend-section {
		.recommend-title {
			position: relative;
			margin: 15px 0;
			text-align: center;
			&::before, &::after {
				content: '';
				position: absolute;
				top: 18px;
				width: calc(50% - 65px);
				height: 1px;
				background: #ccc;
			}
			&::before {
				left: 0;
			}
			&::after {
				right: 0;
			}
			h3 {
				display: inline-block;
				width: 130px;
				padding: 5px 30px;
				font-weight: normal;
				border: 1px solid #ccc;
				&:hover {
					background: #e50110;
					border: 1px solid #e50110;
				}
			}
		}
	}
	// .product {
	// 	margin: 50px 0;
	// 	.recommend-list {
	// 		position: relative;
	// 		.more {
	// 			margin: 12px 0;
	// 			text-align: right;
	// 			a {
	// 				color: #e50110;
	// 			}
	// 		}
	// 		.switch-button {
	// 			position: absolute;
	// 			top: 40%;
	// 			left: 0;
	// 			width: 100%;
	// 			height: 1px;
	// 			.icon {
	// 				position: absolute;
	// 				top: 40%;
	// 		    width: 32px;
	// 		    height: 57px;
	// 		    cursor: pointer;
	// 				&.prev {
	// 					left: -50px;
	// 					background-position: -138px -59px;
	// 				}
	// 				&.next {
	// 					right: -50px;
	// 					background-position: -106px -59px;
	// 				}
	// 			}
	// 		}
	// 		.recommend-wrap {
	// 			position: relative;
	// 			overflow: hidden;
	// 			width: 100%;
	// 			height: 221px;
	// 		}
	// 		.recommend-list {
	// 			position: absolute;
	// 			top: 0;
	// 			left: 0;
	// 			height: 221px;
	// 			transition: all .8s;
	// 			li {
	// 				float: left;
	// 				width: 394px;
	// 				margin-right: 9px;
	// 				overflow: hidden;
	// 				cursor: pointer;
	// 				position: relative;
	// 				&:nth-child(3n) {
	// 					margin-right: 0;
	// 				}
	// 				&:hover {
	// 					.item-name {
	// 						bottom: 0;
	// 						background: #e50110;
	// 					}
	// 				}
	// 				img {
	// 					display: block;
	// 					width: 100%;
	// 					height: auto;
	// 				}
	// 				.item-name {
	// 					position: absolute;
	// 					bottom: -45px;
	// 					width: 100%;
	// 					padding: 10px 12px;
	// 					text-align: center;
	// 					font-size: 16px;
	// 					color: #fff;
	// 					background: transparent;
	// 					transition: all .3s;
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	// .product-show {
	// 	margin: 50px 0;
	// 	.product-tab {
	// 		display: flex;
	// 		.tab {
	// 			flex: 1;
	// 			cursor: pointer;
	// 			background: #434343;
	// 			&.active {
	// 				background: #c60c1a;
	// 				.line {
	// 					background: #fff;
	// 				}
	// 			}
	// 		} 
	// 	}
	// }
	.show-list {
		margin: 30px 0;
		.show-item {
			float: left;
			width: 394px;
			margin-top: 9px;
			margin-right: 9px;
			position: relative;
			transition: all .2s linear;
			&:nth-child(3n) {
				margin-right: 0;
			}
			&:hover {
				transform: translate3d(0, -2px, 0);
				.item-name {
					background: #c60c1a;
				}
			}
			img {
				height: 221px;
			}
			.iocn-tag {
		    position: absolute;
		    top: 0;
		    right: 0;
		    width: 66px;
		    height: 66px;
				&.native {
					background-position: -66px -119px;
				}
				&.photo {
					background-position: -132px -119px;
				}
				&.travel {
					background-position: 0 -119px;
				}
			}
			.item-name {
				padding: 10px 15px;
				text-align: center;
				color: #fff;
				font-size: 16px;
				// background: #414141;
				transition: all .3s;
			}
		}
	}
</style>