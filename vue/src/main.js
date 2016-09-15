import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueTouch from 'vue-touch';


// vue 注册插件
Vue.use(VueTouch)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    history: true,
    hashbang: false
});

router.map({
    '/home':{
        component: function(resolve) {
            require(['./components/Home'], resolve)
        }
    },
})

router.redirect({
  '*': '/home'
})

router.start(App,'#app')



