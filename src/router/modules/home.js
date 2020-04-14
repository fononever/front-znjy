/*
 * @Author: tfq
 * @Date: 2019-06-25 15:21:39
 * @Last Modified by: tufengqun
 * @Last Modified time: 2020-04-14 22:21:07
 * @功能: 首页
 * @简介:
 * @RAP:
 */
const index = () => import('_VIEWS_/index' /* webpackChunkName: "index" */)
const aboutUs = () => import('_VIEWS_/aboutUs' /* webpackChunkName: "index" */)
const jyModule = () => import('_VIEWS_/jyModule' /* webpackChunkName: "index" */)
const project = () => import('_VIEWS_/project' /* webpackChunkName: "index" */)
const newMessage = () => import('_VIEWS_/newMessage' /* webpackChunkName: "index" */)
const recruit = () => import('_VIEWS_/recruit' /* webpackChunkName: "index" */)
const linkUs = () => import('_VIEWS_/linkUs' /* webpackChunkName: "index" */)

let routesConfig = [
  { path: '/', name: 'index', component: index, meta: { title: '首页' } },
  { path: '/about', name: 'aboutUs', component: aboutUs, meta: { title: '关于我们' } },
  { path: '/jyModule', name: 'jyModule', component: jyModule, meta: { title: '经营模块' } },
  { path: '/project', name: 'project', component: project, meta: { title: '工程案例' } },
  { path: '/newMessage', name: 'newMessage', component: newMessage, meta: { title: '新闻动态' } },
  { path: '/recruit', name: 'recruit', component: recruit, meta: { title: '招贤纳士' } },
  { path: '/linkUs', name: 'linkUs', component: linkUs, meta: { title: '联系我们' } },
]

export default routesConfig
