import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("");
 

  const handleonchange = (e) => {
    // console.log("on change");
    setText(e.target.value);
  };

  const handleupclick = () => {
    // console.log("click event was fired");
    // console.log("iiiiiiii" + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showalert("converted to Uppercase","success");
    // props.setAlert("converted to Uppercase","success");
  };

  const handleLoclick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showalert("converted to Lowercase","success");
  };
  const handleclear = () => {
    const newText = "";
    setText(newText);
    props.showalert("Cleared text","success");
  };
  const handlecapi = () => {
    const newText = text.toLowerCase();
    const setnew=newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(setnew);
    props.showalert("converted to Capitlize","success");
    
  };
  return (
    <>
      <div className="container my-3 ">
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#0f1f37" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleonchange}
          ></textarea>
        </div>
        <button disabled={text.length===0}    className="btn btn-primary mx-2 my-2" onClick={handleupclick}>
          convert to uppercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>
          convert to Lowercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecapi}>
          convert to Capitlize
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclear}>
          clear the text
        </button>
        
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3> Your summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Words and {text.length} Character
        </p>
        <p> {0.008 * (text.split(" ").filter((element)=> {return element.length!==0}).length)} Minutes to read word </p>
        <h3> Preview</h3>
        <p>{text.length > 0 ? text : "Nothing is preview"}</p>
      </div>
    </>
  );
}
