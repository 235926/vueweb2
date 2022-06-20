<!--
 * @Description: tree-line 模板
 * @Author: cdl
 * @Date: 2022-06-15 10:29:51
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-15 13:42:37
-->
<template>
	<div class="search mb20">
		<el-input v-model="filterText" placeholder="请输入关键词" />
		<el-divider direction="vertical" />
		<span class="btn">搜索</span>
	</div>

	<el-tree
		ref="tree"
		:data="data"
		:props="defaultProps"
		:indent="30"
		:filter-node-method="filterNode"
	>
		<template v-slot:default="{ node }">
			<element-tree-line
				class="custom-tree-node"
				:node="node"
				:indent="30"
				:showLabelLine="false"
			>
				<template v-slot:node-label>
					<SvgIcon
						v-if="node.expanded !== true && node.isLeaf === false"
						name="folder"
						class="folder"
					/>
					<SvgIcon
						v-if="node.expanded === true && node.isLeaf === false"
						name="folder-open"
						class="folder-open"
					/>
					<el-tooltip :content="node.label" :disabled="isShowTooltip" placement="right">
						<span
							class="label"
							@mouseenter="onMouseenter($event)"
							@mouseleave="isShowTooltip = false"
							>{{ node.label }}</span
						>
					</el-tooltip>
				</template>
			</element-tree-line>
		</template>
	</el-tree>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			filterText: '', // 搜索
			data: [
				{
					id: 1,
					label: '一级 1',
					children: [
						{
							id: 4,
							label: '二级 1-1',
							children: [
								{
									id: 9,
									label: '三级 1-1-1',
								},
								{
									id: 10,
									label: '三级 1-1-2',
								},
							],
						},
					],
				},
				{
					id: 2,
					label: '一级 2',
					children: [
						{
							id: 5,
							label: '二级 2-1',
						},
						{
							id: 6,
							label: '二级 2-2',
						},
					],
				},
				{
					id: 3,
					label: '一级 3',
					children: [
						{
							id: 7,
							label: '二级 3-1',
						},
						{
							id: 8,
							label: '二级 3-2',
						},
					],
				},
			],
			defaultProps: {
				children: 'children',
				label: 'label',
			},
			isShowTooltip: false, // el-tooltip
		}
	},
	watch: {
		filterText(val) {
			this.$refs.tree.filter(val)
		},
	},
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: 搜索过滤
		 * @param {*} value
		 * @param {*} data
		 * @return {*}
		 * @author: cdl
		 */
		filterNode(value, data) {
			if (!value) return true
			return data.label.indexOf(value) !== -1
		},

		/**
		 * @description: 鼠标移入
		 * @param {*} event
		 * @return {*}
		 * @author: cdl
		 */
		onMouseenter(event) {
			this.isShowTooltip = event.currentTarget.scrollWidth <= event.currentTarget.clientWidth
		},
	},
}
</script>

<style lang="scss" scoped></style>
