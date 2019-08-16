const express = require('express')
const fs = require('fs')
const ReactSSR = require('react-dom/server')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  maxAge: 60 * 10 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'mathew react'
}))

app.use('/api/user', require('./util/login'))
app.use('/api', require('./util/proxy'))

if (!isDev) {
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')
  const serverEntry = require('../dist/server-entry').default
  app.use('/public', express.static(path.join(__dirname, '../dist')))

  app.get('*', function (req, res) {
    const appStr = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('app', appStr))
  })
} else {
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.listen(3000, function () {
  console.log('servere is listening on 3000')
})
