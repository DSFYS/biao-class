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
import Setting from './page/Setting'

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
        path: '/setting', component: Setting
    }
]
const router = new Router({
    routes
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
