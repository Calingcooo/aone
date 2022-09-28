import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }>Home</Route>
        <Route path="/About" element={ <About /> }>About</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
