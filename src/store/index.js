/*
 * @Description: vuex
 * @Author: cdl
 * @Date: 2022-06-09 16:54:40
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-09 16:54:46
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let moduleFn = require.context('./modules', false, /\.js$/)
let modules = moduleFn.keys().reduce((p, c) => {
	let mod = moduleFn(c).default
	mod = { ...mod, namespaced: true }
	let modName = c.match(/\.\/(\w+)\.js$/)[1]
	p[modName] = mod
	return p
}, {})

export default new Vuex.Store({ modules })
