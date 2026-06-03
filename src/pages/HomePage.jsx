import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, getFeaturedApps, getTopApps, getNewApps, getAppsByCategory } from '../data/apps';
import Section from '../components/Section';
import AppCard from '../components/AppCard';
import './HomePage.css';

function CategoryPill({ cat }) {
  const navigate = useNavigate();
  return (
    <button
      className="category-pill"
      style={{ '--cat-color': cat.color }}
      onClick={() => navigate(`/category/${cat.id}`)}
    >
      <span className="pill-icon">{cat.icon}</span>
      <span className="pill-label">{cat.label}</span>
    </button>
  );
}

function FeaturedCarousel() {
  const featured = getFeaturedApps();
  const scrollRef = useRef(null);

  return (
    <div className="featured-section">
      <div className="featured-scroll" ref={scrollRef}>
        {featured.map(app => (
          <AppCard key={app.id} app={app} variant="featured" />
        ))}
      </div>
      <div className="featured-dots">
        {featured.map((_, i) => (
          <span key={i} className={`dot ${i === 0 ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const topApps = getTopApps();
  const newApps = getNewApps();
  const games = getAppsByCategory('games');
  const productivity = getAppsByCategory('productivity');

  return (
    <div className="home-page">
      {/* Categories strip */}
      <div className="categories-strip">
        <div className="categories-scroll">
          {categories.map(cat => <CategoryPill key={cat.id} cat={cat} />)}
        </div>
      </div>

      {/* Featured Banner */}
      <Section title="Destacadas" linkTo="/top">
        <FeaturedCarousel />
      </Section>

      {/* Top Apps horizontal */}
      <Section title="Top Apps" subtitle="Las más descargadas esta semana" linkTo="/top">
        {topApps.map(app => (
          <AppCard key={app.id} app={app} variant="grid" />
        ))}
      </Section>

      {/* Top Games */}
      <Section title="🎮 Top Juegos" subtitle="Los más jugados ahora" linkTo="/category/games">
        {games.map(app => (
          <AppCard key={app.id} app={app} variant="grid" />
        ))}
      </Section>

      {/* Productivity list */}
      <Section title="Productividad" subtitle="Trabaja de forma más inteligente" linkTo="/category/productivity" horizontal={false}>
        {productivity.map(app => (
          <AppCard key={app.id} app={app} variant="list" />
        ))}
      </Section>

      {/* New apps */}
      <Section title="🆕 Novedades" subtitle="Recién llegadas a la tienda" linkTo="/top">
        {newApps.map(app => (
          <AppCard key={app.id} app={app} variant="grid" />
        ))}
      </Section>

      <div className="home-footer">
        <p>Play Store Classic · 2026</p>
        <p>Inspirado en Android 4.x</p>
      </div>
    </div>
  );
}
