import Container from '@/components/Container'
import ShowContainer from '@/components/ShowContainer'

import ShowIndex from '@/pages/show'
import ShowDetail from '@/pages/showDetail'

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
	}
]

export default routes;