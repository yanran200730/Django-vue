<template>
    <div class="wrap-article">
    	<ul v-for="article in article_list" id="content">
    		<li class="article">
    			<h1><a v-link="{ name: 'id', params: { id: article.id } }" title="{{ article.title }}">{{ article.title }}</a></h1>
    			<span>作者：{{ article.author }}  -  {{ article.created | datetime }}</span>
    			<p><a v-link="{ name: 'id', params: { id: article.id } }" title="{{ article.title }}">{{ article.abstract }}</a></p>
    			<div class="tags">
    				<a href="javascript:;" class="tag">{{ article.tag }}</a>
    				<a class="click"><i class="fa fa-eye fa-1x"></i>&nbsp;&nbsp;浏览&nbsp; {{ article.times }}</a>
    			</div>
    		</li>
    	</ul>
        <!-- 首页用加载动画貌似不咋好呃！！！ -->
        <!-- <Loading v-show="loading"></Loading> -->
        <Dialog v-show="showDialog" v-bind:message="errorCode"></Dialog>
    </div>

</template>
<script type="text/babel">
    import Loading from './Loading.vue'
    import Dialog from './Dialog.vue'

	export default {
        components: {
            Loading,
            Dialog
        },
		data: function(){
			return {
				apiUrl: "http://192.168.1.115:8000/api/article_list",
				article_list: [],
                loading: false,
                showDialog: false,
                errorCode: "网络问题！请稍后再试！！！"		
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
        position: relative;
		margin-top: 30px;
		font-size: 14px;
		color: #1F1F1F;
	}

    #content {
        margin-bottom: 25px;
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
		font-size: 10px;
		color: #ccc;
		margin: 12px 0;
	}

	.article > p {
		font-size: 1em;
		line-height: 1.7;
		margin: 15px 0 0 0;
	}

    .article > p > a{
    	display: block;
        color: #939292;
    }

	.tags {
		margin: 25px 0 5px 0;
        font-size: 12px;
	}
	
	.tag {
		border: 1px solid #bfbfbf;
		border-radius: 4px;
		display: inline-block;
		padding: 5px 10px;
        color: #B4B3B3;
	}

	.click {
		float: right;
        color: #B4B3B3;
		margin: 5px 15px 0 0;
	}

	.click > i {
		font-size: 16px;
	}

	.tag:hover,.tag:active {
		background-color: #cbc8c8;
		color: #fff;
	}

    .article >h1>a:hover {
    	display: block;
        color: #4db2ec;
    }

    .article >p>a:hover {
    	display: block;
        color: #6A6A6A;
    }

/*     .fade-transition {
        -moz-transition: all 0.5s ease-in-out;
   	    -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease;
        opacity: 1;
    }

    .fade-enter{
        opacity: 0;
    }

    .fade-leave {
		opacity: 1;
        transform: translate3d(-100%,0,0);
    }
 */
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

        .tags {
            margin: 17px 0 13px 0 !important;
        }

        .tag {
            padding: 3px 10px;
        }

        .click {
            margin: 3px 15px 0 0;
        }

	    .article >h1>a:hover {
	    	display: block;
	        color: #4e4d4d;
	    }

	    .article >p>a:hover {
	        color: #939292;
	    }

        .article > p >a:active {
        	text-decoration: none !important;
        	background-color: #E4E4E4;
        }
	}

</style>