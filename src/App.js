import './css/style.css'

import Hero from './pages/Hero';
import Manual from './pages/Manual'
import Support from './pages/Support'
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="container">
        <Manual />
        <Support />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
