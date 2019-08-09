import React from 'react'
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // 设置这里
import App from './App.jsx'


const root = document.getElementById('root')

const render = Comp => {
  ReactDOM.render(
    <AppContainer>
      <Comp />
    </AppContainer>, root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const nextApp = require('./App.jsx').default // eslint-disable-line
    render(nextApp)
  })
}
