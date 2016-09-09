<template>
    <div class="footer">
        <div class="footer-wrap">
            <p>Django-Vue.js 实践项目</p>
            <p>Copyrights © 2016 calvin. All Rights Reserved.</p>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 0.8rem;
        margin-top: 0.3rem;
        background-color: #848383;
    }

    .footer-wrap {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 0.14rem;
        text-align: center;
        padding-top: 0.15rem;
        color: #E6E6E6;
    }
</style>