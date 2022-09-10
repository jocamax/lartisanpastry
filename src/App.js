import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='./contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
