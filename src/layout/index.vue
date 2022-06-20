<template>
	<Defaults v-if="getSystemConfig.layout === 'defaults'" />
	<Classic v-else-if="getSystemConfig.layout === 'classic'" />
</template>

<script>
export default {
	name: 'layout',
	components: {
		Defaults: () => import('@/layout/layoutStyle/defaults.vue'), // 默认布局
		Classic: () => import('@/layout/layoutStyle/classic.vue'), // 经典布局
	},
	data() {
		return {}
	},
	computed: {
		// 获取布局配置信息
		getSystemConfig() {
			return this.$store.state.systemConfig.systemConfig
		},
	},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped></style>
