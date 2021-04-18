/**
 * Created by zane on 2021/4/17 下午9:23
 * @description .
 */
import component from './component'

const list = () => import(/* webpackChunkName: "order" */'views/order/list')
export default {
  name: 'order',
  path: 'order',
  component: component,
  meta: {
    title: '订单管理'
  },
  children: [
    {
      name: 'list',
      path: 'list',
      component: list,
      meta: {
        title: '订单列表'
      }
    }
  ]
}
