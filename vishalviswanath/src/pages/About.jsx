import '../styles/About.css';

const About = () => {
  return (
    <div>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor, vestibulum magna sed, convallis ex.
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor, vestibulum magna sed, convallis ex.
      </span>
      <form className='contact-form'>
        <div className='try'>
          <input type='text' required />
          <span>Name</span>
        </div>
        <div className='try'>
          <input type='text' required />
          <span>Email</span>
        </div>
        <div className='try'>
          <textarea type='text' required />
          <span>Message</span>
        </div>
        <button id='cont-btn'>Send</button>
      </form>
    </div>
  );
};

export default About;
