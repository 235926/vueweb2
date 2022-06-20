<!--
 * @Description: 测试页面
 * @Author: cdl
 * @Date: 2022-06-15 18:11:26
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 19:41:45
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'test',
	// 组件参数 接收来自父组件的数据
	props: {},
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	// 组件状态值
	data() {
		return {}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件方法
	methods: {},
	/**
	 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	 */
	created() {},
}
</script>

<style lang="scss" scoped></style>
