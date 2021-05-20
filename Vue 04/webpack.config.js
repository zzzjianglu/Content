//暴露接口
module.exports = {
    //resolve 配置 webpack如何查找文件
    resolve: {
        //扩展名
        extensions: [".js"],

        //配置别名
        alias: {
            //这个vue是F盘下的
            vue$: "/node_modules/vue/dist/vue.js"
        }
    },

    //入口文件
    entry: {
        "01": "./modules/01.js",
        "02": "./modules/02.js",
        "03": "./modules/03.js",
        "04": "./modules/04.js",
        "05": "./modules/05.js",
        "06": "./modules/06.js",
        "07": "./modules/07.js",
        "08": "./modules/08.js",
        "09": "./modules/09.js",
        "10": "./modules/10.js",
        "11": "./modules/11.js",
        "12": "./modules/12.js",
        "13": "./modules/13.js",
        "14": "./modules/14.js",
        "15": "./modules/15.js"
    },

    //出口配置
    output: {
        //文件名
        filename: "[name].js"
    },

    //加载机
    module: {
        //匹配规则
        rules: [
            //ES6
            {
                test: /\.js$/,
                loader: "babel-loader",

                //排除文件夹
                exclude: "/node_modules",

                //包含指定的文件夹
                include: "/modules",
                options: {
                    presets: ["env"]
                }
            },

            //css
            {
                test: /\.css$/,
                //这个loader也可以换成use  只不过格式不同
                // loader: "style-loader!css-loader",
                use: ["style-loader", "css-loader"]
            },

            //scss
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },

            //less
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },

    //模式
    mode: "development"
}