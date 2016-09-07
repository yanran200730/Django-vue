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

        searchToggle: function(event){
            this.search = !this.search;
            event.preventDefault();

        }
    }
})
