import React ,{useState} from 'react'

export default function Textarea(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText)
    
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
   
    setText(event.target.value);
  }
  const handleSpeakClick=()=>{
    let newText=new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(newText);
  }
  const handleCopy=()=>{
    let newText=document.getElementById("mybox")
    newText.select();
    navigator.clipboard.writeText(newText.value)
   }
  const handleClearClick=()=>{
    let newText="";
    setText(newText)
  }
  const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="mybox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}value={text} rows="12"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleSpeakClick}>Speak out</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.length} minutes to read </p>
      <h2>preview</h2>
      <p>{text.length>0?text:'enter something in the text form to preview it here'}</p>
    </div>
    </>
  )
}
