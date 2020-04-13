/*
 * @Author: tfq
 * @Date: 2018-08-13 15:45:36
 * @Last Modified by: tufengqun
 * @Last Modified time: 2020-02-26 20:23:55
 * @功能:
 * @简介: 其他相关路由
 * @RAP:
 */
const notFound = () => import('_VIEWS_/other/notfound' /* webpackChunkName: "notFound" */) // prettier-ignore

let routesConfig = [{ path: '*', name: 'notFound', component: notFound, meta: { title: '404' } }]

export default routesConfig
