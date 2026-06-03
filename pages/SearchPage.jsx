import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchApps } from '../data/apps';
import AppCard from '../components/AppCard';
import './SearchPage.css';

const suggestions = ['Juegos gratis', 'Música offline', 'Productividad', 'VPN', 'Edición de fotos', 'Idiomas'];

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const query = params.get('q') || '';
  const [input, setInput] = useState(query);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) setResults(searchApps(query));
    else setResults([]);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) setParams({ q: input.trim() });
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <form className="search-form-page" onSubmit={handleSearch}>
          <Search size={20} className="search-icon-page" />
          <input
            className="search-input-page"
            type="text"
            placeholder="Buscar apps, juegos, categorías..."
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
          />
          {input && (
            <button type="button" onClick={() => { setInput(''); setParams({}); }}>
              <X size={18} className="search-clear" />
            </button>
          )}
        </form>
      </div>

      {!query ? (
        <div className="search-suggestions">
          <h3 className="suggestions-title">Búsquedas populares</h3>
          <div className="suggestions-grid">
            {suggestions.map(s => (
              <button key={s} className="suggestion-chip" onClick={() => {
                setInput(s);
                setParams({ q: s });
              }}>
                <Search size={14} />
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="search-results">
          <div className="results-count">
            {results.length > 0
              ? `${results.length} resultado${results.length !== 1 ? 's' : ''} para "${query}"`
              : `Sin resultados para "${query}"`}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <span style={{ fontSize: 52 }}>🔍</span>
              <p>Intenta con otras palabras</p>
            </div>
          ) : (
            <div className="results-list">
              {results.map(app => <AppCard key={app.id} app={app} variant="list" />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
