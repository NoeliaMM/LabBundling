import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export default merge(common, {  
  mode: "production",
  output: {
    filename: "js/[name].[chunkhash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
          maxSize: 250000,
        },
      },
    },
  },
  module: {
    rules: [     
      {
        test: /\.s?css$/,
        // exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",     
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
      filename: "css/[name].[contenthash].css", 
      chunkFilename: "[id].css",
    }),    
  ],
});
