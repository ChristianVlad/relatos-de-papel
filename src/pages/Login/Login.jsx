import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username.trim(), password)) {
      navigate('/profile', { replace: true });
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Iniciar sesión</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          Usuario
          <input
            className="login__input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="login__label">
          Contraseña
          <input
            className="login__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="login__error" role="alert">{error}</p>}
        <button className="login__submit" type="submit">Entrar</button>
      </form>
    </section>
  );
}