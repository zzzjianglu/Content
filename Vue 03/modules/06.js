//引入vue
import Vue from "vue";

//2、定义组件类
const sy102 = Vue.extend({
    //放置的对象和new vue相同 但是不同点在于  el变为了tempalte和data为函数 数据为函数的返回值
    //模板
    template: "#tpl",

    data() {
        return {
            title: '斑马教育000',
            name: "child000"
        }
    }
})

// 3、全局注册组件
// Vue.component('sy102', sy102);


//实例化对象
let app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        msg: "<a>我爱你</a>",
    },

    //3、局部注册组件
    components: {
        // sy102: sy102,
        sy102
    }
})