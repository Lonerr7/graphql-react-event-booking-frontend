import { Route, Routes } from 'react-router-dom';
import { AuthPage } from '../../components/Auth/Auth';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={null} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/events" element={null} />
      <Route path="/bookings" element={null} />
    </Routes>
  );
};
