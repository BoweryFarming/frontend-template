import React, { useContext, useMemo } from 'react'
import { useStaticData } from 'vite-plugin-react-pages/client'
import AppHeader from './Header'
import AppSider from './Sider'
import { themeConfigCtx, themePropsCtx } from '../ctx'
import type { SideNavsContext } from '../types'

const AppLayout: React.FC<unknown> = ({ children }) => {
  const { sideNavs } = useContext(themeConfigCtx)
  const themeProps = useContext(themePropsCtx)
  const staticData = useStaticData()

  const sideNavsData = useMemo(() => {
    if (typeof sideNavs === 'function') {
      const themeContext: SideNavsContext = { ...themeProps, staticData }
      return sideNavs(themeContext)
    }

    if (Array.isArray(sideNavs)) {
      return sideNavs
    }

    throw new Error('Incorrect Nav Configuration.')
  }, [themeProps, sideNavs, staticData])

  return (
    <>
      <AppHeader />
      <main className='flex h-full'>
        {sideNavsData && <AppSider sideNavsData={sideNavsData} />}
        {children}
      </main>
    </>
  )
}

export default AppLayout
