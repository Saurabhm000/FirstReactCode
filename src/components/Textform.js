import React,{useState} from 'react'

function Textform(props) {
    const [text, setText] = useState("");

    const addTextValue = (event)=>{
        setText(event.target.value);
        
    }

    const buttonUpClick = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
    }
    const buttonLowClick = ()=>{
       let newText = text.toLowerCase();
       setText(newText);
    }
    
    return (
        <>
        <div className='container my-4'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' id='mybox' value={text} onChange={addTextValue}  rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={buttonUpClick}>Conver to UpperCase</button>
            <button className="btn btn-primary" onClick={buttonLowClick}>Conver to LowerCase</button>
        </div>
        <div className='container'>
            <h2>Your Paragraph have {text.length} Characters including spaces and {text.split(' ').length}  words</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default Textform
