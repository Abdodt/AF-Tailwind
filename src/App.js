import './App.css';
import Nav from './components/Nav';
import Mast from './components/Mast';
import Features from './components/Features';
import Cards from './components/Cards';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Nav className="absolute" />  
    <Mast />
    <Info />
    <Features />
    <Cards />
    <Footer />
    </>
  );   
}

export default App;
