import Vue from 'vue'
import Router from 'vue-router'
import manag from './views/manag.vue'
import article from './views/article.vue'
import post from './views/post.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/manag",
            name: "manag",
            component: manag
        }, {
            path: "/article",
            name: "article",
            component: article
        }, {
            path: "/post/:id",
            component:post
        }
    ]
})
