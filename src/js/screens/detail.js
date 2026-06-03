import { push, setTitle, currentTab } from '../router.js'
import { appDetail, oldVersionDetail } from '../ui.js'

const SCREENS = {
  featured:   () => document.getElementById('screen-featured'),
  categories: () => document.getElementById('screen-categories'),
  top25:      () => document.getElementById('screen-top25'),
  search:     () => document.getElementById('screen-search'),
  updates:    () => document.getElementById('screen-updates'),
}

export function openDetail(app, restoreFn) {
  const tab    = currentTab()
  const screen = SCREENS[tab]()
  const short  = app.name.length > 18 ? app.name.slice(0, 16) + '…' : app.name

  push(short, restoreFn || (() => {}))
  setTitle(short)
  screen.innerHTML = appDetail(app)

  // ── Wire "Versiones anteriores" toggle button ──────────────
  const btn     = screen.querySelector('#btn-oldver')
  const content = screen.querySelector('#oldver-content')
  if (btn && content) {
    btn.addEventListener('click', () => {
      const open = content.style.display !== 'none'
      content.style.display = open ? 'none' : 'block'
      btn.textContent = open ? 'Versiones anteriores' : 'Ocultar versiones'
    })

    // ── Wire clicks on individual old version items ──────────
    content.querySelectorAll('.oldver__item[data-ver]').forEach(item => {
      item.addEventListener('click', () => {
        const ver = app.oldVersions.find(v => v.version === item.dataset.ver)
        if (!ver) return
        openOldVersion(app, ver, () => openDetail(app, restoreFn))
      })
    })
  }
}

function openOldVersion(app, ver, restoreFn) {
  const tab    = currentTab()
  const screen = SCREENS[tab]()
  const title  = `v${ver.version}`

  push(title, restoreFn)
  setTitle(title)
  screen.innerHTML = oldVersionDetail(app, ver)
}
