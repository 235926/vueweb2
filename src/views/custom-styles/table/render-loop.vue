<!--
 * @Description: table 循环渲染数据
 * @Author: cdl
 * @Date: 2022-06-19 16:01:22
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 17:35:57
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-alert type="success" :closable="false" class="mb20">
				<ol class="margin0">
					<li class="mb5">使用 table 表格循环渲染数据</li>
					<li>带多选和序号</li>
				</ol>
			</el-alert>

			<el-table :data="tableData" border>
				<el-table-column type="selection" align="center" width="55" />
				<el-table-column label="序号" type="index" align="center" width="50" />

				<!-- 设置表头数据源，并循环渲染出来，property 对应列内容的字段名 -->
				<el-table-column
					v-for="item in tableHeader"
					:key="item.key"
					:label="item.label"
					:property="item.key"
					:align="item.align"
					:width="item.width"
				>
					<template slot-scope="scope">
						{{ scope.row[scope.column.property] }}
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'render-loop',
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '股东名称', key: 'name', width: '', align: 'left' },
				{ label: '股东类型', key: 'type', width: '200px', align: 'center' },
				{ label: '工商口径持股比例', key: 'industrial', width: '200px', align: 'center' },
				{ label: '会计口径持股比例', key: 'accounting', width: '200px', align: 'center' },
			],
			tableData: [
				{
					name: '北京首创城市发展集团有限公司',
					type: '我方',
					industrial: '30%',
					accounting: '40',
				},
				{
					name: 'XXX有限公司',
					type: '其他股东',
					industrial: '12%',
					accounting: '32',
				},
				{
					name: 'XXX有限公司',
					type: '其他股东',
					industrial: '5%',
					accounting: '27',
				},
			],
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {
		// 监听路由的变化
		route: {
			handler(to) {
				console.log(to)
			},
			deep: true, // 深度监听
			immediate: true, // 不管数据是否发生变化都监听一次
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped></style>
