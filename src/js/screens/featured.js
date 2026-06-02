import { push, setTitle, registerRoot } from '../router.js'
import { apps, getFree, getSale }       from '../../data/store.js'
import { empty, appList, listGroup, CHEVRON } from '../ui.js'
import { openDetail }                   from './detail.js'

const SCREEN = document.getElementById('screen-featured')

export function renderFeatured() {
  let html = `
    <div>
      <div class="list-header">Secciones</div>
      <div class="list-row" id="row-free">
        <div class="list-row__icon" style="background:linear-gradient(135deg,#4cd964,#2e8b57)">🆓</div>
        <span class="list-row__label">Gratis</span>${CHEVRON}
      </div>
      <div class="list-row" id="row-sale">
        <div class="list-row__icon" style="background:linear-gradient(135deg,#ff9500,#ff3b30)">🏷️</div>
        <span class="list-row__label">Precios reducidos</span>${CHEVRON}
      </div>
    </div>`

  html += apps.length
    ? listGroup('Aplicaciones destacadas', appList(apps))
    : empty({ icon: '🏪', title: 'La tienda está vacía', body: 'Pronto habrá aplicaciones increíbles aquí.' })

  SCREEN.innerHTML = html

  document.getElementById('row-free').onclick = () => showSection('free', 'Gratis')
  document.getElementById('row-sale').onclick = () => showSection('sale', 'Precios reducidos')

  bindRows(SCREEN, apps, renderFeatured)
}

function showSection(type, title) {
  push('Destacados', renderFeatured)
  setTitle(title)
  const list = type === 'free' ? getFree() : getSale()
  SCREEN.innerHTML = list.length
    ? listGroup('Aplicaciones', appList(list))
    : empty({ icon: '📭', title: 'Sin aplicaciones', body: 'Esta sección está vacía.' })
  bindRows(SCREEN, list, () => showSection(type, title))
}

export function bindRows(container, list, backFn) {
  container.querySelectorAll('.app-row').forEach(row => {
    const app = list.find(a => a.id === row.dataset.id)
    if (app) row.addEventListener('click', e => {
      if (e.target.closest('button')) return
      openDetail(app, backFn)
    })
  })
}

registerRoot('featured', renderFeatured)
renderFeatured()
