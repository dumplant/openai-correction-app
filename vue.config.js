const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    proxy: {
      "/pro": {
        target: "https://api.openai-proxy.com",
        changeOrigin: true,
        pathRewrite: {
          "^/pro": '/pro',
        },
      },
    },
  },
};
