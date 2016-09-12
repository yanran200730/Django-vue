<template>
    <div class="aside">
        <div class="profile">
            <div class="short-about">
                <img src="../assets/img/me.jpg">
                <h3>Yan ran</h3>
                    <p>临渊羡鱼 不如退而结网</p>
                </div>
            <div class="socially">
                <a href="javascript:void(0);" target="_blink">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-weibo fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="javascript:void(0);" target="_blink">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-wechat fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="https://github.com/yanran200730" target="_blink">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="http://yanran520.cc" target="_blink">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-edge fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </div>
        </div>
        <div class="interest">
            <a href="javascript:void(0);">CSS</a>
            <a href="javascript:void(0);">HTML</a>
            <a href="javascript:void(0);">JavaScript</a>
            <a href="javascript:void(0);">Python</a>
            <a href="javascript:void(0);">Django</a>
            <a href="javascript:void(0);">Music</a>
            <a href="javascript:void(0);">Vue.js</a>
        </div>
        <div class="link">
            <h3>友链</h3>
            <a href="http://yanran520.cc" target="_blink">calvin blog</a>
        </div>
    </div> 
</template>

<style scoped>
    .aside {
        width: 220px;
        margin: 0rem 0.5rem 0 0.3rem;
        float: right;
    }

    .profile {
        margin-top: 60px;
    }

    .short-about > img {
        width: 90%;
        margin: 0 5% 15px 5%;
        border-radius: 50%;
    }

    .short-about > h3 {
        color: #808080;
        text-align: center;
    }

    .short-about > p {
        margin: 10px 0;
        text-align: center;
        color: #bfbfbf;
    }

    .socially {
        display: -webkit-flex;
        display: flex;
        width: 100%;
        height: 40px;
    }

    .socially > a {
        text-align: center;
        flex: 1;
        font-size: 14px;
    }

    .socially > a .fa-circle {
        color: #bfbfbf;
    }

    .socially > a:hover .fa-circle {
        color: #0085a1;
    }

    .interest {
        text-align: center;
        margin-top: 10px;
    }

    .interest > a {
        display: inline-block;
        border: 1px solid #bfbfbf;
        border-radius: 4px;
        padding: 0 10px;
        line-height: 24px;
        font-size: 12px;
        margin: 10px 10px 0 0;
        color: #bfbfbf; 
    }

    .interest > a:hover {
        background-color: #CBC8C8;
        color: #fff;
    }

    .link {
        margin-top: 20px;
        text-align: center;
        color: #808080;
    }

    .link > h3 {
        margin-bottom: 7px;
    }

    .link > a {
        color: #bfbfbf;
    }

    .link > a:hover {
        text-decoration: underline;
    }

</style>