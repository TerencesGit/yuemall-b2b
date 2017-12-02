<template>
	<section>
		<header class="header">
			<div class="center">
				<div class="logo">
					<router-link to="/">
						<img src="../assets/img/logo.png" alt="logo">
					</router-link>
					<h3>欢迎登录</h3>
				</div>
			</div>
		</header>
		<div class="login-wrap">
			<div class="login-box">
				<h3 class="login-title">悦.欢迎登录</h3>
				<el-form :model="loginForm" ref="loginForm" :rules="rules" class="login-form" label-position="left">
					<el-form-item label="用户名" prop="username" label-width="80px">
						<el-input v-model.trim="loginForm.username" placeholder="邮箱/用户名"></el-input>
					</el-form-item>
					<el-form-item label="密  码" prop="password" label-width="80px">
						<el-input type="password" v-model.trim="loginForm.password" placeholder="密码"></el-input>
					</el-form-item>
					<el-form-item label="" class="form-button">
						<el-button type="primary" style="width: 100%" @click="submitForm" :loading="logging">登 录</el-button>
					</el-form-item>
					<el-form-item label="" class="form-link">
						<router-link to="/">忘记密码</router-link>
						<span>|</span>
						<router-link to="/">立即注册</router-link>
					</el-form-item>
				</el-form>
			</div>
			<div class="login-bg">
				<img :src="loginBg" alt="login_bg">
			</div>
		</div>
		<footer class="footer">
			<div class="center">
				<p>Copyright © 2017 yueshijue.com版权所有</p>
			</div>
		</footer>
	</section>
</template>
<script>
	import MD5 from '@/assets/js/md5'
	import Utils from '@/assets/js/utils'
	import { requestLogin } from '@/api'
	export default {
		data() {
			return {
				loginForm: {
					username: '',
					password: '',
				},
				logging: false,
				rules: {
					username: [
	          { required: true, message: '请输入用户名', trigger: 'blur' },
	        ],
	        password: [
	          { required: true, message: '请输入密码', trigger: 'blur' },
	        ],
				},
				loginBg: '',
				loginBgList: [
					'http://fileServer.yueshijue.com/fileService/uploads/2017/11/03/415096767114331.jpg',
					'http://fileServer.yueshijue.com/fileService/uploads/2017/11/03/415096767691832.jpg',
					'http://fileServer.yueshijue.com/fileService/uploads/2017/11/03/415096768788863.jpg',
					'http://fileServer.yueshijue.com/fileService/uploads/2017/11/03/415096768908394.jpg',
					'http://fileServer.yueshijue.com/fileService/uploads/2017/11/04/415097801001784.jpg'
				]
			}
		},
		methods: {
			submitForm() {
				this.$refs.loginForm.validate(valid => {
					if(valid){
						this.logging = true;
						let data = {
							username: this.loginForm.username,
							password: MD5.hex_md5(this.loginForm.password),
							isAdmin: 1
						}
						requestLogin(data).then(res => {
							if(res.data.code === '0001') {
								let user = {
	                name: escape(btoa(this.loginForm.username)),
	                pwd: escape(btoa(this.loginForm.password)),
	              }
	              let userId = res.data.result.userInfo.userId;
	              localStorage.setItem('user', JSON.stringify(user))
	              Utils.setCookie('userId', userId)
	              // this.$message.success('登录成功')
	              this.$router.replace('/')
							} else {
								this.$message.error(res.data.message)
							}
							this.logging = false
						}).catch(err => {
							console.log(err)
							this.logging = false
						})
					} else {
						console.log('err submit')
					}
				})
			},
			keyEnter(e) { 
				e.keyCode === 13 && this.submitForm()
			}
		},
		mounted() {
			let index = Math.floor(Math.random() * this.loginBgList.length);
			this.loginBg = this.loginBgList[index];
			document.addEventListener('keydown', this.keyEnter)
			let user = JSON.parse(localStorage.getItem('user'))
			if(user && user.name && user.pwd) {
	      this.loginForm.username = atob(unescape(user.name))
	      this.loginForm.password = atob(unescape(user.pwd))
	    }
		},
		beforeDestroy() {
			document.removeEventListener('keydown', this.keyEnter)
		}
	}
</script>
<style scoped lang="scss">
	.header {
		padding: 10px 0;
		background: #0095d9;
		.center {
			width: 990px;
			margin: auto;
			a {
				display: inline-block;
				width: 118px;
				height: 43px;
				vertical-align: middle;
			}
			h3 {
				display: inline-block;
				margin-left: 15px;
				font-size: 26px;
				color: #fff;
				vertical-align: middle;
			}
		}
	}
	.login-wrap {
		position: relative;
		height: 100vh;
		min-height: 550px;
		font-family: Helvetica;
		.login-bg {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.login-box {
			position: absolute;
			top: 5%;
			right: 10%;
			width: 400px;
			padding: 30px;
			margin-top: 40px;
			background: rgba(0,0,0,.6);
			.login-title {
				padding-bottom: 10px;
				margin-bottom: 30px;
				color: #fff;
				font-size: 22px;
				border-bottom: 1px solid #fff;
			}
		}
	}
	.el-form {
		.form-button {
			margin-top: 30px;
		}
		.form-link {
			margin: -16px 0 10px; 
			text-align: center;
			font-size: 16px;
			a {
				color: #fff;
			}
			span {
				margin: 0 5px;
				color: #fff;
			}
		}
	}
	.footer {
		.center {
			width: 990px;
			margin: auto;
			padding: 15px;
			text-align: center;
			color: #666
		}
	}
</style>