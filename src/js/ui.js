export const esc = s =>
  String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;')
                 .replace(/>/g,'&gt;').replace(/"/g,'&quot;')

export const CHEVRON =
  `<svg class="list-row__chevron" viewBox="0 0 8 13" aria-hidden="true">
     <polyline points="1,1 7,6.5 1,12"/>
   </svg>`

export function stars(rating = 0) {
  const full  = Math.floor(rating)
  const half  = rating - full >= 0.5 ? 1 : 0
  const empty = 5 - full - half
  return `<div class="app-row__stars">
    ${'<span>★</span>'.repeat(full)}
    ${'<span>⯨</span>'.repeat(half)}
    ${'<span>☆</span>'.repeat(empty)}
  </div>`
}

export function ratingCount(n) {
  if (!n) return ''
  const fmt = n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n)
  return `<span class="app-row__rcount">${fmt}</span>`
}

export function actionBtn(app) {
  return app.price === 0
    ? `<button class="btn-get"   data-id="${esc(app.id)}">Gratis</button>`
    : `<button class="btn-price" data-id="${esc(app.id)}">$${Number(app.price).toFixed(2)}</button>`
}

export function iconHTML(app, extraClass = '', size = 60) {
  const radius = Math.round(size * 0.22)
  const fs     = Math.round(size * 0.44)
  const isUrl  = (app.icon || '').startsWith('http')
  const inner  = isUrl
    ? `<img src="${esc(app.icon)}" alt="${esc(app.name)}"
            style="width:${Math.round(size*.85)}px;height:${Math.round(size*.85)}px;
                   object-fit:contain;position:relative;z-index:1;">`
    : `<span class="app-row__icon-text" style="font-size:${fs}px">${esc(app.icon || '?')}</span>`
  return `
    <div class="app-row__icon ${extraClass}"
         style="width:${size}px;height:${size}px;
                border-radius:${radius}px;
                background:${esc(app.iconBg || '#ccc')}">
      ${inner}
    </div>`
}

export function appRowHTML(app, rank = null) {
  const rankEl = rank !== null
    ? `<span class="app-row__rank">${rank}</span>` : ''
  return `
    <div class="app-row" data-id="${esc(app.id)}">
      ${rankEl}
      ${iconHTML(app)}
      <div class="app-row__info">
        <div class="app-row__name">${esc(app.name)}</div>
        <div class="app-row__dev">${esc(app.dev ?? '')}</div>
        <div class="app-row__meta">
          ${stars(app.rating)}
          ${ratingCount(app.ratings)}
        </div>
      </div>
      ${actionBtn(app)}
    </div>`
}

export function appList(list, ranked = false) {
  return list.map((a, i) => appRowHTML(a, ranked ? i + 1 : null)).join('')
}

export function listGroup(header, body) {
  return `<div><div class="list-header">${esc(header)}</div>${body}</div>`
}

export function navRow({ icon, bg, label, dataAttr = '' }) {
  return `
    <div class="list-row" ${dataAttr}>
      <div class="list-row__icon" style="background:${esc(bg)}">${esc(icon)}</div>
      <span class="list-row__label">${esc(label)}</span>
      ${CHEVRON}
    </div>`
}

export function empty({ icon = '📭', title, body = '' }) {
  return `
    <div class="empty">
      <div class="empty__icon">${icon}</div>
      <h3 class="empty__title">${esc(title)}</h3>
      <p  class="empty__body">${body}</p>
    </div>`
}

