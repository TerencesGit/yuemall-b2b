<template>
	<section class="show-page" v-bind:style="{background: bgColor}">
		<header class="show-header">
			<img :src="headerImg" alt="">
		</header>
		<main class="show-main">
			<div class="container">
				<img v-for="(item, index) in imageList" :src="item" :key="index + 1">
			</div>
		</main>
	</section>
</template>
<script>
	import { getImageList } from '@/api'
	import { ShowDetail } from '@/data'
	export default {
		data() {
			return {
				destination: '',
				imageList: [],
				headerImg: '',
				bgColor: '',
				bgColorList: {
					Auckland: '#326307',
					Bali: '#235E80',
					Chejudo: '#088ADE',
					Kyoto: '#983037',
					Maldives: '#3496EF',
					Nara: '#EB6075',
					Paris: '#292637',
					Queenstown: '#014EA8',
					Rome: '#6B4F4B',
					Saipan: '#056CAE',
					Santorini: '#34A0E1',
					Sydney: '#1F2C18',
					Samui : '#1d2623', 
					Xiamen : '#1b4666',
					Beijing : '#932023',
					Dali : '#272938',
					Dalian: '#0e1821',
					Gaoxiong:'#93bc76',
					HuShi:'#674f2d',
					Kending:'#455958',
					Lijiang:'#136ab1',
					Qingdao:'#034660',
					QingdaoJiDi:'#aec9d4',
					Sanya:'#25a6ce',
					Shanghai:'#0a193a',
					Shenzhen:'#7c4f38',
					Dubai:'#1c2039',
					Bragg:'#6b6653',
					Tokyo:'#500d14',
					Melbourne:'#1d1d1d',
					Provence:'#281d2d',
					Cologne:'#303123',
					LosAngeles:'#1d1427',
					Phuket:'#3d4222',
					Nara:'#eb6075',
					Venice:'#0058c2',
				}
			}
		},
		mounted() {
			if(this.$route.query.destination) {
				this.destination = this.$route.query.destination;
				this.bgColor = this.bgColorList[this.destination];
				let showList = ShowDetail[this.destination];
				this.headerImg = showList[0];
				this.imageList = showList.slice(1);
			} else {
				this.$router.push('/')
			}
		}
	}
</script>
<style scoped lang="scss">
	.show-page {
	  .show-header {
	    width: 100%;
	    min-height: 400px;
	    img {
	      display: block;
	      width: 100%;
	    }
	  }
	  .container {
	    position: relative;
	    top: -90px;
	    z-index: 2;
	    width: auto;
	    img {
	      display: block;
	      width: 100%;
	      height: auto;
	    }
	  }
	}
</style>