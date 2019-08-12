import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'; // 设置这里
import { Provider } from 'mobx-react';
import App from './views/App'
import appState from './store/app-state'

const root = document.getElementById('root')

const render = Comp => {
  ReactDOM.render(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Comp key="app" />
        </BrowserRouter>
      </Provider>
    </AppContainer>, root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const nextApp = require('./views/App.jsx').default // eslint-disable-line
    render(nextApp)
  })
}
