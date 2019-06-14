module.exports = {
  // ... 提供可全局使用的scss变量
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variable.scss";
        `
      }
    }
  }
}