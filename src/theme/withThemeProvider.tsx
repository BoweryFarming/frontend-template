import React from 'react'
import { themeConfigCtx, themePropsCtx } from './ctx'
import type { ThemeProps } from 'vite-plugin-react-pages/clientTypes'
import type { ThemeConfig } from './types'

export const withThemeProvider = (
  themeConfig: ThemeConfig,
  Component: React.FC<ThemeProps>
): React.FC<ThemeProps> => {
  return (props) => {
    return (
      <themeConfigCtx.Provider value={themeConfig}>
        <themePropsCtx.Provider value={props}>
          <Component {...props} />
        </themePropsCtx.Provider>
      </themeConfigCtx.Provider>
    )
  }
}
