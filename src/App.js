import "./App.css";
import Home from "./Home";
import Skills from "./Skills";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Routes,Route} from 'react-router-dom';
import Contact from "./Contact";
import Projects from "./Projects";


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contactme" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
