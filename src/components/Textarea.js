import React ,{useState} from 'react'

export default function Textarea(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("converted to uppercase","success")
    
    
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")
  }
  const handleOnChange=(event)=>{
   
    setText(event.target.value);
  }
  const handleSpeakClick=()=>{
    let newText=new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(newText);
    props.showAlert("Speaking","success");
  
  }
  const handleCopy=()=>{
    let newText=document.getElementById("mybox")
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied to clipboard","success");
   }
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success")
  }
  const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="mybox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}value={text} rows="12"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpeakClick}>Speak out</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>  
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length != 0}).length} words and {text.length} characters</p>
      <p>{0.008*text.length} minutes to read </p>
      <h2>preview</h2>
      <p>{text.length>0?text:'enter something in the text form to preview it here'}</p>
    </div>
    </>
  )
}
