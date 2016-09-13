<template>
	<ul v-for="item in items">
		<li>
			<h1>{{ item.fields.tag }}</h1>
			<div v-html ="item.fields.content"></div>
		</li>
	</ul>
	<button v-on:click="change">代码高亮</button>
</template>
<script>
	import marked from 'marked'
	import highlight from 'highlight.js'
	import '../assets/css/solarized-light.css'

	marked.setOptions({
		highlight: function(code) {
			return require('highlight.js').highlightAuto(code).value;
		}
	})

	export default {
		data() {
			return {
				apiUrl: "http://127.0.0.1:8000/api/article/",
				items: []				
			}
		},

		ready: function(){
			this.getData();
		},
		methods: {
			getData: function(){
				this.$http.get(this.apiUrl).then(function(data){
					var response = data.body;
					this.$set('items',response);
					
					
				}),function(response){
					console.log('error')
				}
			},
			change: function(){
				console.log(this.items[0])
				marked(this.items[0].fields.content)
			}
		},
		computed: {
			// content: function(){
			// 	let content = this.items[0].fields.content;
			// 	console.log(content)
			// 	// marked(_content,function(error,content){
			// 	// 	if(!error){
			// 	// 		_content = content;
			// 	// 	}
			// 	// })
			// 	// return _content
			// 	marked(content)
			// 	return this.items
			// }
		}
	}
</script>