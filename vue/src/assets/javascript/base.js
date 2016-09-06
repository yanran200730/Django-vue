import Vue from 'vue'

var vm = new Vue({
    el: '#nav-bar',
    data: {
        display: false,
    },
    methods: {
        slideToggle: function(){
            this.display = !this.display;
        }
    }
})
