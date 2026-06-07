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

const C = '#C62828';
const BN = 'linear-gradient(135deg, #7F0000 0%, #C62828 50%, #EF5350 100%)';
const D = 'Rovio Entertainment';
const SC = ['#C62828','#C62828','#C62828','#C62828'];

// Lista 1 txt (1.0-3.0.0)
const I1   = 'https://archive.org/download/angrybirds-logos_5/Classic/1.0-3.0.0.png';
// Lista 2 txt (3.1.0-3.1.2)
const I312 = 'https://archive.org/download/angrybirds-logos_5/Classic/3.1.0-3.1.2.png';
// Lista 3 txt (3.2.0-6.0.1 & 6.1.5-8.0.3)
const I32  = 'https://archive.org/download/angrybirds-logos_5/Classic/3.2.0-6.0.1%20%26%206.1.5-8.0.3.png';
// Lista 4 txt (6.0.6)
const I606 = 'https://archive.org/download/angrybirds-logos_5/Classic/6.0.6.png';
// Lista 5 txt (6.1.0-6.1.2)
const I61  = 'https://archive.org/download/angrybirds-logos_5/Classic/6.1.0-6.1.2.png';

const mk = (id, ver, size, iconUrl, dl='') => ({
  id, name: `Angry Birds (${ver})`, category: 'games',
  icon: '?', iconUrl, color: C, banner: BN,
  rating: 0, reviews: 0, downloads: '0', price: 'Gratis',
  size, version: ver, updated: '', developer: D, description: '',
  screenshots: SC, tags: [], permissions: [],
  downloadUrl: dl, oldVersions: [],
});

