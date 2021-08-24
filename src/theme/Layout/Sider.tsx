import React from 'react'
import Link from './Link'
import type { MenuConfig } from '../types'

interface Props {
  sideNavsData: readonly MenuConfig[] | undefined
}

const Sider: React.FC<Props> = ({ sideNavsData }) => {
  if (sideNavsData === undefined) {
    return null
  }

  return (
    <nav className='min-w-[150px] p-1 border-r'>
      {sideNavsData.map((item) =>
        <Link
          key={item.to ?? item.href}
          className='block py-1 px-2 rounded-sm'
          activeClassName='bg-green-300'
          {...item}
        />
      )}
    </nav>
  )
}

export default Sider
