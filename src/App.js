import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Routing from './configs/Routing'
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
    </BrowserRouter>
  );
}

export default App;
