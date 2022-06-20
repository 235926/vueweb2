<template>
	<el-dialog
		:visible.sync="visible"
		:width="width + 'px'"
		:style="{ height: height + 'px' }"
		:destroy-on-close="true"
		:before-close="onCancel"
	>
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar class="scrollbar-x" :style="{ height: height + 'px' }">
			<div class="dialog-main" :style="{ height: height + 'px' }">
				<el-form ref="form" :model="form" label-width="120px">
					<el-form-item prop="region1" label="上级党组织">
						<el-select v-model="form.region1" placeholder="请选择">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="input" label="党组织名称">
						<el-input v-model="form.input" placeholder="请输入"></el-input>
					</el-form-item>
				</el-form>
			</div>
		</el-scrollbar>

		<span slot="footer" class="dialog-footer">
			<el-button type="primary" round @click="onSubmit">确认</el-button>
			<el-button round @click="onCancel">取消</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	// 组件名称
	name: 'partyInfoRightAdd',
	model: {
		// v-model 绑定的值
		prop: 'visible',
		event: 'close',
	},
	// 组件参数 接收来自父组件的数据
	props: {
		// v-model 绑定的值
		visible: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
		},
		width: {
			type: Number,
			default: 677,
		},
		height: {
			default: '',
		},
	},
	// 局部注册的组件
	components: {},
	// 组件状态值
	data() {
		return {
			form: {}, // 表单
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件方法
	methods: {
		/**
		 * @description: 关闭弹窗
		 * @return {*}
		 * @author: cdl
		 */
		onCancel() {
			this.$emit('update:visible', false)
			this.$refs.form.resetFields()
		},

		/**
		 * @description: 提交
		 * @return {*}
		 * @author: cdl
		 */
		onSubmit() {
			this.onCancel()
		},
	},
	/**
	 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	 */
	created() {},
}
</script>

<style lang="scss" scoped></style>
