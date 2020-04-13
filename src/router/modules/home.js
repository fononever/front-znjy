/*
 * @Author: tfq
 * @Date: 2019-06-25 15:21:39
 * @Last Modified by: tfq
 * @Last Modified time: 2019-06-25 15:32:35
 * @功能: 首页
 * @简介:
 * @RAP:
 */
const index = () => import('_VIEWS_/index' /* webpackChunkName: "index" */)

let routesConfig = [{ path: '/', name: 'index', component: index, meta: { title: '首页' } }]

export default routesConfig
