import Container from '@/components/Container'
import ShowContainer from '@/components/ShowContainer'

import Login from '@/pages/login'
import ShowIndex from '@/pages/show'
import ShowDetail from '@/pages/showDetail'
import LinkProcess from '@/pages/sitelink/process'
import LinkPayment from '@/pages/sitelink/payment'
import LinkJoin from '@/pages/sitelink/join'
import LinkPhotoTerm from '@/pages/sitelink/photo_term'
import LinkTourismTerm from '@/pages/sitelink/tourism_term'

const routes = [
	{
	  path: '/',
	  redirect: '/show'
	},
	{
	  path: '/login',
	  name: '登录页',
	  component: Login,
	},
	{
	  path: '/',
	  name: '悦视觉',
	  component: Container,
	  children: [
	  	{ path: 'show', name: '首页', component: ShowIndex,}
	  ]
	},
	{
		path: '/show',
		name: '详情页',
		component: ShowContainer,
	  children: [
	  	{ path: 'detail', name: '客片详情页', component: ShowDetail, },
	  	
	  ]
	},
	{
		path: '/link',
		name: '详情页',
		component: Container,
	  children: [
	  	{ path: 'process', name: '预定流程', component: LinkProcess, },
	  	{ path: 'payment', name: '付款及发票', component: LinkPayment, },
	  	{ path: 'join', name: '加盟我们', component: LinkJoin, },
	  	{ path: 'photo_term', name: '旅拍术语', component: LinkPhotoTerm, },
	  	{ path: 'tourism_term', name: '旅游术语', component: LinkTourismTerm, },
	  ]
	},
	{
		path: '*',
		redirect: '/show',
	}
]

export default routes;