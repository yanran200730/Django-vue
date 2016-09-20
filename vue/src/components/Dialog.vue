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
        z-index: 100;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 14px;
        padding-top: 40px; 
    }

    .dialog > p {
        padding: 15px;
        width: 80%;
        margin: 0 auto;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-color: #faebcc;
    }
</style>
