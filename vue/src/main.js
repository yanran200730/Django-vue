import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'

import 'assets/css/base.css'
import 'assets/javascript/base.js'
import 'assets/font-awesome-4.6.3/css/font-awesome.min.css'



// vue 注册插件
Vue.use(VueTouch)
Vue.use(VueResource)
Vue.use(VueRouter)

var foo = Vue.extend({
    template: '<p>this is foo!</p>'
})

var bar = Vue.extend({
    template: '<p>this is bar!</p>'
})

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/foo':{
        component: foo
    },
    '/bar': {
        component: bar
    }
})

router.start(App,'#app')
