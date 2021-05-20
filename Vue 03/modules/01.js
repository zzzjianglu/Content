//引入
import Vue from "vue";

//引入样式
import "../scss/01.scss";

//实例化对象
let app = new Vue({
    //绑定视图
    el: "#app",

    //绑定模型
    data: {
        flag: true
    },

    //方法
    methods: {
        //切换显示状态
        toggle() {
            this.flag = !this.flag;
        },

        beforeEnter() {
            console.log(101, "beforEnter");
        },
        enter() {
            console.log(102, 'enter');

        },
        afterEnter() {
            console.log(103, 'afterEnter');

        },
        beforeLeave() {
            console.log(104, 'beforleave');

        },
        leave() {
            console.log(105, 'leave');

        },
        afterLeave() {
            console.log(106, 'afterleave');

        },
    }
})