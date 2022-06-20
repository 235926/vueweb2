<!--
 * @Description: 首页
 * @Author: cdl
 * @Date: 2022-06-16 19:04:36
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 19:12:03
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">home</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'home',
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped>
.content {
	height: 2000px;
	overflow: hidden;
}
</style>
