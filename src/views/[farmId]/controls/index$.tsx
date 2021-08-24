/**
 * @title Controls
 */

import React from 'react'
import { useParams } from 'react-router'

const Controls = () => {
  const { farmId } = useParams<RouteParams>()

  return (
    <div className='h-full w-full grid place-content-center text-center'>
      <h1 className='text-xl'>Hello controls for farm {farmId}!</h1>
      <p>This is controls!</p>
    </div>
  )
}

export default Controls
