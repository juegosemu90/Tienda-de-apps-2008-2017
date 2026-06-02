import { getTop25Paid, getTop25Free } from '../../data/store.js'
import { empty, appList }             from '../ui.js'
import { openDetail }                 from './detail.js'
import { registerRoot }               from '../router.js'

const $paid = document.getElementById('top25-paid')
const $free = document.getElementById('top25-free')
const $btnP = document.getElementById('top25-btn-paid')
const $btnF = document.getElementById('top25-btn-free')

function renderPane(container, list, label) {
  container.innerHTML = list.length
    ? appList(list, true)
    : empty({ icon: '🏆', title: 'Sin apps aún', body: `El ranking aparecerá cuando haya apps ${label}.` })
  container.querySelectorAll('.app-row').forEach(row => {
    const app = list.find(a => a.id === row.dataset.id)
    if (app) row.addEventListener('click', e => {
      if (e.target.closest('button')) return
      openDetail(app, renderTop25)
    })
  })
}

export function renderTop25() {
  renderPane($paid, getTop25Paid(), 'de pago')
  renderPane($free, getTop25Free(), 'gratuitas')
  switchMode('paid')
}

export function switchMode(m) {
  $btnP.classList.toggle('active', m === 'paid')
  $btnF.classList.toggle('active', m === 'free')
  $paid.style.display = m === 'paid' ? 'block' : 'none'
  $free.style.display = m === 'free' ? 'block' : 'none'
}

$btnP.addEventListener('click', () => switchMode('paid'))
$btnF.addEventListener('click', () => switchMode('free'))

registerRoot('top25', renderTop25)
renderTop25()
