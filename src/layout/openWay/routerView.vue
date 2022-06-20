<!--
 * @Description: 路由出口
 * @Author: cdl
 * @Date: 2022-06-10 22:23:37
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-17 16:08:42
-->
<template>
	<transition :name="getSystemConfig.animation" mode="out-in">
		<router-view />
	</transition>
</template>

<script>
export default {
	// 组件名称
	name: 'openWayRouterView',
	// 计算属性
	computed: {
		// 获取系统配置
		getSystemConfig() {
			return this.$store.state.systemConfig.systemConfig
		},
	},
}
</script>

<style lang="scss" scoped></style>
