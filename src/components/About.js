import React, { useState } from 'react'

export default function About() {

  const [myStyle,setMyStyle]=useState({
    color:'white',
    backgroundColor:'black'

})
const [btnText,setBtntext]=useState("turn on dark mode")

const toggleStyle=()=>{
  if (myStyle.color === 'white'){
    setMyStyle({
      color:'black',
    backgroundColor:'white'
   
    })
  setBtntext("turn on dark mode")
  }
    else{
      setMyStyle({
        color:'white',
      backgroundColor:'black'
      })
      setBtntext("turn off dark mode")
    }
  }


 
  return (
    <div className='container' style={myStyle}>
      <h2>About us</h2><div className="accordion" id="accordionExample">
    <div className="accordion-item"  style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          who made it
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
         My name is daljeet and i am just improving and expanding my skills over various frameworks and currently doing react js.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          if you want to improve what can you do?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
         You can go back to the linked in post and comment me your views
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Nothing s down here😇
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          🫡
        </div>
      </div>
    </div>
    
  </div><div className="container my-3"><button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button></div></div>
  )
}
