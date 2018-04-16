// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.scss'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(ElementUI)
const router = new Router({
	routes,
})
router.afterEach((to, from) => {
	window.scrollTo(0,0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
