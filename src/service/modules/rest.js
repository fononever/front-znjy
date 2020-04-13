/*
 * @Author: tfq
 * @Date: 2018-07-20 16:15:17
 * @Last Modified by: tfq
 * @Last Modified time: 2020-04-13 22:12:48
 * @功能:
 * @简介:
 * @RAP:
 */

import hosts from '../hosts.json'
import Service from '../public'

export const restSer = new Service({ host: hosts.rest })

// 查询用户erpId
restSer.add('getErpIdBySellerId', 'jsonp','/sync/server/open/get-erpId-by-sellerId') // prettier-ignore
