import type { ReactElement } from 'react'
import type { RouteProps } from 'react-router'
import type { LoadState, PagesLoaded } from 'vite-plugin-react-pages/clientTypes'

export interface MenuConfig {
  readonly children: ReactElement | string

  /**
   * The url.
   * @example 'https://www.google.com/'
   */
  readonly href?: string

  /**
   * The path in the current webapp.
   * @example '/posts/hello-world'
   */
  readonly to?: string
  readonly activeIfMatch?: string | string[] | RouteProps
}

export interface SideNavsContext {
  readonly loadState: LoadState
  readonly loadedData: PagesLoaded
  readonly staticData: Record<string, any>
}

export interface ThemeConfig {
  logo: {
    path?: string
    children: React.ReactNode
  }
  topNavs?: ReadonlyArray<MenuConfig>
  sideNavs?:
    | ReadonlyArray<MenuConfig>
    | ((ctx: SideNavsContext) => ReadonlyArray<MenuConfig> | null | undefined)
}
