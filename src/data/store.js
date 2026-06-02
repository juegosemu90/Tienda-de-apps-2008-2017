import { apps }        from './apps.js'
import { categories }  from './categories.js'

export { apps, categories }

export const getNew        = ()    => apps.filter(a => a.isNew)
export const getFree       = ()    => apps.filter(a => a.price === 0)
export const getSale       = ()    => apps.filter(a => a.sale)
export const getUpdates    = ()    => apps.filter(a => a.hasUpdate)
export const getByCategory = name  => apps.filter(a => a.category === name)

export const getTop25Free = () =>
  apps.filter(a => a.price === 0)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 25)

export const getTop25Paid = () =>
  apps.filter(a => a.price > 0)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 25)

export const search = q => {
  const lq = q.trim().toLowerCase()
  if (!lq) return []
  return apps.filter(a =>
    a.name.toLowerCase().includes(lq) ||
    a.category.toLowerCase().includes(lq) ||
    (a.dev ?? '').toLowerCase().includes(lq)
  )
}
