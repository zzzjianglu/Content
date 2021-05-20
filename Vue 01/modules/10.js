//引入vue
import Vue from "vue";

//搭建应用
let app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        sex: "nv",

        //第一种情况 所有的多选框绑定了同一个变量 此时想默认选中则输入对应的值
        hobby: ["a", "b"]
    }
})

console.log(app);