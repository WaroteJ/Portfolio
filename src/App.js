import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App dark flex flex-col min-h-screen">
          <Header/>
          <div className='grow dark:bg-primary-300 pt-10 pb-5'>
          <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<></>} />
            <Route path="portfolio" element={<Portfolio/>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
