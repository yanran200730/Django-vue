<template>
    <div class="loading">
        <i class="fa fa-spinner fa-pulse"></i>
    </div>
</template>

<style scoped>
    .loading {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 60px;
        padding-top: 40px; 
        /*color: #67CF22;*/
        color: #4db2ec;
        background-color: #fff;
    }
</style>