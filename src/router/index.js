import Container from '@/components/Container'
import ShowContainer from '@/components/ShowContainer'

import Login from '@/pages/login'
import ShowIndex from '@/pages/show'
import ShowDetail from '@/pages/showDetail'
import IssueProtocol from '@/pages/issue/site_protocol'
import IssueProcess from '@/pages/issue/process'
import IssuePayment from '@/pages/issue/payment'
import IssueJoin from '@/pages/issue/join'
import IssuePhotoTerm from '@/pages/issue/photo_term'
import IssueTourismTerm from '@/pages/issue/tourism_term'
import IssueContact from '@/pages/issue/contact'
import IssueInstructions from '@/pages/issue/instructions'
import IssueComplain from '@/pages/issue/customer_complain'

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
		name: '客片页',
		component: ShowContainer,
	  children: [
	  	{ path: 'detail', name: '客片详情页', component: ShowDetail, },
	  	
	  ]
	},
	{
		path: '/issue',
		name: 'Issue页',
		component: Container,
	  children: [
	  	{ path: 'protocol', name: '网站协议', component: IssueProtocol, },
	  	{ path: 'process', name: '预定流程', component: IssueProcess, },
	  	{ path: 'payment', name: '付款及发票', component: IssuePayment, },
	  	{ path: 'join', name: '加盟我们', component: IssueJoin, },
	  	{ path: 'photo_term', name: '旅拍术语', component: IssuePhotoTerm, },
	  	{ path: 'tourism_term', name: '旅游术语', component: IssueTourismTerm, },
	  	{ path: 'contact', name: '联系我们', component: IssueContact, },
	  	{ path: 'instructions', name: '预定须知', component: IssueInstructions, },
	  	{ path: 'complain', name: '预防客怨', component: IssueComplain, },
	  ]
	},
	{
		path: '*',
		redirect: '/show',
	}
]

export default routes;