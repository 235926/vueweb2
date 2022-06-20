/*
 * @Description: 路由根文件
 * @Author: cdl
 * @Date: 2022-06-08 14:44:01
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 16:02:47
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决 点击同一路由，控制台报错问题，适用所有UI框架
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}

// 安装 VueRouter 插件
Vue.use(VueRouter)

export const routes = [
	{
		path: '/',
		name: '/',
		component: () => import('@/layout/index.vue'),
		meta: {
			title: '首页',
			icon: 'home_fill',
		},
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: '首页',
					icon: 'home_fill',
				},
				hidden: false,
			},
			{
				path: '/icons',
				name: 'icons',
				component: () => import('@/views/icons/index.vue'),
				meta: {
					title: 'icons',
					icon: 'icons',
				},
				hidden: false,
			},
			{
				path: '/custom-styles',
				name: 'customStyles',
				component: () => import('@/layout/openWay/routerView.vue'),
				meta: {
					title: '自定义样式',
					icon: 'style',
				},
				hidden: false,
				redirect: '/custom-styles/form',
				children: [
					{
						path: '/custom-styles/form',
						name: 'customStylesForm',
						component: () => import('@/layout/openWay/routerView.vue'),
						meta: {
							title: 'Form 表单',
						},
						hidden: false,
						children: [
							{
								path: '/custom-styles/form/form-style-one',
								name: 'customStylesFormStyleOne',
								component: () => import('@/views/custom-styles/form/form-style-one.vue'),
								meta: {
									title: '自定义样式一',
								},
								hidden: false,
							},
						],
					},
					{
						path: '/custom-styles/table',
						name: 'customStylesTable',
						component: () => import('@/layout/openWay/routerView.vue'),
						meta: {
							title: 'Table 表格',
						},
						hidden: false,
						children: [
							{
								path: '/custom-styles/table/render-loop',
								name: 'customStylesTableRenderLoop',
								component: () => import('@/views/custom-styles/table/render-loop.vue'),
								meta: {
									title: '循环渲染数据',
								},
								hidden: false,
							},
						],
					},
				],
			},
			{
				path: '/test',
				name: 'test',
				component: () => import('@/views/test/index.vue'),
				meta: {
					title: '测试页面',
					icon: 'test',
				},
			},
			{
				path: '/nested',
				name: 'nested',
				component: () => import('@/layout/openWay/routerView.vue'),
				meta: {
					title: '嵌套组件',
					icon: 'nested',
				},
				hidden: false,
				redirect: '/nested/menu1',
				children: [
					{
						path: '/nested/menu1',
						name: 'nestedMenu1',
						component: () => import('@/layout/openWay/routerView.vue'),
						meta: {
							title: 'menu1',
						},
						hidden: false,
						children: [
							{
								path: '/nested/menu1/menu1-1',
								name: 'menu1-1',
								component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
								meta: {
									title: 'menu1-1',
								},
								hidden: false,
							},
							{
								path: '/nested/menu1/menu1-2',
								name: 'menu1-2',
								component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
								meta: {
									title: 'menu1-2',
								},
								hidden: false,
							},
						],
					},
					{
						path: '/nested/menu2',
						name: 'nestedMenu2',
						component: () => import('@/views/nested/menu2/index.vue'),
						meta: {
							title: 'menu2',
						},
						hidden: false,
					},
				],
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

export default router
