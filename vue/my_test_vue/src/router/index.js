import Vue from 'vue'
import Router from 'vue-router'

import ifElse from '@/components/ifElse.vue'
import component from '@/components/component.vue'
// import register from '@/components/register.vue'
import parent from '@/components/parent.vue'
import redirect from '@/components/redirect.vue'
// import compfn from '@/components/compFn.vue'
import child1 from '@/components/child_page/child1.vue'
import child2 from '@/components/child_page/child2.vue'
import child3 from '@/components/child_page/child3.vue'

let register = resolve => require.ensure(['@/components/register'], () => resolve(require('@/components/register')))


// let compfn = resolve => require.ensure(['@/components/compFn'], () => resolve(require('@/components/compFn')))
let compfn = resolve => require(['@/components/compFn'], resolve)

function aa() {

}
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'ifElse',
        component: ifElse
    }, {
        path: '/component/:id',
        name: 'component',
        component: component,
        // before(to, from) {
        //     console.log(to)
        // }
    }, {
        path: '/register',
        name: 'register',
        component: register,


    }, {
        path: '/parent',
        name: 'parent',
        component: parent,
        children: [{
            path: 'child1',
            name: 'child1',
            components: {
                default: child1,
                a: {
                    template: "<div>这里是多组件a</div>"
                },
                b: {
                    template: "<div>这里是多组件b</div>"
                }
            },
        }, {
            path: 'child2',
            name: 'child2',
            component: child2,
        }, {
            path: 'child3',
            name: 'child3',
            component: child3,
        }]
    }, {
        path: '/redirect',
        name: 'redirect',
        component: redirect,
        // redirect: "/parent",
        alias: "/aa",
        // beforeEnter(to, from, next) {
        //     console.log(to)
        //     var state = true
        //     if (state) {
        //         next({ path: "/parent" })
        //         state = false
        //     } else {
        //         next()
        //     }
        // }
    }, {
        path: '/compfn',
        name: 'compfn',
        component: compfn,
        alias: "/bb",
    }]
})