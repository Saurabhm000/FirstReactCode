import React,{useState} from 'react'

function Textform(props) {
    const [text, setText] = useState("Enter Text Here");

    const addTextValue = (event)=>{
        setText(event.target.value);
    }

    const buttonUpClick = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' id='mybox' value={text} onChange={addTextValue} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={buttonUpClick}>Conver to UpperCase</button>
        </div>
    )
}

export default Textform
