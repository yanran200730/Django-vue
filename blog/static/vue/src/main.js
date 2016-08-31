import Vue from 'vue'
import myapp from './myapp'
// import App from './App'


/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

var vue = new Vue({
	el: 'body',
	components: { myapp }
})

console.log(vue)