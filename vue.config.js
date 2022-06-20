/*
 * @Description: 配置文件
 * @Author: cdl
 * @Date: 2022-06-08 14:44:01
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 20:05:39
 */
const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === 'production' ? './' : './',
	lintOnSave: false, // https://cli.vuejs.org/zh/config/#lintonsave
	transpileDependencies: true, // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件
	productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
	devServer: {
		port: process.env.VUE_APP_PORT, // 端口号，如果端口号被占用，会自动提升1
		host: '0.0.0.0', // 真机模拟，使用, 主机名， 127.0.0.1，  真机 0.0.0.0
		https: false, // 协议 https： {type: Booleam}
		open: false, // 启动服务时自动打开浏览器访问
		proxy: {
			// 开发环境代理配置
			'/api': {
				target: process.env.VUE_APP_SERVICE_URL,
				changeOrigin: true, // 开启代理服务器，
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: '',
				},
			},
		},
	},
	chainWebpack: (config) => {
		// 设置 svg-sprite-loader
		config.module.rule('svg').exclude.add(resolve('src/icons')).end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			})
			.end()
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.mjs$/,
					include: /node_modules/,
					type: 'javascript/auto',
				},
			],
		},
		output: {
			filename: `js/[name].${new Date().getTime()}.js`,
			chunkFilename: `js/[name].${new Date().getTime()}.js`,
		},
	},
	css: {
		extract: {
			filename: `css/[name].${new Date().getTime()}.css`,
			chunkFilename: `css/[name].${new Date().getTime()}.css`,
		},
	},
})
