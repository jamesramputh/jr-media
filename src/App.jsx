import { useRef } from 'react'
import { Header, Footer, Hero, Packages, Contact } from './components';
import './App.scss';

function App() {
  const scrollToRef = (ref) => {
    if (ref.current) {
      console.log(ref.current); // Check what element the ref is pointing to
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const packagesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="appContainer">
      <Header 
          scrollToRef={scrollToRef} 
          packagesRef={packagesRef}
          contactRef={contactRef}
        />
      
        <Hero contactRef={contactRef} packagesRef={packagesRef} />
        <Packages packagesRef={packagesRef} />
        <Contact contactRef={contactRef} />

      <Footer />
    </div>
  )
}

export default App
