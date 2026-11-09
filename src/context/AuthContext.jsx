import { createContext, useState, useEffect } from 'react';
import { USERS } from '../data/users';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Se lee localStorage en el inicializador, no en un efecto,
  // para que /checkout y /profile sobrevivan a una recarga.
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch {
      return null;
    }
  });

  // El efecto solo guarda la sesión cuando cambia.
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const login = (username, password) => {
    const found = USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (!found) return false;
    const safeUser = { ...found };
    delete safeUser.password; // no guardamos la contraseña en la sesión
    setUser(safeUser);
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}