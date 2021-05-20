//引入vue
import Vue from "vue";

//全局过滤器  添加自定义的插值过滤器
Vue.filter("toUpper", (str) => {
    str = String(str);

    //必须有一个返回值
    return str.toUpperCase();
})

//搭建应用
let app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        title: "hello world"
    },

    //全局过滤器： 过滤器
    filters: {
        toArray(str, split) {
            str = String(str);

            return str.split(split);
        }
    },

    //计算属性数据
    computed: {
        msg() {
            console.log(111);

            return this.title.toUpperCase().split("O")
        }
    }
})

console.log(app);