//引入vue
import Vue from "vue";

//2、定义组件类
const child = Vue.extend({
    //接收消息
    //1、数据类型为数组 数组里面为接受的属性名称  名称使用驼峰命名法
    props: ["name", "msg", 'parentMsg'],

    //模板
    template: `
        <div>
            <h1>子组件</h1>
            <h2>{{$parent.msg}}</h2>
            <h3>{{title}}</h3>
        </div>
    `,

    data() {
        return {

        }
    },

    //创建完毕
    created() {
        this.title = this.$parent.msg.toUpperCase();
    }
})

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
        child
    }
})