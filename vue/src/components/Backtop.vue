<template>
    <div class="backtop">
        <i class="fa fa-caret-up"></i>
        <span>Top</span>
    </div>
</template>

<style>
    .backtop {
        position: fixed;
        bottom: 15%;
        right: 5%;
        width: 44px;
        height: 48px;
        border-radius: 6px;
        background-color: #abd0ae;
        color: #fff;
        font-size: 36px;
        cursor: pointer;
    }

    .backtop>i, .backtop>span {
        display: block;
        text-align: center;
        margin-top: -5px;
    }
    
    .backtop > span {
        font-size: 13px;
        font-family: Times New Roman;
    }
    
    .backtop:hover ,.backtop:active {
        background-color: #ADACAC;
    }

</style>