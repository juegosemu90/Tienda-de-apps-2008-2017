import { push, setTitle, registerRoot }       from '../router.js'
import { categories, getByCategory }          from '../../data/store.js'
import { empty, appList, listGroup, navRow }  from '../ui.js'
import { openDetail }                         from './detail.js'

const SCREEN = document.getElementById('screen-categories')

export function renderCategories() {
  const rows = categories.map(c =>
    navRow({ icon: c.icon, bg: c.bg, label: c.name, dataAttr: `data-cat="${c.name}" data-icon="${c.icon}"` })
  ).join('')
  SCREEN.innerHTML = `<div><div class="list-header">Categorías</div>${rows}</div>`
  SCREEN.querySelectorAll('.list-row[data-cat]').forEach(row =>
    row.addEventListener('click', () => showCategory(row.dataset.cat, row.dataset.icon))
  )
}

function showCategory(name, icon) {
  push('Categorías', renderCategories)
  setTitle(name)
  const list = getByCategory(name)
  SCREEN.innerHTML = list.length
    ? listGroup('Aplicaciones', appList(list))
    : empty({ icon, title: 'Sin aplicaciones', body: `No hay apps en ${name} todavía.` })
  SCREEN.querySelectorAll('.app-row').forEach(row => {
    const app = list.find(a => a.id === row.dataset.id)
    if (app) row.addEventListener('click', e => {
      if (e.target.closest('button')) return
      openDetail(app, () => showCategory(name, icon))
    })
  })
}

registerRoot('categories', renderCategories)
renderCategories()
