import { Star } from 'lucide-react';
import './StarRating.css';

export default function StarRating({ rating, size = 16 }) {
  return (
    <div className="star-rating">
      {[1,2,3,4,5].map(i => {
        const fill = i <= Math.floor(rating) ? 1 : i - 1 < rating ? rating - (i-1) : 0;
        return (
          <span key={i} className="star-wrap" style={{ '--fill': fill }}>
            <Star size={size} className="star-bg" />
            <Star size={size} className="star-fg" style={{ clipPath: `inset(0 ${100 - fill*100}% 0 0)` }} />
          </span>
        );
      })}
      <span className="rating-number">{rating}</span>
    </div>
  );
}
