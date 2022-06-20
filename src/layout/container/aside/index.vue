<!--
 * @Description: 侧边栏页面
 * @Author: cdl
 * @Date: 2022-06-09 14:16:31
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-17 15:53:02
-->
<template>
	<el-aside class="layout-aside">
		<el-scrollbar>
			<el-menu router :default-active="activeMenu" class="menu-style-one">
				<template v-for="val in menuList">
					<el-submenu
						:index="val.path"
						v-if="!val.hidden && val.children && val.children.length > 0"
						:key="val.path"
					>
						<template slot="title">
							<SvgIcon :name="val.meta.icon" />
							<span class="title ml15">{{ val.meta.title }}</span>
						</template>
						<SubItem :child="val.children" />
					</el-submenu>

					<template v-else-if="!val.hidden">
						<el-menu-item :index="val.path" :key="val.path">
							<template slot="title">
								<SvgIcon :name="val.meta.icon" />
								<span class="title ml15">{{ val.meta.title }}</span>
								<i class="el-icon-arrow-right flex-center"></i>
							</template>
						</el-menu-item>
					</template>
				</template>
			</el-menu>
		</el-scrollbar>
	</el-aside>
</template>

<script>
export default {
	name: 'layoutAside',
	components: {
		SubItem: () => import('./subItem.vue'), // 菜单列表子级
	},
	data() {
		return {}
	},
	computed: {
		menuList() {
			return this.$router.options.routes[0].children
		},
		// el-menu 默认高亮
		activeMenu() {
			const route = this.$route
			const { meta, path } = route
			// 如果设置了path，侧边栏将突出显示您设置的路径
			if (meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		},
	},
	watch: {},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped></style>
