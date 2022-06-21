const publicPath = process.env.NODE_ENV === 'production' ? '/try/' : '/' // <-- add this line

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: publicPath,
  transpileDependencies: true
})
