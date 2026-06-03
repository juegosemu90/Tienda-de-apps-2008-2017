import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Search, X, Moon, Sun, ChevronLeft, Menu, ShoppingBag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { searchApps } from '../data/apps';
import './Header.css';

export default function Header() {
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      setSuggestions(searchApps(query).slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
      setSuggestions([]);
    }
  };

  const goBack = () => navigate(-1);

  return (
    <header className="header">
      <div className="header-inner">
        {searchOpen ? (
          <div className="search-bar-expanded">
            <button className="header-icon-btn" onClick={() => { setSearchOpen(false); setQuery(''); }}>
              <ChevronLeft size={24} />
            </button>
            <form onSubmit={handleSearch} className="search-form">
              <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Buscar apps y juegos..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              {query && (
                <button type="button" className="header-icon-btn" onClick={() => setQuery('')}>
                  <X size={20} />
                </button>
              )}
            </form>
            {suggestions.length > 0 && (
              <div className="search-suggestions">
                {suggestions.map(app => (
                  <button key={app.id} className="suggestion-item" onClick={() => {
                    navigate(`/app/${app.id}`);
                    setSearchOpen(false);
                    setQuery('');
                  }}>
                    <span className="suggestion-icon" style={{ background: app.color }}>{app.icon}</span>
                    <div className="suggestion-text">
                      <span className="suggestion-name">{app.name}</span>
                      <span className="suggestion-dev">{app.developer}</span>
                    </div>
                    <Search size={14} className="suggestion-arrow" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="header-left">
              {!isHome && (
                <button className="header-icon-btn" onClick={goBack}>
                  <ChevronLeft size={24} />
                </button>
              )}
              <Link to="/" className="header-logo">
                <ShoppingBag size={22} className="logo-icon" />
                <span className="logo-text">Play Store</span>
              </Link>
            </div>
            <div className="header-right">
              <button className="header-icon-btn" onClick={() => setSearchOpen(true)}>
                <Search size={22} />
              </button>
              <button className="header-icon-btn theme-toggle" onClick={toggle} aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <div className="header-avatar">U</div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
