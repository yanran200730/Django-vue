<template>
	<ul v-for="item in items" id="content">
		<li>
			<h1>{{ item.fields.title }}</h1>
			<div v-html ="item.fields.content" class="content"></div>
		</li>
	</ul>
</template>
<script>
	import '../assets/css/themes/prism.css'
    import Prism from "prismjs"

	export default {
		data: function(){
			return {
				apiUrl: "http://127.0.0.1:8000/api/article/",
				items: [],		
			}
		},

        created: function(){
            this.getData();
        },

		methods: {
			getData: function(){
				this.$http.get(this.apiUrl).then(function(response){
					var data = response.body;
                    this.items = data;
                    this.$nextTick(function(){
                        Prism.highlightAll();
                    })
				},function(response){
					console.log('error')
				});
            }
		},
	}
</script>

<style scoped>

</style>