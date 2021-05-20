//引入vue
import Vue from "vue";

//搭建应用
let app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        //单选使用字符串
        // hobby: "c",

        //多选使用数组
        hobby: ["a", "c"]
    },
})

console.log(app);