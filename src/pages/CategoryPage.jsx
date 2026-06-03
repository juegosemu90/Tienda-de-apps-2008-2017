import { useParams, useNavigate } from 'react-router-dom';
import { categories, getAppsByCategory } from '../data/apps';
import AppCard from '../components/AppCard';
import './CategoryPage.css';

export default function CategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cat = categories.find(c => c.id === id);
  const apps = getAppsByCategory(id);

  if (!cat) return <div className="cat-empty">Categoría no encontrada</div>;

  return (
    <div className="category-page">
      <div className="cat-hero" style={{ background: cat.gradient }}>
        <span className="cat-hero-icon">{cat.icon}</span>
        <h1 className="cat-hero-title">{cat.label}</h1>
        <p className="cat-hero-count">{apps.length} aplicaciones</p>
      </div>

      <div className="cat-tabs">
        <button className="cat-tab active">Para ti</button>
        <button className="cat-tab">Top gratis</button>
        <button className="cat-tab">Top pagadas</button>
        <button className="cat-tab">Novedades</button>
      </div>

      {apps.length === 0 ? (
        <div className="cat-empty">
          <span style={{ fontSize: 48 }}>{cat.icon}</span>
          <p>No hay apps en esta categoría aún</p>
          <button onClick={() => navigate('/')}>Explorar otras</button>
        </div>
      ) : (
        <div className="cat-app-list">
          {apps.map((app, i) => (
            <div key={app.id} className="cat-app-item">
              <span className="cat-rank">{i + 1}</span>
              <AppCard app={app} variant="list" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
