<!--
 * @Description: table 模板
 * @Author: cdl
 * @Date: 2022-06-15 11:47:25
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-15 13:42:30
-->
<template>
	<el-table
		ref="table"
		:data="tableData"
		:border="true"
		:header-cell-style="{ 'text-align': 'center' }"
		:cell-style="{ 'text-align': 'center' }"
		@selection-change="handleSelectionChange"
		@row-click="handleRowClick"
	>
		<el-table-column type="selection" width="55" />
		<el-table-column label="序号" type="index" width="55" />
		<el-table-column prop="name" label="企业信息内容" />
		<el-table-column prop="isEdit" label="可编辑" width="180">
			<template slot-scope="scope">
				<el-checkbox v-model="scope.row.isEdit" label="可编辑" />
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			tableData: [
				{
					name: '公司名称',
					isEdit: false,
				},
				{
					name: '工商成立日期',
					isEdit: false,
				},
				{
					name: '经营范围',
					isEdit: false,
				},
				{
					name: '法定代表人/分支机构负责人',
					isEdit: false,
				},
			],
			options: [
				{
					value: 'Option1',
					label: '总部投资管理部管理员1',
				},
				{
					value: 'Option2',
					label: '总部投资管理部管理员2',
				},
			],
		}
	},
	computed: {},
	created() {},
	methods: {

		/**
		 * @description: 选中的数据
		 * @return {*}
		 * @author: cdl
		 */
		handleSelectionChange(val) {
			// console.log(val)
		},

		/**
		 * @description: table 当某一行被点击时会触发该事件
		 * @param {*} row
		 * @return {*}
		 * @author: cdl
		 */
		handleRowClick(row) {
			console.log(row)
		},
	},
}
</script>

<style lang="scss" scoped></style>
