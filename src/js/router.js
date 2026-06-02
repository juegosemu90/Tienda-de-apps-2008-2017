const TITLES = {
  featured:   'Destacados',
  categories: 'Categorías',
  top25:      'Top 25',
  search:     'Buscar',
  updates:    'Actualizaciones',
}

let _tab   = 'featured'
let _stack = []

// Stores the "root render function" for each tab so switching
// away and back always restores the tab to its clean state.
const _tabRoots = {}

const $title   = document.getElementById('navTitle')
const $backBtn = document.getElementById('backBtn')

export const currentTab = () => _tab
export const setTitle   = t  => { $title.textContent = t }
export const showBack   = () => { $backBtn.classList.add('visible') }
export const hideBack   = () => { $backBtn.classList.remove('visible') }

/** Each screen calls this once on init to register its root renderer. */
export function registerRoot(tab, fn) {
  _tabRoots[tab] = fn
}

export function push(title, restoreFn) {
  _stack.push({ title, restoreFn })
  showBack()
}

export function goBack() {
  if (!_stack.length) return
  const prev = _stack.pop()
  setTitle(prev.title)
  prev.restoreFn()
  if (!_stack.length) hideBack()
  window.scrollTo(0, 0)
}

export function switchTab(tab) {
  // Before leaving current tab, reset it to its root state
  // so it's clean if the user comes back later.
  if (_tabRoots[_tab]) {
    _tabRoots[_tab]()
  }

  document.querySelectorAll('.screen').forEach(s  => s.classList.remove('active'))
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
  document.getElementById('screen-' + tab).classList.add('active')
  document.getElementById('tab-'    + tab).classList.add('active')

  _tab   = tab
  _stack = []
  hideBack()
  setTitle(TITLES[tab])
  window.scrollTo(0, 0)
}

$backBtn.addEventListener('click', goBack)
window.switchTab = switchTab
