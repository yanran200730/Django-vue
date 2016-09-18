<template>
    <div class="wrap-article">
    	<ul v-for="article in article_list" id="content">
    		<li class="article">
    			<h1><a v-link="{ name: 'id', params: { id: article.id } }">{{ article.title }}</a></h1>
    			<span>作者：{{ article.author }}  -  {{ article.created | datetime }}</span>
    			<p><a v-link="{ name: 'id', params: { id: article.id } }">{{ article.abstract }}</a></p>
    			<div class="tags">
    				<a href="javascript:;" class="tag">{{ article.tag }}</a>
    				<a class="click"><i class="fa fa-eye fa-1x"></i>&nbsp;&nbsp;浏览&nbsp; {{ article.times }}</a>
    			</div>
    		</li>
    	</ul>
    </div>
</template>
<script type="text/babel">
	export default {
		data: function(){
			return {
				apiUrl: "http://192.168.1.115:8000/api/article_list",
				article_list: [],		
			}
		},

        created: function(){
            this.getData();
        },

		methods: {
			getData: function(){
				this.$http.get(this.apiUrl).then(function(response){
					const data = response.body;
                    this.article_list = data;
				},function(response){
					console.log('error')
				});
            },
		},
	}
</script>

<style scoped>
	.wrap-article {
		margin-top: 30px;
		font-size: 14px;
		color: #1F1F1F;
	}

	.content p {
		word-spacing: 0.05em;
		line-height: 1.6;
	}

	.article {
		border-bottom: 1px solid #E8E4E4;
		padding: 0 10px 10px 0;
        -moz-transition: all 0.5s ease-in-out;
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
		background-color: #fff;
	}

	.article > h1 {
		font-size: 1.5em;
		color: #4e4d4d;
		margin: 0;
	}

	.article > span {
		display: block;
		font-size: 13px;
		color: #ccc;
		margin: 12px 0;
	}

	.article > p {
		font-size: 1em;
		line-height: 1.7;
		margin: 15px 0 0 0;
		color: #565555;
	}

	.tags {
		margin: 10px 0 15px 0;
	}
	
	.tag {
		border: 1px solid #bfbfbf;
		border-radius: 4px;
		font-size: 13px;
		display: inline-block;
		padding: 5px 10px;
		color: #2D2C2C;
	}
	.click {
		float: right;
		margin: 5px 15px 0 0;
		font-size: 14px;
		color: #2D2C2C;
	}

	.click > i {
		font-size: 16px;
		color: #2D2C2C;
	}

	.tag:hover {
		background-color: #cbc8c8;
		color: #fff;
	}

    .article > h1:hover ,.article >p:hover {
        text-decoration: underline;
    }

	@media screen and (max-width: 700px){
		
		.wrap-article {
			font-size: 12px !important;
			margin-top: 10px !important;
		}

		.article {
			padding: 0px;
		}

		.article > span {
			margin: 10px 0;
		}

		.article > p {
			margin: 0px;
		}
	}

</style>