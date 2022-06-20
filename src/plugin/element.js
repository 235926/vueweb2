/*
 * @Description:
 * @Author: cdl
 * @Date: 2022-06-18 00:04:49
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 19:46:26
 */
import {
	Button,
	Input,
	Select,
	Form,
	FormItem,
	Breadcrumb,
	BreadcrumbItem,
	Option,
	OptionGroup,
	Scrollbar,
	Dialog,
	Table,
	TableColumn,
	Tree,
	Tooltip,
	Divider,
	Menu,
	Submenu,
	MenuItem,
	Container,
	Header,
	Aside,
	Main,
	Footer,
	Image,
	Drawer,
	Avatar,
	Tabs,
	TabPane,
	Checkbox,
	Row,
	Col,
	Alert,
} from 'element-ui'

const element = {
	install: function (Vue) {
		Vue.use(Alert)
		Vue.use(Row)
		Vue.use(Col)
		Vue.use(Checkbox)
		Vue.use(Tabs)
		Vue.use(TabPane)
		Vue.use(Avatar)
		Vue.use(Drawer)
		Vue.use(Image)
		Vue.use(Container)
		Vue.use(Header)
		Vue.use(Aside)
		Vue.use(Main)
		Vue.use(Footer)
		Vue.use(Menu)
		Vue.use(Submenu)
		Vue.use(MenuItem)
		Vue.use(Divider)
		Vue.use(Tooltip)
		Vue.use(Tree)
		Vue.use(Table)
		Vue.use(TableColumn)
		Vue.use(Dialog)
		Vue.use(Scrollbar)
		Vue.use(Button)
		Vue.use(Input)
		Vue.use(Select)
		Vue.use(Form)
		Vue.use(FormItem)
		Vue.use(Breadcrumb)
		Vue.use(BreadcrumbItem)
		Vue.use(Option)
		Vue.use(OptionGroup)
	},
}

export default element
