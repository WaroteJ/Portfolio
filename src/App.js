import './App.css';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Fade from './Components/Fade';

function App() {

  return (
    <div className="App dark flex flex-col min-h-screen">
        <Header />
        <div style={{paddingTop:"64px"}} className='grow dark:bg-primary-300'>
          {/* <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<></>} />
            <Route path="portfolio" element={<Portfolio/>} />
            <Route path="skills" element={<Skills/>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes> */}
          <Home path={"about"}/>
          <Fade fadeClass={"fade-left"}>
            <Portfolio path={"portfolio"}/>
          </Fade>
          <Fade fadeClass={"fade-right"}>
            <Skills path={"skills"}/>
          </Fade>
          {/* Add route to contact */}
        </div>
    </div>
  );
}

export default App;
