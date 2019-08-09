const axios = require('axios')
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const path = require('path')
const ReactSSR = require('react-dom/server')
const proxy = require('http-proxy-middleware')

const config = require('../../build/webpack.config.server') // server配置

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
      .then((res) => {
        resolve(res.data)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

const Module = module.constructor

const mfs = new MemoryFs()
const webpackCompiler = webpack(config)

webpackCompiler.outputFileSystem = mfs

let serverBundle
webpackCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson
  stats.errors && stats.errors.forEach((err) => console.error(err))
  stats.warnings && stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(config.output.path, config.output.filename)
  const bundle = mfs.readFileSync(bundlePath, 'utf-8')

  const m = new Module()
  m._compile(bundle, 'server-entry.js')
  serverBundle = m.exports.default
})

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))
  app.get('*', function (req, res) {
    getTemplate().then(template => {
      const content = ReactSSR.renderToString(serverBundle)
      res.send(template.replace('<!-- app -->', content))
    })
  })
}
