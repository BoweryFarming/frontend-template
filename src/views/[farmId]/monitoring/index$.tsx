/**
 * @title Monitoring
 */

import React, { ReactElement } from 'react'
import { useParams } from 'react-router'

const Monitoring = (): ReactElement => {
  const { farmId } = useParams<RouteParams>()

  return (
    <div className='h-full w-full grid place-content-center text-center'>
      <h1 className='text-xl'>Hello monitoring for farm {farmId}!</h1>
      <p>This is monitoring!</p>
    </div>
  )
}

export default Monitoring
