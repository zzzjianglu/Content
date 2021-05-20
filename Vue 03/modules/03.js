// 引入vue
import Vue from 'vue';
// 全局声明指令
// Vue.directive('bmHtml', {
//     // 绑定指令
//     bind(el, binding, vnode) {
//         // console.log(111, 'bind');
//         // console.log(arguments);
//         el.innerHTML = binding.value;
//     },
//     // 页面渲染
//     inserted(el, binding, vnode) {
//         // console.log(112, 'inserted');
//         // console.log(arguments);

//     },
//     // 更新数据
//     update(el, binding, vnode, oldVnode) {
//         // console.log(113, 'update');
//         // console.log(arguments);
//         el.innerHTML = binding.value;

//     },
//     // 更新视图
//     componentUpdated(el, binding, vnode) {
//         // console.log(114, 'componentUpdated');
//     },
//     // 解绑
//     unbind(el, binding, vnode) {
//         // console.log(115, 'unbind');
//     },
// });

Vue.directive('bmHtml', (el, binding, ...args) => {
        // console.log(args);
        console.log(binding.value, binding.oldValue);
        // 通过值的变化，来优化dom操作: 那个发生改变执行哪一个
        if (binding.value !== binding.oldValue) {
            console.log(el);
            el.innerHTML = binding.value;
        }

    })
    // 实例化对象
let vue = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: '<a>我爱你</a>',
        title: '斑码教育',
        flag: true,
    },
    // 定义方法
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    },
    // 局部定义
    directives: {
        // bmOnce(el, binding) {
        //     console.log(11111);
        //     el.innerHTML = binding.value;
        //     console.log(arguments);
        // }
        bmOnce: {
            bind(el, binding) {
                console.log(99999999999999);
                el.innerHTML = binding.value;
            }
        }
    }
})