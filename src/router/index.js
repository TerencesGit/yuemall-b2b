import Container from '@/components/Container'
import ShowContainer from '@/components/ShowContainer'

import Show from '@/pages/show'
import Bali from '@/pages/show/Bali'
import Rome from '@/pages/show/Rome'
import Maldives from '@/pages/show/Maldives'
import Saipan from '@/pages/show/Saipan'

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
	  	{ path: 'show', name: '首页', component: Show,}
	  ]
	},
	{
		path: '/show',
		name: '详情页',
		component: ShowContainer,
	  children: [
	  	{ path: 'Rome', name: '罗马', component: Rome, },
	  	{ path: 'Bali', name: '巴厘岛', component: Bali, },
	  	{ path: 'Saipan', name: '塞班岛', component: Saipan, },
	  	{ path: 'Maldives', name: '马尔代夫', component: Maldives, },
	  ]
	}
]

export default routes;