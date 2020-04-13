/*
 * @Author: tfq
 * @Date: 2018-07-24 14:50:11
 * @Last Modified by: tfqzhaopeng
 * @Last Modified time: 2020-04-13 21:39:36
 * @功能:
 * @简介: 路由配置
 * @RAP:
 */

import otherRoutes from './modules/other'
import homeRoutes from './modules/home'

export let routesConfig = [...homeRoutes, ...otherRoutes]
