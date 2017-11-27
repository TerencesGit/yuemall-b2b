import Container from '@/components/Container'
import Index from '@/pages/index'

const routes = [
	{
	  path: '/',
	  redirect: '/index'
	},
	{
	  path: '/',
	  name: '悦视觉',
	  component: Container,
	  children: [
	  	{ path: 'index', name: '首页', component: Index,}
	  ]
	}
]

export default routes;