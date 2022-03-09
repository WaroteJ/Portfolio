import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className="App dark flex flex-col min-h-screen">
          <Header />
          <div style={{paddingTop:"64px"}} className='grow dark:bg-primary-300'>
          <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<></>} />
            <Route path="portfolio" element={<Portfolio/>} />
            <Route path="skills" element={<Skills/>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
