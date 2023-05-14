import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./style/intro.css"
import "./style/bmrStyle.css"
import "./style/info.css"
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Kalkulator from './components/Kalkulator';
import Info from './components/Info';
import Footer from "./components/Footer";
import Rekomendasi from "./components/Rekomendasi";
import Tips from "./components/Tips";

function App() {
  
  return (
    <div>
      <div>
        <NavigationBar />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />}/>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Kalkulator/>}/>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Info />}/>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="rekomendasi" element={<Rekomendasi/>}/>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="tips" element={<Tips/>}/>
        </Routes>
      </BrowserRouter>

      <div>
        <Footer/>
      </div>
    </div>
  );
  
}

export default App;
