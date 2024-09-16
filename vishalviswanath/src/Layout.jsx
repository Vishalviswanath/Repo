import { Link, Outlet, useLocation } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import { FcLike } from 'react-icons/fc';

const Layout = () => {
  const pages = ['about', 'projects', 'skills', 'contact'];
  const location = useLocation();

  const currentPage = location.pathname.replace('/', '') || 'Home';

  return (
    <>
      <nav>
        <Link to='/' className='nav-home'>
          <span className='subhead'>vishal </span>
        </Link>
        <NavBar pages={pages} />
      </nav>
      <main>
        <div className='bgimage'>
          {/* <img src='/src/assets/bgimage/bgimage.png' alt='bgimage' /> */}
        </div>
        <section>
          {currentPage !== `Home` && <p className='header'>{currentPage}</p>}
          <Outlet />
        </section>
      </main>
      <footer>
        Designed and Developed by me
        <FcLike />
      </footer>
    </>
  );
};

export default Layout;
