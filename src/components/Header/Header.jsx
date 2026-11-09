import { useState } from 'react';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);

  // El cesto solo se ve en la principal (/books) y en el detalle (/books/:id)
  const showCart =
    matchPath('/books', pathname) || matchPath('/books/:id', pathname);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <Link className="header__logo" to="/">Relatos de papel</Link>

      <nav className="header__nav">
        <Link to="/books">Catálogo</Link>

        {user ? (
          <>
            <Link to="/profile">{user.name}</Link>
            <button type="button" onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}

        {showCart && (
          <button
            type="button"
            aria-expanded={cartOpen}
            onClick={() => setCartOpen((open) => !open)}
          >
            Carrito
          </button>
        )}
      </nav>

      {/* C: aquí va <Cart open={cartOpen} onClose={() => setCartOpen(false)} /> */}
    </header>
  );
}