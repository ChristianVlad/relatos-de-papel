import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <section className="landing">
      <h1 className="landing__title">Relatos de papel</h1>
      <p className="landing__text">
        Tu librería online: descubre, elige y compra tus próximas lecturas.
      </p>
      <div className="landing__actions">
        <Link className="landing__btn" to="/books">Ver catálogo</Link>
        <Link className="landing__btn landing__btn--secondary" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </section>
  );
}