import { search }                          from '../../data/store.js'
import { empty, appList, listGroup, esc }  from '../ui.js'
import { openDetail }                      from './detail.js'
import { registerRoot }                    from '../router.js'

const $input   = document.getElementById('searchInput')
const $cancel  = document.getElementById('searchCancel')
const $results = document.getElementById('searchResults')

function render(q) {
  if (!q) {
    $results.innerHTML = empty({ icon: '🔍', title: 'Busca apps y juegos', body: 'Escribe para buscar en el App Store.' })
    return
  }
  const hits = search(q)
  $results.innerHTML = hits.length
    ? listGroup(`${hits.length} resultado${hits.length !== 1 ? 's' : ''}`, appList(hits))
    : empty({ icon: '🔍', title: 'Sin resultados', body: `No hay resultados para «${esc(q)}».` })
  $results.querySelectorAll('.app-row').forEach(row => {
    const app = hits.find(a => a.id === row.dataset.id)
    if (app) row.addEventListener('click', e => {
      if (e.target.closest('button')) return
      openDetail(app, () => render($input.value.trim()))
    })
  })
}

function resetSearch() {
  $input.value = ''
  $cancel.classList.remove('visible')
  render('')
}

$input.addEventListener('focus', () => $cancel.classList.add('visible'))
$input.addEventListener('blur',  () => {
  if (!$input.value) setTimeout(() => $cancel.classList.remove('visible'), 150)
})
$input.addEventListener('input', () => render($input.value.trim().toLowerCase()))
$cancel.addEventListener('click', () => {
  $input.value = ''
  $input.blur()
  $cancel.classList.remove('visible')
  render('')
})

registerRoot('search', resetSearch)
render('')
