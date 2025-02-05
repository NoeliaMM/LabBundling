
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url)); 

export default {
 context: path.resolve(__dirname, "src"),
 resolve :{
  extensions:[".js",".jsx"]
 },
 entry:{
  app:"./index.jsx"  
},
 output:{
    filename: "[name].[chunkhash].js",
    // filename: "[name].js",
    clean: true
 },
  module: {
   rules:[
        {
        test: /\.jsx?$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        },   
 
        {
          test: /\.(png|jpg)$/,
          type: "asset/resource"
        },
        {
          test: /\.html$/,
          use: "html-loader"
        },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      scriptLoading:"blocking",
      // hash:true
    }), 
  ]
}