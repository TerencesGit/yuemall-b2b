import Container from '@/components/Container'
import ShowContainer from '@/components/ShowContainer'

// import Index from '@/pages/index'

import ShowIndex from '@/pages/show/index'
import ShowDetail from '@/pages/show/detail'

import SiteProtocol from '@/pages/guide/site_protocol'
import ReservationProcess from '@/pages/guide/process'
import PaymentInvoice from '@/pages/guide/payment'

import JoinUs from '@/pages/about/join'
import ContactUs from '@/pages/about/contact'

import PhotoTerm from '@/pages/help/photo_term'
import TourismTerm from '@/pages/help/tourism_term'
import Instructions from '@/pages/help/instructions'
import CustomerComplain from '@/pages/help/customer_complain'

const routes = [
	{
	  path: '/',
	  redirect: '/show'
	},
	{
	  path: '/',
	  name: '悦视觉',
	  component: Container,
	  children: [
	  	// { path: 'index', name: '首页', component: Index,},
	  	{ path: 'show', name: '客片展示页', component: ShowIndex,}
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
		path: '/guide',
		name: '会员指南',
		component: Container,
	  children: [
	  	{ path: 'site_protocol', name: '网站协议', component: SiteProtocol, },
	  	{ path: 'reservation_process', name: '预定流程', component: ReservationProcess, },
	  	{ path: 'payment_invoice', name: '付款及发票', component: PaymentInvoice, },
	  ]
	},
	{
		path: '/about',
		name: '如何合作',
		component: Container,
		children: [
			{ path: 'join_us', name: '加盟我们', component: JoinUs, },
	  	{ path: 'contact_us', name: '联系我们', component: ContactUs, },
		]
	},
	{
		path: '/help',
		name: '帮助中心',
		component: Container,
		children: [
			{ path: 'photo_term', name: '旅拍术语', component: PhotoTerm, },
	  	{ path: 'tourism_term', name: '旅游术语', component: TourismTerm, },
	  	{ path: 'instructions', name: '预定须知', component: Instructions, },
	  	{ path: 'prevention_complain', name: '预防客怨', component: CustomerComplain, },
		]
	},
	{
		path: '*',
		redirect: '/show',
	}
]

export default routes;