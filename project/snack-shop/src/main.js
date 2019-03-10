import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import Home from './page/home'
import Product from './page/Product'
import Seacher from './page/Seacher'
import Login from './page/Login'
import Signup from './page/Signup'
import My from './page/My'
import Pay from './page/Pay'
import Order from "./page/Order"
import Security from './page/Security'
import Setting from "./page/Setting"
import Amdin from "./page/admin/Amdin"
import AmdinUser from "./page/admin/User"
import AmdinPay from "./page/admin/Pay"
import AmdinProduct from "./page/admin/Product"
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(ElementUI)
const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/product/:id', component: Product
    },
    {
        path: "/seacher", component: Seacher
    },
    {
        path: '/login', component: Login
    }, {
        path: "/signup", component: Signup
    }, {
        path: '/my', component: My,
        children: [
            {path: "pay", component: Pay},
            {path: "order", component: Order},
            {path: 'security', component: Security},
            {path: 'setting', component: Setting}
        ]
    },
    {path:'/amdin',component:Amdin,
    children: [
        {
            path:"user",component:AmdinUser
        },
        {
            path:"pay",component:AmdinPay
        },
        {
            path:"product",component:AmdinProduct
        }
    ]}
]
const router = new Router({
    routes
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
