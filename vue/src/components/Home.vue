<template>
	<ul v-for="item in items" id="content">
		<li>
			<h1>{{ item.title }}</h1>
			<div v-html ="item.content" class="content"></div>
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
	#content {
		font-size: 14px;
		color: #34495e;
	}

	.content p {
		word-spacing: 0.05em;
		line-height: 1.6;
	}
</style>