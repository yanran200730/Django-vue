import Vue from 'vue'
import 'assets/css/base.css'
import 'assets/javascript/base.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


// vue 注册插件
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

// var vm = new Vue({
//     el : '#list',
//     methods: {
//         foo: function(){
//             alert(111)
//         }
//     }
// })