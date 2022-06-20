<!--
 * @Description: main 页面头部
 * @Author: cdl
 * @Date: 2022-06-14 19:03:23
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 15:31:32
-->
<template>
	<div class="page-header">
		<div class="title">{{ $route.meta.title }}</div>

		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item v-for="item in matched" :key="item.name" :to="{ path: item.path }">
				<SvgIcon v-if="item.meta.icon && item.name === '/'" :name="item.meta.icon" class="mr5" />
				<span class="name">{{ item.meta.title }}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {
	name: 'pageHeader',
	// 计算属性
	computed: {
		matched() {
			if (this.$route.path === '/home') {
				return this.$route.matched.filter((item) => {
					return item.name !== '/'
				})
			} else {
				return this.$route.matched
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.page-header ::v-deep {
	height: 50px;
	padding: 0 20px;
	background-color: #fafafa;
	border-bottom: 1px solid var(--rh-border-color-light);
	border-radius: 4px 4px 0px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.title {
		font-weight: 600;
		color: var(--rh-color-primary);
	}

	.el-breadcrumb {
		.svg-icon {
			color: var(--rh-color-primary);
			margin-right: 5px;
		}
	}
}
</style>
