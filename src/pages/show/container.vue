<template>
	<div class="main transition" @mousewheel.native="scroll">
		<div class="wrapper">
			<div class="container-fluid">
				<!-- <el-breadcrumb separator="/" class="breadcrumb-inner">
					<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
						<router-link :to="item.path">{{ item.name }}</router-link>
					</el-breadcrumb-item>
				</el-breadcrumb> -->
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
				<div class="wrap-footer"></div>
				<div v-show="backShow" class="btn-top transition" @click="toTop">
					<i class="el-icon-arrow-up"></i>
					<span>顶部</span>
				</div>
			</div>
		</div>
		<FooterComp></FooterComp>
	</div>
</template>
<script>
// import { mapGetters } from 'vuex'
import FooterComp from './Footer'
export default {
	name: 'main',
	data () {
		return {
			backShow: false,
			asideShow: true,
		}
	},
	props: ['userInfo'],
	components: {
		FooterComp,
	},
  methods: {
  	scroll () {
  		// console.log(window.scrollY)
  		// console.log(window.screen.availHeight)
  		this.backShow = window.scrollY >= 400 ? true : false;
  		// this.asideShow = window.scrollY >= 600 ? true : false;
  		// if(window.scrollY >= 810) {
  		// 	this.$refs.sidebar.$el.style.position = 'fixed';
  		// 	this.$refs.sidebar.$el.style.top = '0';
  		// 	this.$refs.sidebar.$el.style.right = '0';
  		// 	this.$refs.sidebar.$el.style.opacity = '1';
  		// } else {
  		// 	this.$refs.sidebar.$el.style.top = window.screen.availHeight+'px';
  		// }
  	},
    toTop () {
    	let timer = null;
      let gotoTop = () => {
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= currentPosition*0.2;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer);
          timer = null;
        }
      }
      timer = setInterval(gotoTop, 1)
    }
  },
  mounted () {
  	this.asideShow = false;
  	document.addEventListener('scroll', this.scroll)
  },
  beforeDestroy() {
  	document.removeEventListener('scroll', this.scroll)
  }
}
</script>
<style scoped lang="scss">
	.main {
		position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    // height: calc(100% - 60px);
    .wrapper {
	    min-height: 100%;
	    height: auto !important;
	    height: 100%;
	    margin-bottom: -145px;
	  }
	}
	.main.spread {
		left: 0;
	}
  .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding: 0;
  }
  .el-breadcrumb {
		padding: 0 0 10px;
		font-size: 14px;
  }
  .wrap-footer {
		height: 145px;
	}
	.btn-top {
		position: fixed;
		right: 35px;
		bottom: 100px;
		z-index: 999;
		width: 45px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		color: #999;
		cursor: pointer;
		background: #fff;
		border: 1px solid #e5e5e5;
		&:hover {
			i {
				display: none;
			}
			span {
				display: block;
			}
		}
		i {
			margin-top: 10px;
			font-size: 20px
		}
		span {
			display: none;
			font-size: 12px;
		}
	}
	.fade-enter-active, .fade-leave-active {
	  transition: all .3s;
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0;
		// transform: translateX(30px);
	}
</style>
