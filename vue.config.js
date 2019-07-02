// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         ws: false,
//         // target: "https://cnodejs.org/api/v1",
//         target: "https://api-m.mtime.cn",
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": ""
//         }
//       }
//     }
//   }
// };
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        ws: false,
        target: "https://cnodejs.org",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}

