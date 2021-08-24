import './index.css'

import React from 'react'
import { createTheme } from './theme'

export default createTheme({
  logo: {
    children: (
      <div className='flex p-2'>
        <img className='h-6 mr-2' src='/src/icon.svg' />
        <h3>Frontend Template</h3>
      </div>
    ),
  },
  topNavs: [
    { children: 'Farm 1', to: '/1', activeIfMatch: { path: '/1', exact: false } },
    { children: 'Farm 2', to: '/2', activeIfMatch: { path: '/2', exact: false } },
  ],
  sideNavs: [
    { children: 'Monitoring', to: '/:farmId/monitoring' },
    { children: 'Controls', to: '/:farmId/controls' },
    { children: 'Admin', to: '/admin',  }
  ],
})
