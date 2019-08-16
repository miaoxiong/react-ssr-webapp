import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'

import { createStoreMap } from './store'
import App from './views/App'

// 让mobx渲染时不会重复数据变换
useStaticRendering(true)

export default (stores, routerContex, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContex} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)

export {
  createStoreMap,
}
