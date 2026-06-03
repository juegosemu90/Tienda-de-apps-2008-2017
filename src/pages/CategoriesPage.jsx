import { useNavigate } from 'react-router-dom';
import { categories } from '../data/apps';
import './CategoriesPage.css';

export default function CategoriesPage() {
  const navigate = useNavigate();
  return (
    <div className="categories-page">
      <div className="categories-hero">
        <h1>Todas las Categorías</h1>
        <p>Explora apps por categoría</p>
      </div>
      <div className="categories-grid-full">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="cat-card-full"
            style={{ background: cat.gradient }}
            onClick={() => navigate(`/category/${cat.id}`)}
          >
            <span className="cat-card-icon">{cat.icon}</span>
            <span className="cat-card-label">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
