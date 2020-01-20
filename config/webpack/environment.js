const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const RoutesGeneratorPlugin = require('./loaders/routes_generator')

environment.loaders.append('typescript', typescript)
environment.config.merge({
  resolve: {
    plugins: [new TsconfigPathsPlugin({configFile: __dirname+"/../../tsconfig.json"})]
  },
  plugins: [
    new RoutesGeneratorPlugin(),
  ],
})

module.exports = environment
