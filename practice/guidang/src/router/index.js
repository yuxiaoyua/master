import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/User/Login'
import Home from '@/components/Home'
import Role from '@/components/Role/Role'
import Order from '@/components/Order/Order'
import Account from '@/components/Account/Account'
import main from '@/components/computed/main'
import Register from '@/components/User/Register'
import { SETTITLE } from '../store/module_types'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'role',
          name: 'Role',
          component: Role,
          meta: {
            title: '用户列表'
          }
        },
        {
          path: 'order',
          name: 'Order',
          component: Order,
          meta: {
            title: '订单列表'
          }
        },
        {
          path: 'account',
          name: 'Account',
          component: Account,
          meta: {
            title: '结算列表'
          }
        }
      ]
    }
  ]
})
router.afterEach(route => {
  setTimeout(() => {
    route.meta && router.app.$store.commit(SETTITLE, route.meta.title)
  }, 0)
})
export default router

