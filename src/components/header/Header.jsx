import './Header.scss';
import logo from '../../assets/graduation-cap-on-a-book-in-vertical-position-svgrepo-com.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <NavLink to={'/'}>
          <img className={'logo'} src={logo} alt='logo' />
        </NavLink>
        <ul className={'menu'}>
          <li>
            <Link to='/create-scenario'>Create scenario</Link>
          </li>
          <li>
            <Link to='/select-scenario'>Select scenario</Link>
          </li>
          <li>
            <Link to='/execute-scenario'>Execute scenario</Link>
          </li>
          <li>
            <Link to='/otolology-merging'>Increase system knowledge</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
