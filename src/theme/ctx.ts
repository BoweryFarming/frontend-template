import { createContext } from 'react'
import { ThemeConfig } from './types'
import type { ThemeProps } from 'vite-plugin-react-pages/clientTypes'

export const themeConfigCtx = createContext<ThemeConfig>({
  logo: {
    children: null,
  },
})

export const themePropsCtx = createContext<ThemeProps>({
  loadState: {
    type: 'loading',
    routePath: '/',
  },
  loadedData: {},
})
