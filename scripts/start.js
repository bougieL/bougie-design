const devServer = require('../config/webpackDevServer.config')

devServer.listen(2999, '0.0.0.0', () => {
  console.log(`server started at http://localhost:2999`)
})