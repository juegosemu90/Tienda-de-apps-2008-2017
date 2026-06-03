import { Link, useLocation } from 'react-router-dom';
import { Home, Gamepad2, BookOpen, Star, Grid3X3, Music, Briefcase, Heart } from 'lucide-react';
import './SideNav.css';

const navItems = [
  { path: '/', icon: Home, label: 'Inicio' },
  { path: '/category/games', icon: Gamepad2, label: 'Juegos' },
  { path: '/category/productivity', icon: Briefcase, label: 'Productividad' },
  { path: '/category/education', icon: BookOpen, label: 'Educación' },
  { path: '/category/music', icon: Music, label: 'Música' },
  { path: '/category/health', icon: Heart, label: 'Salud' },
  { path: '/top', icon: Star, label: 'Top Charts' },
  { path: '/categories', icon: Grid3X3, label: 'Categorías' },
];

export default function SideNav() {
  const { pathname } = useLocation();
  const isActive = (path) => path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <aside className="side-nav">
      <nav className="side-nav-inner">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link key={path} to={path} className={`side-item ${isActive(path) ? 'active' : ''}`}>
            <Icon size={20} className="side-icon" />
            <span className="side-label">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
