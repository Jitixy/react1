
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  const[mode,setMode]=useState('light');
  const togglemode=()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="Jtext" About="about us" mode={mode} togglemode={togglemode}/>
    
    <div className="container my-3">
    <Textarea heading="Enter the text " mode={mode}/>
    {/* <About/> */}
    </div>
  
    </>
  );
}

export default App;
