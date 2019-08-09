const express = require('express')
const fs = require('fs')
const ReactSSR = require('react-dom/server')
const path  = require('path')
const isDev = process.env.NODE_ENV === 'development'
const app = express()

if(!isDev) {
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')
  const serverEntry = require('../dist/server-entry').default
  app.use('/public', express.static(path.join(__dirname, '../dist')))

  app.get('*', function(req, res) {
    const appStr = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('app', appStr))
  })
}
else{
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.listen(3000, function() {
  console.log('servere is listening on 3000')
})