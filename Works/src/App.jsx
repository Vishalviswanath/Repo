import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import { createRef } from 'react';

function App() {
  const scrollRef = createRef();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <>
    <div id="loader">Assending</div>
      <main>
        <div id='page1'>
          <h1>
            <em> We</em>
            <em> are a </em>CREATIVE
            <em>
              {' '}
              studio
              <br />
            </em>
            DEDICATED <em>to </em>CULTURAL
            <br />
            ADVANCEMENT <em>through</em> <br />
            STRATEGY <em>and </em>DESIGN.
          </h1>
        </div>
        <div id='page2'></div>
        <div id='page3'></div>
      </main>
    </>
  );
}

export default App;
