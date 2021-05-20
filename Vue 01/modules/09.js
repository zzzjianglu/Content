//引入vue
import Vue from "vue";

//搭建应用
let app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        title: "heelo world",
        msg: "你好"
    },
})

console.log(app);