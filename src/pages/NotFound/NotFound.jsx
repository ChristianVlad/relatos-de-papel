import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Esta página no existe.</p>
      <Link className="not-found__link" to="/books">Volver al catálogo</Link>
    </section>
  );
}