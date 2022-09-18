import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

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
