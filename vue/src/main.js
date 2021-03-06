import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueTouch from 'vue-touch';


// vue 注册插件
Vue.use(VueTouch)
Vue.use(VueResource)
Vue.use(VueRouter)

//vue 发送ajax请求时,全局加载动画
Vue.http.interceptors.push(function(request,next){
    this.loading = true;

    next(function(response){
        if (!response.ok) {
            // this.errorCode = response.status;
            this.showDialog = true;
        }
        this.loading = false;
        return response
    })
})

//自定义指令
Vue.directive('print',{
  bind:function(){
    console.log('111111')
  },
  update: function(value){
    value();
  }
})

const router = new VueRouter({
    history: true,
    hashbang: false
});

router.map({
    '/home':{
        component: function(resolve) {
            require(['./components/Home'], resolve)
        },
    },
    '/article/:id': {
        name: 'id',
       	component: function(resolve){
       		require(['./components/Article'], resolve)
       	}
   	}
})

router.redirect({ 
  '*': '/home'
})

//过滤,从Django获取的是中国时区的时间,因此在用js格式化的时候得减8个小时
Vue.filter('datetime',function(value) {
  	const date = new Date(new Date(value).valueOf() - 8*60*60*1000);
  	return date.toLocaleDateString().replace(/\//g," / ")
});

router.start(App,'#app')



