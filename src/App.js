import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Contact from "./components/Contact";
import Projects from "./components/Projects";


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
