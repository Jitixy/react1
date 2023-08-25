
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  
 
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const togglemode=()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
    }
  }
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
   setAlert({
    msg:message,
    type:type

   })
   setTimeout(() => {
    setAlert(null)
   }, 1000);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="JText"
          About="About"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textarea heading="Enter the text " mode={mode} showAlert={showAlert}/>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
