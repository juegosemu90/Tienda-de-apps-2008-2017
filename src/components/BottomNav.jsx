import { Link, useLocation } from 'react-router-dom';
import { Home, Gamepad2, BookOpen, Star, Grid3X3 } from 'lucide-react';
import './BottomNav.css';

const tabs = [
  { path: '/', icon: Home, label: 'Inicio' },
  { path: '/category/games', icon: Gamepad2, label: 'Juegos' },
  { path: '/category/education', icon: BookOpen, label: 'Apps' },
  { path: '/top', icon: Star, label: 'Top' },
  { path: '/categories', icon: Grid3X3, label: 'Categorías' },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav">
      {tabs.map(({ path, icon: Icon, label }) => (
        <Link key={path} to={path} className={`bottom-tab ${isActive(path) ? 'active' : ''}`}>
          <Icon size={22} className="tab-icon" />
          <span className="tab-label">{label}</span>
          {isActive(path) && <span className="tab-indicator" />}
        </Link>
      ))}
    </nav>
  );
}