export const apps = [
  mk(1,  '1.0.0', '8 MB',  I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.0.0%29.apk'),
  mk(2,  '1.2.0', '9 MB',  I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.2.0%29-Android4.4.apk'),
  mk(3,  '1.2.1', '9 MB',  I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.2.1%29-Android4.4.apk'),
  mk(4,  '1.3.0', '10 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.3.0%29-Android4.4.apk'),
  mk(5,  '1.3.1', '10 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.3.1%29-Android4.4.apk'),
  mk(6,  '1.3.2', '10 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.3.2%29-Android4.4.apk'),
  mk(7,  '1.3.3', '11 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.3.3%29-Android4.4.apk'),
  mk(8,  '1.3.4', '11 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.3.4%29-Android4.4.apk'),
  mk(9,  '1.4.0', '12 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.4.0%29-Android4.4.apk'),
  mk(10, '1.4.1', '12 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.4.1%29-Android4.4.apk'),
  mk(11, '1.4.2', '13 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.4.2%29-Android4.4.apk'),
  mk(12, '1.4.2', '13 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.4.2%29-Android4.4.apk'),
  mk(13, '1.4.3', '13 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.4.3%29-Android4.4.apk'),
  mk(14, '1.4.4', '14 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.4.4%29-Android4.4.apk'),
  mk(15, '1.5.0', '15 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.5.0%29.apk'),
  mk(16, '1.5.1', '15 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.5.1%29.apk'),
  mk(17, '1.5.2', '16 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.5.2%29.apk'),
  mk(18, '1.5.3', '16 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.5.3%29.apk'),
  mk(19, '1.6.0', '17 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.6.0%29.apk'),
  mk(20, '1.6.1', '17 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.6.1%29.apk'),
  mk(21, '1.6.2', '18 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.6.2%29.apk'),
  mk(22, '1.6.3', '18 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%281.6.3%29.apk'),
  mk(23, '2.0.0', '20 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%282.0.0%29.apk'),
  mk(24, '2.0.2', '20 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%282.0.2%29.apk'),
  mk(25, '2.1.0', '21 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%282.1.0%29.apk'),
  mk(26, '2.2.0', '22 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%282.2.0%29.apk'),
  mk(27, '2.2.1', '22 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%282.2.1%29.apk'),
  mk(28, '2.3.0', '23 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%282.3.0%29.apk'),
  mk(29, '3.0.0', '25 MB', I1, 'https://archive.org/download/angry_birds_classic_ios_ports_preservation_pack/APPS/Normal/Normal.zip/Angry%20Birds%20iPhone%20%283.0.0%29.apk'),

  mk(30, '3.1.0', '26 MB', I312),
  mk(31, '3.1.2', '26 MB', I312),

  mk(32, '3.2.0', '27 MB', I32),
  mk(33, '3.3.0', '28 MB', I32),
  mk(34, '3.3.1', '28 MB', I32),
  mk(35, '3.4.0', '29 MB', I32),
  mk(36, '3.4.1', '29 MB', I32),
  mk(37, '4.0.0', '32 MB', I32),
  mk(38, '4.3.2', '35 MB', I32),
  mk(39, '4.3.5', '35 MB', I32),
  mk(40, '5.0.1', '38 MB', I32),
  mk(41, '5.1.0', '39 MB', I32),
  mk(42, '5.2.0', '40 MB', I32),
  mk(43, '6.0.1', '43 MB', I32),

  mk(44, '6.0.6', '44 MB', I606),

  mk(45, '6.1.0', '45 MB', I61),
  mk(46, '6.1.1', '45 MB', I61),
  mk(47, '6.2.1', '46 MB', I61),

  mk(48, '6.1.5', '47 MB', I32),
  mk(49, '7.0.0', '50 MB', I32),
  mk(50, '7.1.0', '51 MB', I32),
  mk(51, '7.2.0', '52 MB', I32),
  mk(52, '7.3.0', '53 MB', I32),
  mk(53, '7.4.0', '54 MB', I32),
  mk(54, '7.5.0', '55 MB', I32),
  mk(55, '7.6.1', '56 MB', I32),
  mk(56, '7.6.2', '56 MB', I32),
  mk(57, '7.7.0', '57 MB', I32),
  mk(58, '7.7.5', '57 MB', I32),
  mk(59, '7.7.7', '58 MB', I32),
  mk(60, '7.8.0', '58 MB', I32),
  mk(61, '7.8.6', '59 MB', I32),
  mk(62, '7.8.7', '59 MB', I32),
  mk(63, '7.9.1', '60 MB', I32),
  mk(64, '7.9.3', '60 MB', I32),
  mk(65, '7.9.6', '61 MB', I32),
  mk(66, '7.9.7', '61 MB', I32),
  mk(67, '7.9.8', '62 MB', I32),
  mk(68, '8.0.0', '63 MB', I32),
  mk(69, '8.0.1', '63 MB', I32),
  mk(70, '8.0.3', '64 MB', I32),

  {
    id: 71,
    name: 'Angry Birds Seasons Free',
    category: 'games', icon: '?',
    iconUrl: 'https://archive.org/download/angrybirds-logos_5/Logos/Angrybirds%20Seasons/Free/1.4.0.png',
    color: '#E65100',
    banner: 'linear-gradient(135deg, #BF360C, #E65100)',
    rating: 0, reviews: 0, downloads: '0',
    price: 'Gratis', size: '19 MB', version: '1.4.1',
    updated: '', developer: D, description: '',
    screenshots: ['#9E9E9E','#9E9E9E','#9E9E9E','#9E9E9E'],
    tags: [], permissions: [],
    downloadUrl: 'https://archive.org/download/angry-birds-seasons-ios-ports-android/APPS/Free.zip/free%2FAngry%20Birds%20Seasons%20Free_1.4.1.apk',
    oldVersions: [
      { version: '1.1.1', size: '16 MB', url: '' },
      { version: '1.2.0', size: '17 MB', url: '' },
      { version: '1.3.0', size: '18 MB', url: '' },
    ],
  },

  ...[72,73,74,75,76,77,78,79,80,81].map(id => ({
    id, name: '', category: 'games', icon: '?', color: '#9E9E9E',
    banner: 'linear-gradient(135deg, #757575, #9E9E9E)',
    rating: 0, reviews: 0, downloads: '0',
    price: 'Gratis', size: '0 MB', version: '1.0.0',
    updated: '', developer: '', description: '',
    screenshots: ['#9E9E9E','#9E9E9E','#9E9E9E','#9E9E9E'],
    tags: [], permissions: [], downloadUrl: '', oldVersions: [],
  })),
];

export const getFeaturedApps   = () => apps.slice(0, 3);
export const getAppsByCategory = () => apps;
export const getTopApps        = () => apps;
export const getNewApps        = () => apps.slice(0, 6);
export const getAppById        = (id) => apps.find(a => a.id === Number(id));
export const searchApps        = (query) => {
  const q = query.toLowerCase();
  return apps.filter(a => a.name.toLowerCase().includes(q) || a.developer.toLowerCase().includes(q));
};
