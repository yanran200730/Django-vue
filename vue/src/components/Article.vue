<template>
    <div class="article-content">
	   <h1>{{ article.title }}</h1>
	   <p>{{{ article.content }}}</p>
       <Loading v-show="loading"></Loading>
       <Dialog v-show="showDialog" v-bind:error-message="errorCode"></Dialog>
    </div>
</template>


<script type="text/babel">
	import '../assets/css/themes/prism.css'
    import Prism from "prismjs"
    import Loading from './Loading.vue'
    import Dialog from './Dialog.vue'

    export default {
        components: {
            Loading,
            Dialog
        },

    	data: function(){
    		return {
    			apiUrl: "http://192.168.1.116:8000/api/blog/",
    			article: "",
                loading: false,
                showDialog: false,
                errorCode: "网络问题！请稍后再试！！！"
    		}
    	},

        ready: function(){
            this.getData();
        },

		methods: {
			getData: function(foo){
				this.$http.get(this.apiUrl + this.$route.params.id).then(function(response){
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
    .article-content {
        position: relative;
    	margin-top: 30px;
    	font-size: 14px;
    }

</style>