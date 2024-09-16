import { TbUserShare } from 'react-icons/tb';

const ShareButton = ({ title, text, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch (error) {
        console.error('Error sharing content: ', error);
      }
    } else {
      console.log('Web Share API not supported in this browser');
    }
  };

  return (
    <>
      <button
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5px',
          right: '0px',
          margin: '10px',
        }}
        onClick={handleShare}
      >
        <TbUserShare style={{ width: '30px', height: '30px' }} />
      </button>
    </>
  );
};

export default ShareButton;
