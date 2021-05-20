//引入vue
import Vue from "vue";

//2、定义组件类
const sy102 = Vue.extend({
    //模板
    template: "#tpl",

    data() {
        return {
            title: '斑马教育000',
            name: "child000"
        }
    },

    //钩子函数  生命周期

    //1、创建期
    beforeCreate() {
        console.log(111, "beforeCreate");
    },

    created() {
        console.log(222, "created");
    },

    beforeMount() {
        console.log(333, "beforeMount");
    },

    mounted() {
        console.log(444, "mounted");
    },

    //2、存在期
    beforeUpdate() {
        console.log(555, "beforeUpdate");
    },

    updated() {
        console.log(666, "updated");
    },

    //3、销毁期
    beforeDestroy() {
        console.log(777, "beforeDestory");
    },
    destroyed() {
        console.log(888, "destroyed");
    },

    //4、缓存
    activated() {
        console.log(999, "activated");
    },
    deactivated() {
        console.log("aaa", "deactivated");
    }
})

const sy103 = Vue.extend({
    //模板
    template: `
        <h1>sy103</h1>
    `
})


//实例化对象
let app = new Vue({
    //视图
    el: "#app",

    //模型
    data: {
        msg: "<a>我爱你</a>",
        com: "sy102"
    },

    //3、局部注册组件
    components: {
        // sy102: sy102,
        sy102,
        sy103
    },

    methods: {
        toggle() {
            this.com = this.com == "sy102" ? "sy103" : "sy102";
        }
    }
})