import { useState } from 'react';
import { getTopApps, apps } from '../data/apps';
import AppCard from '../components/AppCard';
import './TopPage.css';

const tabs = ['Top Gratis', 'Top Pagadas', 'Más Valoradas', 'Novedades'];

export default function TopPage() {
  const [activeTab, setActiveTab] = useState(0);
  const sorted = [...apps].sort((a, b) => b.reviews - a.reviews);

  return (
    <div className="top-page">
      <div className="top-hero">
        <h1>Top Charts</h1>
        <p>Las apps más populares</p>
      </div>

      <div className="top-tabs">
        {tabs.map((t, i) => (
          <button key={t} className={`top-tab ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
            {t}
          </button>
        ))}
      </div>

      <div className="top-list">
        {sorted.map((app, i) => (
          <div key={app.id} className="top-item">
            <div className="top-rank">
              <span className={`rank-number ${i < 3 ? 'top3' : ''}`}>{i + 1}</span>
              {i === 0 && <span className="rank-badge gold">🥇</span>}
              {i === 1 && <span className="rank-badge silver">🥈</span>}
              {i === 2 && <span className="rank-badge bronze">🥉</span>}
            </div>
            <AppCard app={app} variant="list" />
          </div>
        ))}
      </div>
    </div>
  );
}
