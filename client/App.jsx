import React from 'react'
import Child from './Child'
import Test from './Test'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>this is app!</h1>
    <Child />
    <Test />
  </div>
)

// export default class App extends Component {
//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>this is app!</h1>
//         <Child></Child>
//         <Test></Test>
//       </div>
//     )
//   }
// }
