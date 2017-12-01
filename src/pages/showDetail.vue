<template>
	<section class="show-page">
		<header class="show-header">
			<img :src="headerImg" alt="">
		</header>
		<main class="show-main" style="background: #235E80;">
			<div class="container">
				<img v-for="item in imageList" :index="item" :src="item">
			</div>
		</main>
	</section>
</template>
<script>
	import { getShowImgList } from '@/api'
	export default {
		data() {
			return {
				destination: '',
				imageList: [],
				headerImg: '',
			}
		},
		methods: {
			getShowList(des) {
				getShowImgList({des: des}).then(res => {
					console.log(res)
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
				this.getShowList(this.destination)
			} else {
				this.$router.push('/')
			}
			console.log(this.$route.query.destination)
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
	    // .show-item {
	    //   margin-bottom: 10px;
	    //   &:last-child {
	    //     margin-bottom: 0;
	    //   }
	    // }
	    img {
	      display: block;
	      width: 100%;
	      height: auto;
	    }
	  }
	}
</style>