<template>
    <div class="wrapper clearfix">
        <vheader class="header"></vheader>
        <div class="main clearfix">
            <div class="body">
                <img src="./assets/img/index.jpg">
                <a v-link="{path: '/foo'}">click to foo</a>
                <a v-link="{path: '/bar'}">click to bar</a>
                <router-view></router-view>
            </div>
            <vaside class="aside clearfix"></vaside>
        </div>
        <vfooter class="footer"></vfooter>
    </div>
</template>

<script type="text/babel">
    import './assets/font-awesome-4.6.3/css/font-awesome.min.css'
    import vheader from './components/vheader.vue'
    import vaside from './components/vaside.vue'
    import vfooter from './components/vfooter.vue'

    export default {
        components: {
            vheader,
            vaside,
            vfooter
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
        background-color: #F6F5F5;
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
            margin: 240px 0 0 0 !important;
        }

        .body {
            width: 100% !important;
            float: none !important;
            margin: 0 !important;
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
            z-index: -1;
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
        }

        .socially {
            display: none !important;
        }
    }

    .footer {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1rem;
        margin-top: 0.3rem;
        background-color: #848383;
    }
</style>