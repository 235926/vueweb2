<!--
 * @Description: 打开系统配置
 * @Author: cdl
 * @Date: 2022-06-16 16:45:39
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 16:53:30
-->
<template>
	<div class="svg-icon-container" @click="onLayoutSettingClick">
		<SvgIcon name="settings" />
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'settings',
	// 局部注册的组件
	components: {},
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
	/**
	 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	 */
	created() {},
	/**
	 * 组件挂载后，此方法执行后，页面显示
	 */
	mounted() {},
	// 组件方法
	methods: {
		/**
		 * @description: 打开布局设置抽屉
		 * @return {*}
		 * @author: cdl
		 */
		onLayoutSettingClick() {
			this.bus.$emit('openSystemConfig')
		},
	},
}
</script>

<style lang="scss" scoped></style>
