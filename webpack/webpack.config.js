const path = require("path");

module.exports = {
	//配置入口文件
	entry:"./src/js/app.js",
	//配置出口文件
	output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
	},
	module:{
		//配置模块信息
		loaders:[
		   {
		   	 test:/\.css$/,
		   	 loader:"style-loader!css-loader"
		   },
		   {
		   	 test:/\.js$/,
		   	 loader:"babel-loader",
		   	 exclude:"/node_moudles/",
		   	 query:{
		   	 	presets:["es2015"]
		   	 }
		   }
		]
	}
}