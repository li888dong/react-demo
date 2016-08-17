var webpack = require('webpack');
var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js'
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
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
   plugins:[
     //署名
    new webpack.BannerPlugin('This file is created by lidong'),
    //jquery使用须前安装，npm install jquery
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
    //代码压缩
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //})
   ]
	
};

module.exports = config;