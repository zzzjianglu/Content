//引入vue
import Vue from "vue";

//声明一个组件
const child = Vue.extend({
    props: ["demo"],
    //模板
    template: `
        <div>
            <h1>child part</h1>
            <h2>{{msg}}</h2>
        </div>
    `,

    //模型
    data() {
        return {
            msg: "child component"
        }
    },

    //创建完成
    created() {
        console.log(this.demo);

        this.demo(this.msg);
    }
});

//实例化对象
const app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        msg: "hello"
    },

    //注册子组件
    components: { child },

    //创建方法
    methods: {
        xxoo(msg) {
            console.log("xxoo", arguments);
            this.msg = msg;
        }
    }
})