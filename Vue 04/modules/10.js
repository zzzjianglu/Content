//引入vue
import Vue from "vue";

//引入Vuex
import Vuex from "vuex";

//1、引入安装
Vue.use(Vuex);

//2、创建store对象
let store = new Vuex.Store({
    //创建数据
    state: {
        msg: "this is store",
        num: 0
    },

    //计算属性数据
    getters: {
        doubleNum(state) {
            return state.num * 2;
        }
    },

    //同步消息
    mutations: {
        //+3
        addNum(state) {
            state.num += 3;
        },

        //-5
        reduceNum(state) {
            state.num -= 5;
        },

        //重置
        resetNum(state) {
            state.num = 0;
        }
    },

    //异步消息
    actions: {
        resetNum(store) {
            console.log("actions", arguments);

            setTimeout(() => {
                //state的数据修改只能在同步任务中执行
                //store.state.num = 0;
                store.commit("resetNum");
            }, 2000)
        }
    },

    //modules
    modules: {
        //键为子模块的名称 值为store对象
        child: {
            //此处就是一个store对象，state getters mutations actions  modules
            state: {
                num: 100
            },

            //同步消息
            mutations: {
                //+3
                addNum(state) {
                    state.num += 3;
                },

                //-5
                reduceNum(state) {
                    state.num -= 5;
                },

                //重置
                resetNum(state) {
                    state.num = 0;
                }
            },

            getters: {
                bmDoubleNum(state) {
                    return state.num * 2;
                }
            }
        }
    }
});

//声明两个子组件
let child = Vue.extend({
    //模板
    template: "#child",

    //创建完毕
    created() {

    }
});
let other = Vue.extend({
    //模板
    template: "#other",

    //创建完毕
    created() {

    }
});

//实例化对象
const app = new Vue({
    //3、注册store对象
    //store: store,
    store,

    //视图
    el: "#app",

    //数据
    data: {
        num: 1
    },

    //注册子组件
    components: { child, other },

    //创建完毕
    created() {
        console.log("app", this);
    },

})