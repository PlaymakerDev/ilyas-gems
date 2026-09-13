import type { OverallMenuItem } from './overall'

export const isMenuItemActive = (pathname: string, item: OverallMenuItem) => {
  if (pathname === item.path_active) return true
  if (item.path_list.some((path) => pathname.startsWith(path))) return true
  return pathname.startsWith(`${item.path}/`)
}
