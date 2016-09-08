import Vue from 'vue'
import VueTouch from 'vue-touch'

Vue.use(VueTouch)
var vm = new Vue({
    el: '#myapp',
    data: {
        display: false,
        search: false
    },
    methods: {
        slideToggle: function(event){
            this.display = !this.display;
            event.preventDefault();
        },
        slideClose: function(event){
            this.display = false;
            event.preventDefault();
        },
        searchToggle: function(event){
            //防止wrap层未消失时多次点击
            if (event.target.tagName === "DIV"){
                this.search = false;               
            }else {
                this.search = !this.search;
            }
            event.preventDefault();
        }
    }
})