/* ── Old versions grid ───────────────────────────────────────── */
export function oldVersionsHTML(app) {
  if (!app.oldVersions || !app.oldVersions.length) return ''

  const iconSize   = Math.min(70, Math.round(window.innerWidth * 0.18))
  const iconRadius = Math.round(iconSize * 0.22)
  const iconFs     = Math.round(iconSize * 0.44)

  const items = app.oldVersions.map(v => `
    <div class="oldver__item" data-ver="${esc(v.version)}" style="cursor:pointer">
      <div class="oldver__icon"
           style="width:${iconSize}px;height:${iconSize}px;
                  border-radius:${iconRadius}px;
                  background:${esc(app.iconBg || '#ccc')}">
        ${(app.icon || '').startsWith('http')
          ? `<img src="${esc(app.icon)}" alt="${esc(app.name)}"
                  style="width:${Math.round(iconSize*.85)}px;height:${Math.round(iconSize*.85)}px;
                         object-fit:contain;position:relative;z-index:1;">`
          : `<span class="oldver__icon-text" style="font-size:${iconFs}px">${esc(app.icon || '?')}</span>`
        }
      </div>
      <span class="oldver__version">${esc(v.version)}</span>
    </div>`).join('')

  return `
    <div class="detail__section">
      <h3>Versiones anteriores</h3>
      <div class="oldver__grid">${items}</div>
    </div>`
}

/* ── App detail page ─────────────────────────────────────────── */
export function appDetail(app) {
  const priceLabel = app.price === 0 ? 'Gratis' : `$${Number(app.price).toFixed(2)}`
  const iconSize   = Math.min(88, Math.round(window.innerWidth * 0.22))
  const iconRadius = Math.round(iconSize * 0.22)
  const iconFs     = Math.round(iconSize * 0.44)

  const kv = (k, v) => v != null && v !== ''
    ? `<div class="detail__kv">
         <span class="detail__kv-key">${esc(k)}</span>
         <span class="detail__kv-val">${esc(String(v))}</span>
       </div>` : ''

  /* "Older versions" button — only if the app has oldVersions */
  const oldVerBtn = (app.oldVersions && app.oldVersions.length)
    ? `<button class="btn-oldver" id="btn-oldver">Versiones anteriores</button>`
    : ''

  return `
    <div class="detail">
      <div class="detail__hero">
        <div class="detail__icon"
             style="width:${iconSize}px;height:${iconSize}px;
                    border-radius:${iconRadius}px;
                    background:${esc(app.iconBg || '#ccc')}">
          ${(app.icon || '').startsWith('http')
            ? `<img src="${esc(app.icon)}" alt="${esc(app.name)}"
                    style="width:${Math.round(iconSize*.85)}px;height:${Math.round(iconSize*.85)}px;
                           object-fit:contain;position:relative;z-index:1;">`
            : `<span class="detail__icon-text" style="font-size:${iconFs}px">${esc(app.icon || '?')}</span>`
          }
        </div>
        <div class="detail__meta">
          <div class="detail__name">${esc(app.name)}</div>
          <div class="detail__dev">${esc(app.dev ?? '')}</div>
          <div class="detail__rating-row">
            <div class="app-row__stars">
              ${(() => {
                const f = Math.floor(app.rating ?? 0)
                const h = (app.rating ?? 0) - f >= 0.5 ? 1 : 0
                const e = 5 - f - h
                return '<span>★</span>'.repeat(f) + '<span>⯨</span>'.repeat(h) + '<span>☆</span>'.repeat(e)
              })()}
            </div>
            ${ratingCount(app.ratings)}
          </div>
        </div>
      </div>

      <div class="detail__actions">
        <span class="detail__price">${esc(priceLabel)}</span>
        ${actionBtn(app)}
      </div>

      <div class="detail__section">
        <h3>Información</h3>
        ${kv('Categoría',     app.category)}
        ${kv('Desarrollador', app.dev)}
        ${kv('Versión',       app.version)}
        ${kv('Tamaño',        app.size)}
        ${kv('Precio',        priceLabel)}
      </div>

      ${oldVerBtn ? `
      <div class="detail__section detail__section--oldver" id="oldver-section">
        ${oldVerBtn}
        <div id="oldver-content" style="display:none">
          ${oldVersionsHTML(app)}
        </div>
      </div>` : ''}

    </div>`
}

/* ── Detail page for a specific old version ─────────────────── */
export function oldVersionDetail(app, ver) {
  const iconSize   = Math.min(88, Math.round(window.innerWidth * 0.22))
  const iconRadius = Math.round(iconSize * 0.22)
  const iconFs     = Math.round(iconSize * 0.44)

  return `
    <div class="detail">
      <div class="detail__hero">
        <div class="detail__icon"
             style="width:${iconSize}px;height:${iconSize}px;
                    border-radius:${iconRadius}px;
                    background:${esc(app.iconBg || '#ccc')}">
          ${(app.icon || '').startsWith('http')
            ? `<img src="${esc(app.icon)}" alt="${esc(app.name)}"
                    style="width:${Math.round(iconSize*.85)}px;height:${Math.round(iconSize*.85)}px;
                           object-fit:contain;position:relative;z-index:1;">`
            : `<span class="detail__icon-text" style="font-size:${iconFs}px">${esc(app.icon || '?')}</span>`
          }
        </div>
        <div class="detail__meta">
          <div class="detail__name">${esc(app.name)}</div>
          <div class="detail__dev">${esc(app.dev ?? '')}</div>
          <div class="detail__rating-row">
            <div class="app-row__stars">
              ${(() => {
                const f = Math.floor(app.rating ?? 0)
                const h = (app.rating ?? 0) - f >= 0.5 ? 1 : 0
                const e = 5 - f - h
                return '<span>★</span>'.repeat(f) + '<span>⯨</span>'.repeat(h) + '<span>☆</span>'.repeat(e)
              })()}
            </div>
            ${ratingCount(app.ratings)}
          </div>
        </div>
      </div>

      <div class="detail__actions">
        <span class="detail__price">Gratis</span>
        <button class="btn-get">Gratis</button>
      </div>

      <div class="detail__section">
        <h3>Información</h3>
        <div class="detail__kv">
          <span class="detail__kv-key">Categoría</span>
          <span class="detail__kv-val">${esc(app.category)}</span>
        </div>
        <div class="detail__kv">
          <span class="detail__kv-key">Desarrollador</span>
          <span class="detail__kv-val">${esc(app.dev ?? '')}</span>
        </div>
        <div class="detail__kv">
          <span class="detail__kv-key">Versión</span>
          <span class="detail__kv-val">${esc(ver.version)}</span>
        </div>
        <div class="detail__kv">
          <span class="detail__kv-key">Tamaño</span>
          <span class="detail__kv-val">${esc(ver.size ?? '')}</span>
        </div>
        <div class="detail__kv">
          <span class="detail__kv-key">Precio</span>
          <span class="detail__kv-val">Gratis</span>
        </div>
      </div>
    </div>`
}
