import cn from 'classnames'
import React, { PropsWithChildren, ReactElement, useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useLocation, matchPath, useParams } from 'react-router'
import type { MenuConfig } from '../theme/types'

interface Props extends MenuConfig {
  className?: string
  activeClassName?: string
  rest?: unknown
}

const Link = ({ href, to, className, activeClassName, activeIfMatch, children, ...rest }: PropsWithChildren<Props>): ReactElement => {
  const location = useLocation()
  const params = useParams<RouteParams>()

  let path = to ?? ''

  for (const [key, value] of Object.entries(params)) {
    path = path.replaceAll(`:${key}`, value as string)
  }

  const active = useMemo(() => {
    return matchPath(location.pathname, activeIfMatch ?? {
      path,
      exact: true,
    })
  }, [location.pathname, path])

  // If params still exist in the route, don't render it.
  if (path.includes(':')) {
    return <></>
  }

  if (to) {
    return (
      <RouterLink
        to={path}
        className={active ? cn(activeClassName, className) : className}
        {...rest}
      >
        {children}
      </RouterLink>
    )
  }

  if (href) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  throw new Error('invalid link config')
}

export default Link