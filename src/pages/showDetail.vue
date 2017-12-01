<template>
	<section class="show-page">
		<header class="show-header">
			<img :src="headerImg" alt="">
		</header>
		<main class="show-main" v-bind:style="{background: bgColor}">
			<div class="container">
				<img v-for="item in imageList" :index="item" :src="item">
			</div>
		</main>
	</section>
</template>
<script>
	import { getImageList } from '@/api'
	export default {
		data() {
			return {
				destination: '',
				imageList: [],
				headerImg: '',
				bgColor: '',
				backgroundColor: {
					Bali: '#235E80',
					Chejudo: '#088ADE',
					Kyoto: '#983037',
					Maldives: '#3496EF',
					Nara: '#EB6075',
					Paris: '#292637',
					Queenstown: '#014EA8',
					Rome: '#6B4F4B',
					Sydney: '#1F2C18',
					Saipan: '#056CAE',
					Santorini: '#34A0E1',
				}
			}
		},
		methods: {
			getShowList(des) {
				getImageList({city: des}).then(res => {
					// console.log(res)
					if(res.data.code === '0001') {
						this.imageList = res.data.result.imageList;
						this.headerImg = this.imageList[0];
						this.imageList.splice(0, 1);
					} else {
						this.$message.error(res.data.message)
					}
				}).catch(err => {
					console.log(err)
				})
			},
		},
		mounted() {
			if(this.$route.query.destination) {
				this.destination = this.$route.query.destination;
				this.bgColor = this.backgroundColor[this.destination];
				this.getShowList(this.destination)
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