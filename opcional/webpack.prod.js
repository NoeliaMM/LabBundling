import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export default merge(common, {  
  mode: "production",
  output: {
    publicPath: '/', 
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), 
    ],
  },
  module: {
    rules: [     
      {
        test: /\.s?css$/,
        // exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options: {
              modules: true
            },
          },
          "sass-loader",
        ], 
      },  
   
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', 
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", 
      chunkFilename: "[id].css",
    }),
    // new BundleAnalyzerPlugin(), 
  ],
});
