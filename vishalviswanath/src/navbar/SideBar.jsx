import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const SideBar = ({ pages, onClose }) => {
  return (
    <>
      <div className='asidebar' onClick={onClose}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          fill='#e8eaed'
          onClick={onClose}
          className='closesvg'
        >
          <path
            d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'
            fill='var(--sol-maroon)'
          />
        </svg>
        <div className='sidebar'>
          {pages.map((page, i) => (
            <span key={i}>
              <Link to={`${page}`}>
                <button id='sid-nav-btn'>{page}</button>
              </Link>
            </span>
          ))}
          <Link to='techbeehub' target='_blank'>
            <button id='sid-nav-btn' disabled>
              TechBee{' '}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
