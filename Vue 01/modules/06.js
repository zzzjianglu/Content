//引入vue
import Vue from "vue";
import "./06.scss"

//搭建应用
var app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        // title: "hello everybody"
        title: "<b>hello everybody</b>"
    }
})

setTimeout(() => {
    app.title = "666"
}, 2000)