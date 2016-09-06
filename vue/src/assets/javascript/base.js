// window.onload = function(){
//     var btnObj = document.getElementById("nav-btn");
//     var barObj = document.getElementById("nav-bar");
//     var listObj = document.getElementById("list").getElementsByTagName("li");
//     var flag = true;
//     var startTime,endTime;

//     var handler = function(){
//         if (flag){
//             barObj.style.height = "auto";
//             barObj.style.marginTop = "41px";
//             for (var i=0;i<listObj.length;i++){
//                 listObj[i].style.height = "40px";
//                 listObj[i].style.opacity = 1;
//             }
//             flag = false;
//         } else {
//             barObj.style.marginTop = "0px";
//             for (var i=0;i<listObj.length;i++){
//                 listObj[i].style.height = "0px";
//                 listObj[i].style.opacity = 0;
//             }
//             flag = true;
//         }        
//     };

//     //PC端绑定事件 
//     btnObj.onclick = handler;

//     // 移动端绑定事件

//     // btnObj.addEventListener('touchstart', function(){
//     //     startTime = new Date();
//     // }, handler, false);

//     // btnObj.addEventListener('touchend', function(){
//     //     endTime = new Date();

//     //     if (endTime-startTime < 100 &&  endTime-startTime > 300){
//     //         handler();
//     //     }
//     // }, false);
// };

import Vue from 'vue'

var vm = new Vue({
    el: '#nav-bar',
    data: {
        display: false,
        className : 'active'
    },
    methods: {
        slideToggle: function(){
            console.log(11)
            this.display = !this.display;
        }
    }
})


