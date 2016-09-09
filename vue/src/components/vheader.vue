<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/img/logo.png">
            <span>Django-Vue.js</span>
            <a id="nav-btn"  v-touch:tap="slideToggle"><i class="fa fa-navicon fa-lg"></i></a>
        </div>
        <div class="nav clearfix" v-show="dropState" transition="dropDown">
            <ul class="clearfix list">
                <li><a href="javascript:void(0);">首页</a></li>
                <li><a href="javascript:void(0);">归档</a></li>
                <li><a href="javascript:void(0);">标签</a></li>
                <li><a href="javascript:void(0);" v-touch:tap="searchToggle">搜索</a></li>
            </ul>
        </div>
    </div>
    <div class="search-wrap" v-show="search" transition="search" style="display:none">
        <div class="search">
            <div class="icon">
                <a href="javascript:void(0);"><i class="fa fa-search"></i></a>
            </div>
            <div class="search-content">
                <input id="search" class="search-keyword" type="text" placeholder="请输入关键字" autofocus="autofocus">
            </div>
        </div>
        <div class="content">
            <div class="search-infor"></div>
            <div class="search-list"></div>
        </div>
        <span class="close-btn" v-touch:tap="searchToggle">
            <i class="fa fa-times-circle"></i>
        </span>
    </div>
    <div class="wrap" v-show="search" v-on:click="searchToggle" style="display:none" transition="wrap"></div>
</template>

<script>
    export default {
        data(){
            return {
                dropState: false,
                search : false
            }
        },
        methods: {
            slideToggle: function(event){
                this.dropState = !this.dropState;
                event.preventDefault();
            },
            searchToggle: function(event){
                //防止wrap层未消失时多次点击
                if (event.target.tagName === "DIV"){
                    this.search = false;               
                }else {
                    this.search = !this.search;
                }
                event.preventDefault();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        position: relative;
        top: 0;
        left: 0;
        padding: 0.1rem 0.85rem;
        background-color: #fff;
        box-shadow: 0 0 4px rgba(0,0,0,0.25);
        z-index: 1;
    }

    .logo {
        display: inline-block;
    }

    .logo > img {
        width: 0.4rem;
        height: 0.4rem;
        vertical-align: middle;
    }

    .logo > span {
        line-height: 0.4rem;
    }

    .nav {
        position: absolute;
        right: 0.6rem;
        top: 0.1rem;
        font-size: 0.16rem;
    }

    .nav > ul li{
        float: left;
        height: 0.4rem;
        line-height: 0.4rem;
    }

    .nav > ul li a {
        display: inline-block;
        padding: 0 0.25rem; 

    }

    .nav > ul li a:hover {
        color: #4db2ec;
    }

    /*search*/
    .search-wrap {
        position: fixed;
        left: 50%;
        top: 10%;
        width: 7rem;
        height: 80%;
        margin-left: -3.5rem;
        z-index: 10000;
        color: #333;
        background-color: #fff; 
        border-radius: 5px;
    }

    .search {
        padding: 10px 15px 5px 15px;
        border-bottom: 1px solid #ccc;
        height: 33px;
        background-color: #f5f5f5; 
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .icon , .search-content {
        display: inline-block;
        line-height: 33px;
    }

    .icon {
        display: inline-block;
        width: 20px;
        font-size: 18px;
    }

    .search-content {
        width: calc(90% - 20px);
        color: #333;
        font-size: 14px;
    }

    .search-keyword {
        width: 100%;
        height: 23px;
        padding: 5px 0 5px 20px;
        outline: none;
        -webkit-appearance: none; 
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        border: none;
        background: transparent;
        font-size: 17px;
        font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
        color: #34495e;
    }

    .close-btn {
        position: absolute;
        top: 13px;
        right: 15px;
        color: #999;
        font-size: 25px;
        cursor: pointer;
    }

    .close-btn:hover {
        color: #333;
    }

    .content {
        position: relative;
        overflow: auto;
        padding: 10px 30px;
        height: calc(100% - 50px);
    }


    /*search动画*/
    .search-transition {
        opacity: 1;
        -moz-transition: all 5s ease;
        -webkit-transition: all 5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease-in-out;
        -moz-transform: scale(1,1);
        -webkit-transform: scale(1,1);
        -o-transform: scale(1,1);
        transform: scale(1,1);
    }

    .search-enter, .search-leave {
        opacity: 0;
        -moz-transform: scale(0,0);
        -webkit-transform: scale(0,0);
        -o-transform: scale(0,0);
        transform: scale(0,0);
    }

    /*遮罩层*/

    .wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9999;
        cursor: pointer;
        background-color: rgba(0,0,0,.6);
    }


    .wrap-transition {
        opacity: 1;
        -moz-transition: all 5s ease;
        -webkit-transition: all 5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease-in-out;
    }

    .wrap-enter, .wrap-leave {
        opacity: 0;
    }


    @media screen and (min-width: 900px){
        .nav {
            display: block !important;
            transition: unset!important;
        }

        .logo > a {
            display: none;
        }
    }
    
    @media screen and (width: 900px){
        .nav {
            display: none!important;
        }
    }

    @media screen and (max-width: 900px){
        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 40px;
            padding: 0px;
            background-color: #535353;
            z-index: 1;
        }

        .logo {
            height: 100%;
            padding: 0 15px;
            display: block;
        }

        .logo > img{
            width: 25px;
            height: 25px;
            margin-top: 7.5px; 
        }

        .logo > span {
            display: none;
        }    

        .logo > a {
            position: absolute;
            top: 6.5px;
            right: 15px;
            color: #fff;
            font-size: 20px;
        }
        
        .nav {
            position: absolute;
            top: 40px;
            left: 0px;
            right: 0px;
            width: 100%;
            margin: 0px !important;
            padding: 0px !important;
        }

        .nav ul {
            text-indent: 15px;
            background-color: rgba(0,0,0,.2);
        }

        .nav li {
            float: none !important;
        }

        .nav li a {
            display: block !important;
            color: #CEC9C9 !important;
            padding: 0 !important;
        }

        .nav >ul> li > a:hover {
            background-color: rgba(0,0,0,.4);
        }

        .nav > ul> li >a:active {
            color: #CEC9C9;
            background-color: rgba(0,0,0,.4);
        }
        
        /*search*/
        .search-wrap {
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            border-radius: 0px !important;
        }

        .search {
            border-top-left-radius: 0px !important;
            border-top-right-radius: 0px !important;
        }

    }

    /*下拉菜单动画*/
    .dropDown-transition {
        -moz-transition: height 5s ease;
        -webkit-transition: height 5s ease;
        -o-transition: height .5s ease;
        transition: height .5s ease-in-out;
        height: 160px!important;
        overflow:hidden;
    }

    .dropDown-enter, .dropDown-leave {
        height: 0 !important;
        overflow:hidden;
    }
</style>
