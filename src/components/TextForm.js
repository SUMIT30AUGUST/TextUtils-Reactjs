import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=> {
       // console.log("uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase!","success");
    }
    
    const handleloClick=()=> {
        // console.log("uppercase was clicked");
         let newtext=text.toLowerCase();
         setText(newtext)
         props.showAlert("converted to lowercase!","success");
     }

     const clearOnClick=()=> {
        // console.log("uppercase was clicked");
         let newtext=""
         setText(newtext)
         props.showAlert("Text cleared!","success");
     }

    const handleOnChange=(event)=> {
        //console.log("on change")
        setText(event.target.value)
    }

    const handlecopy=()=> {
        console.log("i am copy")
        var text=document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard !","success");
    }

    const [text, setText] = useState("");
    return ( 
    <>
     <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h1>{props.heading}</h1> 
       <div className="mb-3">
         <textarea className="form-control"  value={text} onChange={handleOnChange}
         style={{backgroundColor: props.mode==='dark'?'grey':'white', color :props.mode==='dark'?'white':'#042743'}} 
          id="myBox" rows="8"> </textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button> &nbsp;
<button className="btn btn-primary" onClick={handleloClick}>Convert to lowercase</button> &nbsp;
<button className="btn btn-primary  " onClick={clearOnClick} >Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
</div>
<div className="container my-3" style ={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length } words and {text.length} chararcters</p>
<p>{0.008*text.split(" ").length} minutes read left</p>
</div>
<div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
<h2>Preview</h2>
<p >{text.length>0?text:"Enter something to preview it here"}</p>
</div>
 </> 
 )
}
