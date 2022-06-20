<!--
 * @Description: 入口页面
 * @Author: cdl
 * @Date: 2022-06-08 14:44:01
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 15:24:19
-->
<template>
	<div id="app">
		<!-- 路由出口 -->
		<router-view />

		<!-- 系统配置 -->
		<SystemConfig ref="systemConfig" />
	</div>
</template>

<script>
import { login } from '@/api/index.js' // api
import { Local } from '@/utils/storage.js' // 浏览器存储
export default {
	name: 'app',
	components: {
		SystemConfig: () => import('@/components/SystemConfig/drawer.vue'), // main 头部
	},
	data() {
		return {}
	},
	computed: {
		// 获取系统配置信息
		getSystemConfig() {
			return this.$store.state.systemConfig.systemConfig
		},
	},
	// 侦听器
	watch: {
		// 监听路由的变化
		$route: {
			handler(to) {
				this.$nextTick(() => {
					let webTitle = to.meta.title
					let { globalTitle } = this.$store.state.systemConfig.systemConfig
					document.title = `${webTitle} - ${globalTitle}` || globalTitle
				})
			},
			deep: true, // 深度监听
			immediate: true, // 不管数据是否发生变化都监听一次
		},
	},
	created() {
		// 登录接口
		// this.onLogin()
	},
	mounted() {
		this.getLayoutSystemConfig()
	},
	methods: {
		/**
		 * @description: 获取缓存中的布局配置
		 * @return {*}
		 * @author: cdl
		 */
		getLayoutSystemConfig() {
			if (Local.get('systemConfig')) {
				this.$store.dispatch('systemConfig/setSystemConfig', Local.get('systemConfig'))
				document.documentElement.style.cssText = Local.get('systemConfigStyle')
			} else {
				Local.set('systemConfig', this.$store.state.systemConfig.systemConfig)
			}
		},

		// 布局配置弹窗打开
		openSystemConfigDrawer() {
			this.bus.$on('openSystemConfig', () => {
				this.$refs.systemConfig.openDrawer()
			})
		},

		/**
		 * @description: 登录接口
		 * @return {*}
		 * @author: cdl
		 */
		onLogin() {
			let params = {
				loginName: 'admin_exexm',
				password: '123Qwe',
			}
			login(params).then((res) => {
				Local.set('token', res.USER_TOKEN)
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
