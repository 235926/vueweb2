<!--
 * @Description: 主体页面
 * @Author: cdl
 * @Date: 2022-06-09 14:15:41
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-11 01:16:24
-->
<template>
	<el-main class="layout-main">
		<el-scrollbar>
			<div class="routerView-container">
				<layoutRouterView />
			</div>
		</el-scrollbar>
	</el-main>
</template>

<script>
export default {
	name: 'app',
	components: {
		layoutRouterView: () => import('@/layout/openWay/routerView.vue'), // 路由出口
	},
	data() {
		return {}
	},
	computed: {},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
.routerView-container {
	padding: 20px;
	min-height: calc(100vh - 65px);
	transition: padding 0.3s ease-in-out;
}
</style>
