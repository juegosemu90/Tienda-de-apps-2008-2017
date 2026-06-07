export const categories = [
  { id: 'games', label: 'Juegos', icon: '🎮', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'social', label: 'Social', icon: '💬', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'productivity', label: 'Productividad', icon: '📊', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'entertainment', label: 'Entretenimiento', icon: '🎬', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'music', label: 'Música', icon: '🎵', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'tools', label: 'Herramientas', icon: '🔧', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'education', label: 'Educación', icon: '📚', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'health', label: 'Salud', icon: '❤️', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'finance', label: 'Finanzas', icon: '💰', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
  { id: 'photography', label: 'Fotografía', icon: '📷', color: '#9E9E9E', gradient: 'linear-gradient(135deg, #757575, #9E9E9E)' },
];

const AB_COLOR  = '#C62828';
const AB_BANNER = 'linear-gradient(135deg, #7F0000 0%, #C62828 50%, #EF5350 100%)';
const AB_DEV    = 'Rovio Entertainment';

// Iconos por rango de versión
const ICON_1   = 'https://archive.org/download/angrybirds-logos_5/Classic/1.0-3.0.0.png';
const ICON_312 = 'https://archive.org/download/angrybirds-logos_5/Classic/3.1.0-3.1.2.png';
const ICON_32  = 'https://archive.org/download/angrybirds-logos_5/Classic/3.2.0-6.0.1%20%26%206.1.5-8.0.3.png';
const ICON_606 = 'https://archive.org/download/angrybirds-logos_5/Classic/6.0.6.png';
const ICON_61  = 'https://archive.org/download/angrybirds-logos_5/Classic/6.1.0-6.1.2.png';

// Lista 1: versiones 1.x – 3.0.0 (icono ICON_1)
const abVersions1 = [
  { version: '1.0.0', size: '8 MB'  },
  { version: '1.2.0', size: '9 MB'  },
  { version: '1.2.1', size: '9 MB'  },
  { version: '1.3.0', size: '10 MB' },
  { version: '1.3.1', size: '10 MB' },
  { version: '1.3.2', size: '10 MB' },
  { version: '1.3.3', size: '11 MB' },
  { version: '1.3.4', size: '11 MB' },
  { version: '1.4.0', size: '12 MB' },
  { version: '1.4.1', size: '12 MB' },
  { version: '1.4.2', size: '13 MB' },
  { version: '1.4.2', size: '13 MB' },
  { version: '1.4.3', size: '13 MB' },
  { version: '1.4.4', size: '14 MB' },
  { version: '1.5.0', size: '15 MB' },
  { version: '1.5.1', size: '15 MB' },
  { version: '1.5.2', size: '16 MB' },
  { version: '1.5.3', size: '16 MB' },
  { version: '1.6.0', size: '17 MB' },
  { version: '1.6.1', size: '17 MB' },
  { version: '1.6.2', size: '18 MB' },
  { version: '1.6.3', size: '18 MB' },
  { version: '2.0.0', size: '20 MB' },
  { version: '2.0.2', size: '20 MB' },
  { version: '2.1.0', size: '21 MB' },
  { version: '2.2.0', size: '22 MB' },
  { version: '2.2.1', size: '22 MB' },
  { version: '2.3.0', size: '23 MB' },
  { version: '3.0.0', size: '25 MB' },
];

// Lista 2: 3.1.0 – 3.1.2 (icono ICON_312)
const abVersions312 = [
  { version: '3.1.0', size: '26 MB' },
  { version: '3.1.2', size: '26 MB' },
];

// Lista 3: 3.2.0 – 6.0.1 (icono ICON_32)
const abVersions32 = [
  { version: '3.2.0', size: '27 MB' },
  { version: '3.3.0', size: '28 MB' },
  { version: '3.3.1', size: '28 MB' },
  { version: '3.4.0', size: '29 MB' },
  { version: '3.4.1', size: '29 MB' },
  { version: '4.0.0', size: '32 MB' },
  { version: '4.3.2', size: '35 MB' },
  { version: '4.3.5', size: '35 MB' },
  { version: '5.0.1', size: '38 MB' },
  { version: '5.1.0', size: '39 MB' },
  { version: '5.2.0', size: '40 MB' },
  { version: '6.0.1', size: '43 MB' },
];

// Lista 4: 6.0.6 (icono ICON_606)
const abVersions606 = [
  { version: '6.0.6', size: '44 MB' },
];

// Lista 5: 6.1.0 – 6.2.1 (icono ICON_61)
const abVersions61 = [
  { version: '6.1.0', size: '45 MB' },
  { version: '6.1.1', size: '45 MB' },
  { version: '6.2.1', size: '46 MB' },
];

// Lista 6: 6.1.5 – 8.0.3 (icono ICON_32)
const abVersions615 = [
  { version: '6.1.5', size: '47 MB' },
  { version: '7.0.0', size: '50 MB' },
  { version: '7.1.0', size: '51 MB' },
  { version: '7.2.0', size: '52 MB' },
  { version: '7.3.0', size: '53 MB' },
  { version: '7.4.0', size: '54 MB' },
  { version: '7.5.0', size: '55 MB' },
  { version: '7.6.1', size: '56 MB' },
  { version: '7.6.2', size: '56 MB' },
  { version: '7.7.0', size: '57 MB' },
  { version: '7.7.5', size: '57 MB' },
  { version: '7.7.7', size: '58 MB' },
  { version: '7.8.0', size: '58 MB' },
  { version: '7.8.6', size: '59 MB' },
  { version: '7.8.7', size: '59 MB' },
  { version: '7.9.1', size: '60 MB' },
  { version: '7.9.3', size: '60 MB' },
  { version: '7.9.6', size: '61 MB' },
  { version: '7.9.7', size: '61 MB' },
  { version: '7.9.8', size: '62 MB' },
  { version: '8.0.0', size: '63 MB' },
  { version: '8.0.1', size: '63 MB' },
  { version: '8.0.3', size: '64 MB' },
];

function makeABApps(list, iconUrl, startId) {
  return list.map((v, i) => ({
    id: startId + i,
    name: `Angry Birds (${v.version})`,
    category: 'games',
    icon: '?',
    iconUrl,
    color: AB_COLOR,
    banner: AB_BANNER,
    rating: 0, reviews: 0, downloads: '0',
    price: 'Gratis',
    size: v.size,
    version: v.version,
    updated: '', developer: AB_DEV, description: '',
    screenshots: ['#C62828','#C62828','#C62828','#C62828'],
    tags: [], permissions: [],
    downloadUrl: v.downloadUrl || '',
    oldVersions: [],
  }));
}

const group1   = makeABApps(abVersions1,   ICON_1,   1);
const group312 = makeABApps(abVersions312, ICON_312, group1.length + 1);
const group32  = makeABApps(abVersions32,  ICON_32,  group1.length + group312.length + 1);
const group606 = makeABApps(abVersions606, ICON_606, group1.length + group312.length + group32.length + 1);
const group61  = makeABApps(abVersions61,  ICON_61,  group1.length + group312.length + group32.length + group606.length + 1);
const group615 = makeABApps(abVersions615, ICON_32,  group1.length + group312.length + group32.length + group606.length + group61.length + 1);

const allABApps = [...group1, ...group312, ...group32, ...group606, ...group61, ...group615];
const nextId = allABApps.length + 1;

const seasonsFree = {
  id: nextId,
  name: 'Angry Birds Seasons Free',
  category: 'games',
  icon: '?',
  iconUrl: 'https://archive.org/download/angrybirds-logos_5/Logos/Angrybirds%20Seasons/Free/1.4.0.png',
  color: '#E65100',
  banner: 'linear-gradient(135deg, #BF360C, #E65100)',
  rating: 0, reviews: 0, downloads: '0',
  price: 'Gratis', size: '19 MB', version: '1.4.1',
  updated: '', developer: 'Rovio Entertainment', description: '',
  screenshots: ['#9E9E9E','#9E9E9E','#9E9E9E','#9E9E9E'],
  tags: [], permissions: [],
  downloadUrl: 'https://archive.org/download/angry-birds-seasons-ios-ports-android/APPS/Free.zip/free%2FAngry%20Birds%20Seasons%20Free_1.4.1.apk',
  oldVersions: [
    { version: '1.1.1', size: '16 MB', url: '' },
    { version: '1.2.0', size: '17 MB', url: '' },
    { version: '1.3.0', size: '18 MB', url: '' },
  ],
};

const emptyApps = Array.from({ length: 10 }, (_, i) => ({
  id: nextId + 1 + i,
  name: '', category: 'games', icon: '?', color: '#9E9E9E',
  banner: 'linear-gradient(135deg, #757575, #9E9E9E)',
  rating: 0, reviews: 0, downloads: '0',
  price: 'Gratis', size: '0 MB', version: '1.0.0',
  updated: '', developer: '', description: '',
  screenshots: ['#9E9E9E','#9E9E9E','#9E9E9E','#9E9E9E'],
  tags: [], permissions: [], downloadUrl: '', oldVersions: [],
}));

export const apps = [...allABApps, seasonsFree, ...emptyApps];

export const getFeaturedApps  = () => apps.slice(0, 3);
export const getAppsByCategory = () => apps;
export const getTopApps       = () => apps;
export const getNewApps       = () => apps.slice(0, 6);
export const getAppById       = (id) => apps.find(a => a.id === Number(id));
export const searchApps       = (query) => {
  const q = query.toLowerCase();
  return apps.filter(a => a.name.toLowerCase().includes(q) || a.developer.toLowerCase().includes(q));
};
