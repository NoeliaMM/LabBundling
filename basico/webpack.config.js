
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url)); 

export default {
 context: path.resolve(__dirname, "src"),
 entry:{
    app:"./index.ts",  
    main :[ "../node_modules/bootstrap/dist/css/bootstrap.css" , "./styles.scss"]
 },
 output:{
    filename: "[name].[chunkhash].js",
    // filename: "[name].js",
    clean: true
 },
  module: {
   rules:[
        {
        test: /\.ts$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        },       
       
        {
          test: /\.(sa|sc|c)ss$/, // Archivos SCSS y CSS
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',              
            'sass-loader',             
          ],
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
  devtool: "eval-source-map", //para que se vea el codigo original en el navegador
  devServer:{
    port: 8080,
    hot:true,
    devMiddleware:{
      stats:"errors-only"
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      scriptLoading:"blocking",
      // hash:true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css"
    }),
  ]
}