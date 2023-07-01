import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <h1 className={s.navigation__logo}>EasyEvent</h1>
      <nav className={s.navigation__navigator}>
        <ul className={s.navigation__list}>
          <li className={s.navigation__listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${s.navigation__link_active}`
                  : `${s.navigation__link}`
              }
              to="/auth"
            >
              Authenticate
            </NavLink>
          </li>
          <li className={s.navigation__listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${s.navigation__link_active}`
                  : `${s.navigation__link}`
              }
              to="/bookings"
            >
              Bookings
            </NavLink>
          </li>
          <li className={s.navigation__listItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${s.navigation__link_active}`
                  : `${s.navigation__link}`
              }
              to="/events"
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
