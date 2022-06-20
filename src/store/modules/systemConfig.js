/*
 * @Description: 系统配置
 * @Author: cdl
 * @Date: 2022-06-09 16:55:16
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 19:06:50
 */
const useSystemConfig = {
	namespaced: true,
	state: {
		systemConfig: {
			/**
			 * @description 是否开启系统配置
			 * @type {boolean} true | false
			 */
			isSystemConfig: true,

			/**
			 * @description 网站主标题（菜单导航、浏览器当前网页标题）
			 */
			globalTitle: '管理系统',

			/**
			 * @description 主页面切换动画
			 * @type {string} 可选值"<slide-right|slide-left|opacitys>"，默认 slide-right
			 */
			animation: 'slide-right',

			/**
			 * @description 布局切换
			 * @type {string} 可选值"<defaults|classic|transverse|columns>"，默认 defaults
			 */
			layout: 'classic',
		},
	},
	mutations: {
		// 设置布局配置
		SET_SYSTEM_CONFIG(state, data) {
			state.systemConfig = data
		},
	},
	actions: {
		// 设置布局配置
		setSystemConfig({ commit }, data) {
			commit('SET_SYSTEM_CONFIG', data)
		},
	},
}

export default useSystemConfig
