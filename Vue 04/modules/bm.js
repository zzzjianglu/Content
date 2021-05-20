export default function(store) {
    //插件方法的调用
    store.subscribe((...args) => {
        //第一个参数为mutation对象  第二个为state对象
        console.log(args);
    })
}