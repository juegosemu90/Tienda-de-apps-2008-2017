import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Section.css';

export default function Section({ title, subtitle, children, linkTo, horizontal = true }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title-wrap">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {linkTo && (
          <button className="section-more" onClick={() => navigate(linkTo)}>
            Ver más <ChevronRight size={16} />
          </button>
        )}
      </div>
      {horizontal ? (
        <div className="section-scroll" ref={scrollRef}>
          {children}
        </div>
      ) : (
        <div className="section-grid">{children}</div>
      )}
    </section>
  );
}
