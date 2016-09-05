import Vue from 'vue'
// import App from './App'
// import Hello from './components/Hello'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

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