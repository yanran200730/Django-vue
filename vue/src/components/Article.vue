<template>
	<h1>{{ article.title }}</h1>
	<div class="blog">{{{ article.content }}}</div>
</template>


<script type="text/babel">
	import '../assets/css/themes/prism.css'
    import Prism from "prismjs"

    export default {
    	data: function(){
    		return {
    			apiUrl: "http://127.0.0.1:8000/api/blog/",
    			article: ""
    		}
    	},

        created: function(){
            this.getData();
        },

		methods: {
			getData: function(){
				this.$http.get(this.apiUrl + this.$route.params.id + '/').then(function(response){
					const data = response.body;
                    this.article = data;
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