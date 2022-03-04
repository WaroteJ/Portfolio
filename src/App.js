import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App dark flex flex-col min-h-screen">
          <Header/>
          <div className='grow dark:bg-primary-300'>
          <Routes>
            <Route path="home" element={<></>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
