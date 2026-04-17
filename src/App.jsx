import Home from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App(){
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;