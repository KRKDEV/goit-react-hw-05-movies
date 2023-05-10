// import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  //   const navigate = useNavigate();
  return (
    <nav className={css.navigation}>
      <a href="/">Home </a>
      <a href="/">Movies</a>

      {/* <Link to="/">Home</Link>
      <Link to="/">Movies</Link> */}
    </nav>
  );
};

export default Navigation;
