import { Link, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  //   const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className={css.nav}>
      <Link
        to="/"
        className={location.pathname === '/' ? css.active : css['nav__link']}
      >
        Home
      </Link>
      <Link
        to="/movies"
        className={
          location.pathname === '/movies' ? css.active : css['nav__link']
        }
      >
        Movies
      </Link>
    </nav>
  );
};

export default Navigation;
