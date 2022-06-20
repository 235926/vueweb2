<!--
 * @Description: svg 图标展示
 * @Author: cdl
 * @Date: 2022-06-14 20:40:28
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 19:39:48
-->
<template>
	<div class="icons-container">
		<el-tabs type="border-card">
			<el-tab-pane label="Icons">
				<div class="grid">
					<div v-for="item of svgIcons" :key="item" @click="handleClipboard(generateIconCode(item), $event)">
						<div class="icon-item">
							<SvgIcon :name="item" class="disabled font30" />
							<span>{{ item }}</span>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="Element-UI Icons">
				<div class="grid">
					<div
						v-for="item of elementIcons"
						:key="item"
						@click="handleClipboard(generateElementIconCode(item), $event)"
					>
						<div class="icon-item">
							<i :class="'el-icon-' + item" class="font30" />
							<span>{{ item }}</span>
						</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import clipboard from '@/plugin/clipboard'
import svgIcons from './svg-icons'
import elementIcons from './element-icons'

export default {
	data() {
		return {
			svgIcons,
			elementIcons,
		}
	},
	methods: {
		generateIconCode(symbol) {
			return `<SvgIcon name="${symbol}" />`
		},
		generateElementIconCode(symbol) {
			return `<i class="el-icon-${symbol}" />`
		},
		handleClipboard(text, event) {
			clipboard(text, event)
		},
	},
}
</script>

<style lang="scss" scoped>
.icons-container {
	overflow: hidden;

	.grid {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	}

	.icon-item {
		margin: 20px;
		height: 85px;
		text-align: center;
		width: 100px;
		float: left;
		color: #24292e;
		cursor: pointer;

		&:hover {
			color: var(--rh-color-primary);
		}
	}

	span {
		display: block;
		font-size: 16px;
		margin-top: 10px;
	}

	.disabled {
		pointer-events: none;
	}
}
</style>
