import React from 'react'
import { add } from './utils'

export default function Test() {
  const res = add(1, 5)
  return (
    <div>
      <h3>this is Test!!!</h3>
      <h4>{res}</h4>
    </div>
  )
}
