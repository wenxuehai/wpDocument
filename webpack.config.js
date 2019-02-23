

module.exports = {
  entry: {
    app: __dirname + "/app/main.js",
    main: __dirname + "/app/greeter.js",
  },
  // output: {
  //   path: __dirname + "/public", //打包后的文件存放的地方
  //   filename: "bundle.js" //打包后输出文件的文件名
  // },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "env", "react"
          ]
        }
      },
      exclude: /node_modules/
    }]
  }
}