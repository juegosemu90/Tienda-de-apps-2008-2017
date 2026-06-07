import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Download, Share2, Heart, Shield, Smartphone, HardDrive, Tag, ChevronRight, ChevronDown, ChevronUp, History, X } from 'lucide-react';
import { getAppById, getAppsByCategory } from '../data/apps';
import AppCard from '../components/AppCard';
import StarRating from '../components/StarRating';
import './AppDetailPage.css';

function PermissionItem({ icon: Icon, label }) {
  return (
    <div className="perm-item">
      <Shield size={14} />
      <span>{label}</span>
    </div>
  );
}

function VersionsModal({ app, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Versiones anteriores</h3>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
        </div>
        {app.oldVersions && app.oldVersions.length > 0 ? (
          <div className="versions-scroll">
            {app.oldVersions.map((v, i) => (
              <a
                key={i}
                href={v.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="version-chip"
                onClick={e => { if (!v.url) e.preventDefault(); }}
              >
                <span className="version-number">v{v.version}</span>
                {v.size && <span className="version-size">{v.size}</span>}
                <Download size={13} className="version-dl" />
              </a>
            ))}
          </div>
        ) : (
          <p className="versions-empty">No hay versiones anteriores disponibles</p>
        )}
      </div>
    </div>
  );
}

export default function AppDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = getAppById(id);
  const [installed, setInstalled] = useState(false);
  const [liked, setLiked] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [showVersions, setShowVersions] = useState(false);

  if (!app) return (
    <div className="not-found">
      <p>App no encontrada</p>
      <button onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  );

  const similar = getAppsByCategory(app.category).filter(a => a.id !== app.id).slice(0, 6);

  const handleInstall = () => {
    if (app.downloadUrl) {
      window.open(app.downloadUrl, '_blank');
    } else {
      setInstalled(i => !i);
    }
  };

  const formatReviews = (n) => n >= 1000 ? `${(n/1000).toFixed(1)}K` : n;

  const ratingBars = [
    { stars: 5, pct: 68 },
    { stars: 4, pct: 17 },
    { stars: 3, pct: 8 },
    { stars: 2, pct: 4 },
    { stars: 1, pct: 3 },
  ];

  return (
    <div className="detail-page">
      {showVersions && <VersionsModal app={app} onClose={() => setShowVersions(false)} />}

      {/* Hero Banner */}
      <div className="detail-hero" style={{ background: app.banner || app.color }}>
        <div className="hero-overlay">
          <div className="hero-app-info">
            <div className="detail-icon" style={{ background: 'rgba(255,255,255,0.15)', padding: app.iconUrl ? 0 : undefined, overflow: app.iconUrl ? 'hidden' : undefined }}>
              {app.iconUrl
                ? <img src={`https://corsproxy.io/?${encodeURIComponent(app.iconUrl)}`} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display='none'; e.target.parentNode.innerText='?'; }} />
                : app.icon
              }
            </div>
            <div className="hero-text">
              <h1 className="detail-name">{app.name}</h1>
              <p className="detail-dev">{app.developer}</p>
              <div className="hero-badges">
                {app.tags?.slice(0,3).map(tag => (
                  <span key={tag} className="hero-badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="detail-actions">
        <div className="detail-stats">
          <div className="stat-item">
            <span className="stat-value" style={{ color: '#F9A825' }}>
              <Star size={14} fill="#F9A825" /> {app.rating}
            </span>
            <span className="stat-label">{formatReviews(app.reviews)} reseñas</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">
              <Download size={14} /> {app.downloads}
            </span>
            <span className="stat-label">descargas</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">
              <HardDrive size={14} /> {app.size}
            </span>
            <span className="stat-label">tamaño</span>
          </div>
        </div>

        <div className="action-buttons">
          <button
            className={`install-btn-main ${installed ? 'installed' : ''}`}
            onClick={handleInstall}
          >
            {installed ? '✓ Instalada' : app.price === 'Gratis' ? 'Instalar' : app.price}
          </button>
          <button className={`icon-action-btn ${liked ? 'liked' : ''}`} onClick={() => setLiked(l => !l)}>
            <Heart size={20} fill={liked ? 'var(--ps-red)' : 'none'} color={liked ? 'var(--ps-red)' : 'var(--text-secondary)'} />
          </button>
          <button className="icon-action-btn">
            <Share2 size={20} color="var(--text-secondary)" />
          </button>
        </div>

        <button className="versions-btn" onClick={() => setShowVersions(true)}>
          <History size={15} />
          Versiones Anteriores
        </button>
      </div>

      {/* Screenshots */}
      <div className="screenshots-section">
        <div className="screenshots-scroll">
          {app.screenshots.map((color, i) => (
            <div key={i} className="screenshot" style={{ background: color }}>
              <div className="screenshot-inner">
                <span style={{ fontSize: 28, opacity: 0.6 }}>{app.icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Pantalla {i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="detail-section">
        <h2 className="detail-section-title">Descripción</h2>
        <p className={`detail-desc ${descExpanded ? 'expanded' : ''}`}>
          {app.description}
        </p>
        <button className="desc-toggle" onClick={() => setDescExpanded(e => !e)}>
          {descExpanded ? <><ChevronUp size={16} /> Leer menos</> : <><ChevronDown size={16} /> Leer más</>}
        </button>
      </div>

      {/* Rating breakdown */}
      <div className="detail-section">
        <h2 className="detail-section-title">Valoraciones y reseñas</h2>
        <div className="rating-breakdown">
          <div className="rating-big">
            <span className="rating-number-big">{app.rating}</span>
            <StarRating rating={app.rating} size={18} />
            <span className="rating-count">{formatReviews(app.reviews)} reseñas</span>
          </div>
          <div className="rating-bars">
            {ratingBars.map(({ stars, pct }) => (
              <div key={stars} className="rating-bar-row">
                <span className="bar-label">{stars}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="bar-pct">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App info */}
      <div className="detail-section">
        <h2 className="detail-section-title">Información</h2>
        <div className="info-grid">
          {[
            { icon: Tag, label: 'Versión', value: app.version },
            { icon: Smartphone, label: 'Actualizado', value: app.updated },
            { icon: HardDrive, label: 'Tamaño', value: app.size },
            { icon: Download, label: 'Descargas', value: app.downloads },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="info-item">
              <Icon size={16} className="info-icon" />
              <div>
                <p className="info-label">{label}</p>
                <p className="info-value">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permissions */}
      {app.permissions && (
        <div className="detail-section">
          <h2 className="detail-section-title">Permisos requeridos</h2>
          <div className="permissions-list">
            {app.permissions.map(p => (
              <PermissionItem key={p} icon={Shield} label={p} />
            ))}
          </div>
        </div>
      )}

      {/* Similar Apps */}
      {similar.length > 0 && (
        <div className="detail-section">
          <div className="similar-header">
            <h2 className="detail-section-title">Apps similares</h2>
            <button className="see-more-link" onClick={() => navigate(`/category/${app.category}`)}>
              Ver más <ChevronRight size={14} />
            </button>
          </div>
          <div className="similar-scroll">
            {similar.map(a => (
              <AppCard key={a.id} app={a} variant="grid" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
