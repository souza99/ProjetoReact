import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './Footer/Footer';
import Calculadora from './Calculadora/Calculadora';

function App() {
  return (
    <div>
      <Header nome="Joao"/>
      <Calculadora/>
      <Footer/>
    </div>
  );
}

export default App;
