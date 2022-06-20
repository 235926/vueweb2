/*
 * @Description: 剪切板
 * @Author: cdl
 * @Date: 2022-06-14 20:58:11
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 21:03:52
 */
import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {
	Vue.prototype.$message({
		message: '复制成功',
		type: 'success',
		duration: 1500,
	})
}

function clipboardError() {
	Vue.prototype.$message({
		message: '复制失败',
		type: 'error',
	})
}

export default function handleClipboard(text, event) {
	const clipboard = new Clipboard(event.target, {
		text: () => text,
	})
	clipboard.on('success', () => {
		clipboardSuccess()
		clipboard.destroy()
	})
	clipboard.on('error', () => {
		clipboardError()
		clipboard.destroy()
	})
	clipboard.onClick(event)
}
