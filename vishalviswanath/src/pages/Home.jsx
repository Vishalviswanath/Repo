import ShareButton from '../components/ShareButton';
import '../styles/Home.css';

const Home = () => {
  const shareData = {
    title: 'Vishal Portfolio',
    text: 'Visit my website.',
    url: 'https://portfolio-vvk.netlify.app/',
  };
  return (
    <div>
      <ShareButton
        title={shareData.title}
        text={shareData.text}
        url={shareData.url}
        className='share-btn'
      />
      <div className='profile'>
        <img
          src='/src/assets/image3.png'
          alt='profile'
          className='profile_img'
        />
      </div>
    </div>
  );
};

export default Home;
