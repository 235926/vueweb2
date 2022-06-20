/*
 * @Description: 接口文档
 * @Author: cdl
 * @Date: 2022-06-08 15:13:35
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-10 14:36:04
 */
import request from '@/plugin/axios.js' // axios

/**
 * @description: 用户登录
 * @param {*} data
 * @return {*}
 * @author: cdl
 */
export const login = (data) => {
	return request({
		url: '/SY_ORG_LOGIN.login.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 获取菜单列表
 * @param {*} data
 * @return {*}
 * @author: cdl
 */
export const getSingleMenuList = (data) => {
	return request({
		url: '/SY_COMM_MENU.getSingleMenuList.do',
		method: 'get',
		params: data,
	})
}
