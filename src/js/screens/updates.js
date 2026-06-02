import { getUpdates }               from '../../data/store.js'
import { empty, appList, listGroup } from '../ui.js'
import { openDetail }               from './detail.js'
import { registerRoot }             from '../router.js'

const $body   = document.getElementById('updates-body')
const $updAll = document.getElementById('updates-btn-all')

export function renderUpdates() {
  const list = getUpdates()
  if (!list.length) {
    $body.innerHTML = empty({ icon: '✅', title: 'Todo al día', body: 'No hay actualizaciones disponibles.' })
    $updAll.style.display = 'none'
    return
  }
  $updAll.style.display = 'block'
  $body.innerHTML = listGroup('Actualizaciones disponibles', appList(list))
  $body.querySelectorAll('.app-row').forEach(row => {
    const app = list.find(a => a.id === row.dataset.id)
    if (app) row.addEventListener('click', e => {
      if (e.target.closest('button')) return
      openDetail(app, renderUpdates)
    })
  })
}

$updAll.addEventListener('click', () => alert('Actualizando todas las apps…'))

registerRoot('updates', renderUpdates)
renderUpdates()
