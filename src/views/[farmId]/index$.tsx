/**
 * @title Farm
 */

import React, { ReactElement } from 'react'
import { useParams } from 'react-router'

const Farm = (): ReactElement => {
  const { farmId } = useParams<RouteParams>()

  return (
    <div className='h-full w-full grid place-content-center text-center'>
      <h1 className='text-xl'>Hello farm {farmId}!</h1>
      <p>This is a farm!</p>
    </div>
  )
}

export default Farm
