module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    //development
    publicPath: "/static/"
    //production
    //publicPath: "./public/"
  },
  resolve: {   
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: [ "react", "es2015", "stage-0" ],
          env: {
            development: {
              presets: ["react-hmre"]
            }
          }
        }
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  }
}