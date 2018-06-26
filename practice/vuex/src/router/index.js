import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import add1 from '@/components/add1'
import add2 from '@/components/add2'
import ajax from '@/components/ajax'
import element_ui from '@/components/element_ui'
import echarts from '@/components/echarts'
import axios from '@/components/axios'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/add1',
            name: 'add1',
            component: add1
        },
        {
            path: '/add2',
            name: 'add2',
            component: add2
        },
        {
            path: '/ajax',
            name: 'ajax',
            component: ajax
        },
        {
            path: '/element_ui',
            name: 'element_ui',
            component: element_ui
        },
        {
            path: '/echarts',
            name: 'echarts',
            component: echarts
        },
        {
            path: '/axios',
            name: 'axios',
            component: axios
        }
    ]
})