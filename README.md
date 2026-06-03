# 🎮 Play Store Classic — React + Vite

Tienda de aplicaciones inspirada en la Play Store clásica de Android 4.x, con diseño moderno 2026.

## 🚀 Instalación y ejecución

```bash
npm install
npm run dev
```

Luego abre: http://localhost:5173

## ✨ Características

- 📱 **Responsive total**: móvil, tablet y escritorio
- 🌙 **Modo oscuro/claro**: toggle en el header, recuerda preferencia
- 🎨 **Material Design clásico** + modernizado
- 🔍 **Búsqueda** con sugerencias en tiempo real
- 🗂️ **10 categorías** con páginas dedicadas
- 📊 **Top Charts** con ranking visual
- 📱 **Detalle de app** con screenshots, ratings, info y apps similares
- ⚡ **Animaciones suaves** y transiciones CSS
- 🧩 **Componentes reutilizables** (AppCard, Section, Header, etc.)

## 📁 Estructura

```
src/
├── components/      # Componentes reutilizables
│   ├── Header       # Barra superior con búsqueda
│   ├── BottomNav    # Navegación móvil inferior
│   ├── SideNav      # Sidebar para tablet/desktop
│   ├── AppCard      # Tarjeta de app (3 variantes)
│   ├── Section      # Sección con scroll horizontal
│   └── StarRating   # Estrellas de valoración
├── pages/           # Páginas de la app
│   ├── HomePage     # Inicio con featured, top, categorías
│   ├── AppDetailPage# Detalle completo de una app
│   ├── CategoryPage # Apps por categoría
│   ├── SearchPage   # Búsqueda con sugerencias
│   ├── CategoriesPage# Grid de todas las categorías
│   └── TopPage      # Top charts ranking
├── data/
│   └── apps.js      # 20 apps de ejemplo + helpers
├── context/
│   └── ThemeContext  # Gestión modo oscuro/claro
└── index.css        # Variables CSS, tema global
```

## 🎨 Colores Material Design

- Verde principal: `#689F38`
- Azul: `#1565C0`
- Teal: `#00897B`

## 🛠️ Tech Stack

- **React 18** + React Router DOM 6
- **Vite 5** (build tool ultrarrápido)
- **Lucide React** (iconos)
- **CSS Variables** (theming dinámico)
- Sin UI library externa — 100% custom
