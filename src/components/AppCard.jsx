import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import './AppCard.css';

export default function AppCard({ app, variant = 'grid' }) {
  const navigate = useNavigate();

  if (variant === 'list') {
    return (
      <div className="app-card-list" onClick={() => navigate(`/app/${app.id}`)}>
        <div className="app-icon-lg" style={{ background: app.color }}>
          <span>{app.icon}</span>
        </div>
        <div className="app-info-list">
          <p className="app-name">{app.name}</p>
          <p className="app-dev">{app.developer}</p>
          <div className="app-meta">
            <span className="app-rating">
              <Star size={12} fill="currentColor" /> {app.rating}
            </span>
            <span className="app-dot">·</span>
            <span className="app-downloads">{app.downloads}</span>
          </div>
        </div>
        <button className="install-btn-sm" onClick={e => { e.stopPropagation(); }}>
          {app.price}
        </button>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="app-card-featured" onClick={() => navigate(`/app/${app.id}`)}>
        <div className="featured-banner" style={{ background: app.banner }}>
          <div className="featured-overlay">
            <div className="featured-header">
              <div className="app-icon-featured" style={{ background: 'rgba(255,255,255,0.15)' }}>
                {app.icon}
              </div>
            </div>
            <div className="featured-content">
              <p className="featured-tag">Destacada</p>
              <h3 className="featured-name">{app.name}</h3>
              <p className="featured-subtitle">{app.bannerText}</p>
              <div className="featured-meta">
                <span className="featured-rating"><Star size={13} fill="white" color="white" /> {app.rating}</span>
                <span className="featured-price-badge">{app.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default grid card
  return (
    <div className="app-card-grid" onClick={() => navigate(`/app/${app.id}`)}>
      <div className="app-icon-md" style={{ background: app.color }}>
        <span>{app.icon}</span>
      </div>
      <div className="app-info-grid">
        <p className="app-name-grid">{app.name}</p>
        <p className="app-dev-grid">{app.developer}</p>
        <div className="app-rating-row">
          <Star size={11} fill="#FFB300" color="#FFB300" />
          <span className="app-rating-val">{app.rating}</span>
        </div>
        <button className="install-btn-xs" onClick={e => e.stopPropagation()}>
          {app.price === 'Gratis' ? 'Instalar' : app.price}
        </button>
      </div>
    </div>
  );
}
