/*
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-06 10:19:10
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-25 09:59:37
 */
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const env = process.env.NODE_ENV;

module.exports = {
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "static",
    productionSourceMap: false,
    devServer: {
        open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
        hotOnly: true, 
        proxy: {
            "/api": {
                // target: 'http://10.129.60.130:9224', // 本地
                // target: 'http://10.129.60.163:9223', // 本地
                // target: 'http://10.129.52.33:9223', // 本地
                // target: 'http://10.129.52.154:9223', // 本地
                // target: 'http://10.129.60.150:9223', // 本地
                // target: 'http://10.126.15.202:32015', // 开发
                target: 'http://10.126.15.202:32028', // 测试
                // target: 'http://10.129.60.130:9224', // 本地
                // target: 'https://gnsdwt.chnenergy.com.cn/', // 生产
                // ws: true,        //如果要代理 websockets，配置这个参数
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    "^/api": "/api"
                }
            },
        },
    },
    transpileDependencies: ['js-base64'],
    chainWebpack: config => {
        config.optimization.minimize(true);// 压缩代码
        config.optimization.splitChunks({
            chunks: 'all'// 分割代码
        });
        config.resolve.alias
            .set('@', resolve('src'))

        const svgRule = config.module.rule('svg')
        // 清除已有的所有 loader,否则接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()
        svgRule
            .test(/\.svg$/)
            .include.add(path.resolve(__dirname, './src/assets/svg'))// 配置icons的目录  
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

        const fileRule = config.module.rule('file')
        fileRule.uses.clear()
        fileRule
            .test(/\.svg$/)
            .exclude.add(path.resolve(__dirname, './src/assets/svg')) // 配置icons的目录
            .end()
            .use('file-loader')
            .loader('file-loader')
    },
    css: {
        extract: true
    },
    configureWebpack: (config) => {

    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: []
        }
    }
};