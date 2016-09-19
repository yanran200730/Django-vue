<template>
    <div class="loading">
        <i class="fa fa-spinner fa-pulse"></i>
        <span>数据加载中....</span>
    </div>
</template>

<style scoped>
    .loading {
        position: absolute;
        left: 0;
        top: -30px;
        z-index: 10000;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 25px;
        padding-top: 40px; 
        color: #BDBBBB;
        background-color: #fff;
    }

    .loading > span {
        color: #BDBBBB;
        font-size: 14px;
    }
</style>