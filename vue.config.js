module.exports = {
    //基本路劲
    publicPath:'/',
    //输出文件目录
    outputDir:'dist',
    //是否保存时检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    devServer:{
        open:true,
        https:false,
        hotOnly:false,
        proxy:{  // 设置代理
            '/cityPlanDev':{
                target:'http://172.17.6.123.8083'
            },
            '/geoserver':{
                target:'http://172.17.6.205.8102'
            }
        },
        before:app => {}
    }
}