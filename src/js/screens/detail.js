import { push, setTitle, currentTab } from '../router.js'
import { appDetail } from '../ui.js'

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
}
