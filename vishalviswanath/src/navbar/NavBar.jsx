import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../index.css';
import { useState } from 'react';
import SideBar from './SideBar';

const NavBar = ({ pages }) => {
  const [currentBar, setCurrentBar] = useState('navbar');

  const [sideBar, setSideBar] = useState(false);

  const handleClose = () => {
    setSideBar(false);
    setCurrentBar('navbar');
  };

  const handleSideBar = () => {
    setSideBar(!sideBar);
    setCurrentBar(currentBar === 'navbar' ? 'sidebar' : 'navbar');
  };

  return (
    <>
      {currentBar === 'navbar' ? (
        <ul className='navbar'>
          {pages.map((page, i) => (
            <span key={i}>
              <Link to={`${page}`}>
                <button id='nav-btn'>{page}</button>
              </Link>
            </span>
          ))}
          <Link to='techbeehub' target='_blank'>
            <button id='nav-btn' disabled>
              TechBee{' '}
            </button>
          </Link>
        </ul>
      ) : (
        <SideBar className='sidebar' pages={pages} onClose={handleClose} />
      )}

      <div className='nav-toggle-btn' onClick={handleSideBar}>
        <div id='menu'>
          <div className='dots'></div>
          <div className='dots'></div>
          <div className='dots'></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
