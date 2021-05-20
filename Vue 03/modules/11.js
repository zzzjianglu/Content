//引入vue
import Vue from "vue";

//2、定义组件类
const child = Vue.extend({
    //模板
    template: `
        <div>
            <input type="text" v-model="msg">
            <h2>{{$parent.msg}}</h2>
            <h3>{{title}}</h3>
        </div>
    `,

    data() {
        return {
            msg: "child msg"
        }
    },

    //创建完毕
    created() {
        //触发父组件的自定义事件
        this.$parent.$emit("sy102", this.msg, "我是子组件传递的内容", "classxxoo");
    },

    //数据监测
    watch: {
        msg(value) {
            console.log(value);
            this.$parent.$emit("sy102", this.msg);
        }
    }
})

//实例化对象
let app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        msg: "",
    },

    //3、局部注册组件
    components: {
        child
    },

    created() {
        console.log(this);

        //添加自定义事件
        this.$on("sy102", (msg, ...args) => {
            //console.log(111, args);
            this.msg = msg;
        })

        // // 在2秒中之后自动触发
        // setTimeout(() => {
        //    this.$emit('sy102', true, 123, 'woaini'); 
        // }, 2000)
    },

    //方法
    methods: {
        demo() {
            console.log(222);
            console.log(arguments);
        }
    }
})

console.log(app);