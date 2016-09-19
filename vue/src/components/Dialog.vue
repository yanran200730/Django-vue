<template>
    <div class="dialog">
        <p>{{ message }}</p>
    </div>
</template>
<script>
    export default {
        props: ['message']
    }

</script>
<style scoped>
    .dialog {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 14px;
        padding-top: 40px; 
        /*color: #67CF22;*/
        color: #4db2ec;
        background-color: #fff;
    }
</style>
