import React, { ReactElement, useContext } from 'react'
import Link from './Link'
import { themeConfigCtx } from '../ctx'

const AppHeader = (): ReactElement => {
  const { topNavs = [], logo } = useContext(themeConfigCtx)

  return (
    <header className='flex items-center justify-between border-b'>
      <Link to={logo.path ?? '/'}>
        {logo.children}
      </Link>
      {topNavs && (
        <nav className='flex'>
          {topNavs.map((item) =>
            <Link
              key={item.to ?? item.href}
              className='block p-3'
              activeClassName='bg-green-300'
              {...item}
            />
          )}
        </nav>
      )}
    </header>
  )
}

export default AppHeader
