import "./App.css";
import Home from "./components/Home";
import Intrests from "./components/Intrests";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
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
        <Route path="/intrests" element={<Intrests/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
