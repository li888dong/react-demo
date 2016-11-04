var webpack = require('webpack');
var config = {
    //页面入口文件配置
   entry:{
       index: './main.js',
       common:['webpack-Zepto','react','react-dom','react-router']
   },
    //入口文件输出配置
   output: {
      path:'./',
      filename: 'index.js'
   },

   devServer: {
      inline: true,
      port: 8888
   },
	
   module: {
       //加载器配置
      loaders: [
         {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
         },
         {
         test: /\.css$/,
            loader: "style-loader!css-loader?modules"
         }
      ]
   },
   //使用ProvidePlugin加载使用频率高的模块
   plugins:[
     //署名
    new webpack.BannerPlugin('This file is created by lidong'),
       //提公用js到common.js文件中
       new webpack.optimize.CommonsChunkPlugin('common','common.js'),
       //将样式统一发布到style.css中(需安装)
       //new ExtractTextPlugin("style.css", {
       //    allChunks: true,
       //    disable: false
       //}),
    ////使用ProvidePlugin加载使用频率高的模块(jquery使用须前安装，npm install jquery)
    new webpack.ProvidePlugin({
        $: "webpack-Zepto",
        Zepto: "webpack-Zepto",
        "window.Zepto": "webpack-Zepto"
      }),
    //代码压缩
    new webpack.optimize.UglifyJsPlugin({
        output: {
            // remove all comments
            comments: false
        },
      compress: {
        warnings: false
      }
    }),
       new webpack.DefinePlugin({
           'process.env': {
               NODE_ENV: JSON.stringify('production')
           }
       }),
   ]
	
};

module.exports = config;