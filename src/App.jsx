import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import BookDetail from './pages/BookDetail/BookDetail';
import Checkout from './pages/Checkout/Checkout';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Home />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}