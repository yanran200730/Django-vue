<template>
    <div class="wrapper" transition="backTop">
        <Headers></Headers>
        <div class="main clearfix">
            <div class="body">
                <img src="./assets/img/index.jpg">
                <router-view></router-view>
            </div>
            <Aside class="aside"></Aside>
        </div>
        <Footers class="footer"></Footers>
        <Backtop v-show="scrollShow" v-touch:tap="backtop" transition="fade" transition-mode="out-in"></Backtop>
    </div>
</template>

<script type="text/babel">
    import './assets/font-awesome-4.6.3/css/font-awesome.min.css';
    import Headers from './components/Headers.vue';
    import Aside from './components/Aside.vue';
    import Footers from './components/Footer.vue';
    import Backtop from './components/Backtop.vue';

    export default {
        components: {
            Headers,
            Aside,
            Footers,
            Backtop
        },
        data: function(){
            return {
                scrollTop: "",
                scrollShow: false,
                timer: null,
                flag: true
            }
        },
        ready: function(){
            this.getScrollTop();
        },
        methods: {
            getScrollTop: function(){
                let self = this;
                document.addEventListener("scroll",function(){
                    self.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    (self.scrollTop>800)?(self.scrollShow = true):(self.scrollShow = false);
                    if (!self.flag) {
                        clearInterval(self.timer);
                    }
                    self.flag = false
                })
            },
            backtop: function(){
                let speed,height;
                let self = this;

                this.timer = setInterval(function(){
                    height = document.body.scrollTop || document.documentElement.scrollTop;
                    speed = Math.ceil(height/10);
                    if (height === 0) {
                        clearInterval(self.timer);
                    }
                    if (document.body.scrollTop) {
                        document.body.scrollTop = document.body.scrollTop - speed;
                    } else {
                        document.documentElement.scrollTop =document.documentElement.scrollTop - speed;
                    }
                    self.flag = true;
                },20);
                
            }
        }
    }
</script>


<style>
    html {
        font-size: 100px;
    }

    /*reset style*/
    body,ol,ul,li,p,h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,h4,h5,h6 {
        font-size: 0.16rem;
    }

    .clearfix:after {
        content: "."; 
        display: block; 
        height: 0; 
        clear: both; 
        visibility: hidden;  
    }

    .clearfix {
        zoom: 1; 
    }

    body {
        color: #555;
        font-size: 0.15rem;
        font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
        word-spacing: 0.05em;
        -webkit-tap-highlight-color:transparent;
    }

    a {
        text-decoration: none;
        color: #555;
        -webkit-tap-highlight-color:transparent;
        cursor: pointer;
    }

    ul,ol {
        list-style: none;
    }

    .main {
        width: 1100px;
        margin: 0.2rem auto 0 auto;
    }

    .body {
        width: 730px;
        margin: 0.2rem 0.2rem 0 0.5rem;
        float: left;
    }

    .aside {
        width: 220px;
        margin: 0rem 0.5rem 0 0.3rem;
        float: right;
    }

    .body > img {
        width: 100%;
        height: 300px;
    }

    /*转场动画*/

    .switch-transition {
        transition: all .4s ease-in-out;
    }

    .switch-enter{
        opacity: 0;
        /*transform: translate(100%,0);*/
    }

    .switch-leave {
        opacity: 0;
        /*transform: translate(-100%,0);*/
    }

    .fade-transition {
        -moz-transition: opacity 0.7s ease;
        -webkit-transition: opacity 0.7s ease;
        -o-transition: opacity 0.7s ease;
        transition: opacity 0.7s ease;
    }

    .fade-enter, .fade-leave {
        opacity: 0;
    }

    @media screen and (min-width: 900px) and (max-width: 1100px){
        .main {
            width: 100% !important;
        }

        .body {
            width: calc(100% - 380px)!important;
        }

        #nav-bar {
            display: none;
        }
    }


    @media screen and (max-width: 900px){
        .main  {
            width: 100% !important;
            margin: 200px 0 0 0 !important;
            padding-top: 15px;
        }

        .body {
            width: 100% !important;
            float: none !important;
            margin: 0px !important;
            box-sizing:border-box;
            -moz-box-sizing:border-box; 
            -webkit-box-sizing:border-box;
            padding: 0 15px;
        }

        .body > img {
            position: absolute;
            left: 0;
            top: 40px;
            width: 100%;
            height: 200px;
            z-index: -1;
        }

        .socially {
            display: none;
        }

        .interest {
            display: none;
        }

        .link {
            display: none;
        }

        .aside {
            width: 0 !important;
            height: 0 !important;
        }

        .profile {
            position: absolute;
            left: 0;
            top: 10px;
            width: 100%;
            z-index: 20;
            margin: 40px 0 0 0!important;
        }

        .short-about {   
            width: 120px;
            margin: 0 auto;
        }

        .short-about img {
            margin: 0 !important;
        }

        .short-about > h3, .short-about > p {
            color: #E4E1E1 !important;
            margin: 0px !important;
        }

        .short-about > h3 {
            font-size: 1.1em !important;
        }

        .short-about > p {
            line-height: 1.4 !important;
            font-size: 1em;
        }

        .socially {
            display: none !important;
        }
    }
</style>