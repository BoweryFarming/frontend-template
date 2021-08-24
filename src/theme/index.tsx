import React from 'react'
import type { ThemeProps } from 'vite-plugin-react-pages/clientTypes'
import AppLayout from './Layout'
import { withThemeProvider } from './withThemeProvider'
import { ThemeConfig } from './types'

export const createTheme = (themeConfig: ThemeConfig): React.FC<ThemeProps> => {
  const Component = (props: ThemeProps) => {
    const { loadState, loadedData } = props

    if (loadState.type === 'loading') {
      return <AppLayout></AppLayout>
    }

    if (loadState.type === 'load-error') {
      const errMsg = loadState.error?.message
      return (
        <AppLayout>
          <h1>Load Error</h1>
          {errMsg && <p>{errMsg}</p>}
        </AppLayout>
      )
    }

    const pageData = loadedData[loadState.routePath]

    if (loadState.type === '404' || !pageData) {
      const Comp404 = loadedData['/404']?.['main']?.default
      return <AppLayout>{Comp404 ? <Comp404 /> : <p>Page not found.</p>}</AppLayout>
    }

    const body = []
    for (const [key, dataPart] of Object.entries(pageData)) {
      const ContentComp = dataPart.default
      body.push(<ContentComp key={key} />)
    }

    return <AppLayout>{body}</AppLayout>
  }

  return withThemeProvider(themeConfig, Component)
}
