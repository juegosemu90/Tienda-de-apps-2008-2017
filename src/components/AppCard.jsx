import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import './AppCard.css';

function proxyUrl(url) {
  if (!url) return url;
  // Use corsproxy.io to bypass CORS on archive.org
  return `https://corsproxy.io/?${encodeURIComponent(url)}`;
}

function AppIcon({ app, className }) {
  if (app.iconUrl) {
    return (
      <div className={className} style={{ background: app.color, padding: 0, overflow: 'hidden' }}>
        <img
          src={proxyUrl(app.iconUrl)}
          alt={app.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => {
            // fallback: hide img and show ? on background
            e.target.style.display = 'none';
            e.target.parentNode.style.display = 'flex';
            e.target.parentNode.style.alignItems = 'center';
            e.target.parentNode.style.justifyContent = 'center';
            e.target.parentNode.style.fontSize = '28px';
            e.target.parentNode.style.color = 'white';
            e.target.parentNode.style.fontWeight = '700';
            e.target.parentNode.innerText = '?';
          }}
        />
      </div>
    );
  }
  return (
    <div className={className} style={{ background: app.color }}>
      <span>{app.icon}</span>
    </div>
  );
}

export default function AppCard({ app, variant = 'grid' }) {
  const navigate = useNavigate();

  if (variant === 'list') {
    return (
      <div className="app-card-list" onClick={() => navigate(`/app/${app.id}`)}>
        <AppIcon app={app} className="app-icon-lg" />
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
        <button className="install-btn-sm" onClick={e => e.stopPropagation()}>
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
              <AppIcon app={app} className="app-icon-featured" />
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

  return (
    <div className="app-card-grid" onClick={() => navigate(`/app/${app.id}`)}>
      <AppIcon app={app} className="app-icon-md" />
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
