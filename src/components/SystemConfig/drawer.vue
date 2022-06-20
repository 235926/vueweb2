<!--
 * @Description: 全局系统配置
 * @Author: cdl
 * @Date: 2022-06-15 18:13:37
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 19:19:13
-->
<template>
	<div>
		<el-drawer
			title="我是标题"
			:visible.sync="drawer"
			:destroy-on-close="true"
			:direction="direction"
		>
			<el-scrollbar>
				<!-- 界面设置 -->
				<el-divider content-position="left">界面设置</el-divider>
				<div style="height: 1000px"></div>
			</el-scrollbar>
		</el-drawer>
	</div>
</template>

<script>
import { Local } from '@/utils/storage.js' // 页面存储
export default {
	// 组件名称
	name: 'systemSettings',
	// 组件状态值
	data() {
		return {
			drawer: false,
			direction: 'rtl',
		}
	},
	// 计算属性
	computed: {
		// 获取系统配置信息
		getSystemConfig() {
			return this.$store.state.systemConfig.systemConfig
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {
		this.bus.$on('openSystemConfig', () => {
			this.openDrawer()
		})
	},
	// 组件方法
	methods: {
		/**
		 * @description: 存储布局配置
		 * @return {*}
		 * @author: cdl
		 */
		setLocalSystemConfig() {
			Local.remove('systemConfig')
			Local.set('systemConfig', this.$store.state.systemConfig.systemConfig)
			this.setLocalSystemConfigStyle()
		},

		/**
		 * @description: 存储布局配置全局主题样式（html根标签）
		 * @return {*}
		 * @author: cdl
		 */
		setLocalSystemConfigStyle() {
			Local.set('systemConfigStyle', document.documentElement.style.cssText)
		},

		/**
		 * @description: 布局配置弹窗打开
		 * @return {*}
		 * @author: cdl
		 */
		openDrawer() {
			this.drawer = true
		},
	},
	// 页面销毁
	destroyed() {
		this.bus.$off('openSystemConfig')
	},
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
	height: calc(100vh - 50px);
	padding: 0 20px;

	.main {
		height: 1000px;
		overflow: hidden;
	}
}
</style>
