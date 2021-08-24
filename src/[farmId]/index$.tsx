/**
 * @title Farm
 */

import React from 'react'
import { useParams } from 'react-router'

const Controls = () => {
  const { farmId } = useParams<RouteParams>()

  return (
    <div className='h-full w-full grid place-content-center text-center'>
      <h1 className='text-xl'>Hello farm {farmId}!</h1>
      <p>This is Farm: {farmId}!</p>
    </div>
  )
}

export default Controls
