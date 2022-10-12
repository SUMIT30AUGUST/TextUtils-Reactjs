import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=> {
    
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase!","success");
    }
    
    const handleloClick=()=> {
         let newtext=text.toLowerCase();
         setText(newtext)
         props.showAlert("converted to lowercase!","success");
     }

     const clearOnClick=()=> {
    
         let newtext=""
         setText(newtext)
         props.showAlert("Text cleared!","success");
     }

    const handleOnChange=(event)=> {
    
        setText(event.target.value)
    }

    const handlecopy=()=> {
       
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard !","success");
    }

    const [text, setText] = useState("");
    return ( 
    <>
     <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h1 className="mb-2">{props.heading}</h1> 
       <div className="mb-3">
         <textarea className="form-control"  value={text} onChange={handleOnChange}
         style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color :props.mode==='dark'?'white':'#042743'}} 
          id="myBox" rows="8"> </textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to uppercase</button> &nbsp;
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleloClick}>Convert to lowercase</button> &nbsp;
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={clearOnClick} >Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handlecopy}>Copy Text</button>
</div>
<div className="container my-3" style ={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>Your text summary</h1>
<p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length } words and {text.length} chararcters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read left</p>
</div>
<div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
<h2>Preview</h2>
<p >{text.length>0?text:"Nothing to preview "}</p>
</div>
 </> 
 )
}
