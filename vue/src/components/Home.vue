<template>
	<ul v-for="item in items">
		<li>
			<h1>{{ item.fields.tag }}</h1>
			<div v-html ="item.fields.content" class="content"></div>
		</li>
	</ul>

	<!-- <button v-on:click="change">代码高亮</button> -->
</template>
<script>
	import '../assets/css/prism.css'

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
			}
		},
		// computed: {
		// 	content: function(){
				
		// 		var _content = this.items[0].fields.content;
		// 		var content = Prism.highlight(_content, Prism.languages.python);
		// 		return _content
		// 	}
		// }
	}
    
</script>

<style scoped>

</style>