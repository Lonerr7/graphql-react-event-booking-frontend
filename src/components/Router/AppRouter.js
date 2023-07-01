import { Route, Routes } from 'react-router-dom';
import { AuthPage } from '../../components/Auth/Auth';
import { Events } from '../../components/Events/Events';
import { Bookings } from '../../components/Bookings/Bookings';

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={null} /> */}
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
};
