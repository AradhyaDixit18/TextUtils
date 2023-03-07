import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText); 
    props.showAlert("Text converted to Uppercase !"  , "Success");
  };
  const handleDownClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Text converted to Lowercase !" , "Success");
  };
  const handleSpaceClick = () => {
    let newText2 = text.split(/[ ]+/);
    var newText3 = newText2.join(" ");
    setText(newText3);
    props.showAlert("Extra spaces removed !" , "Success");
  };
  const handleIt = () => {
    document.getElementById("myBox").style.fontStyle = "italic";
    props.showAlert("Text converted to Italic !" , "Success");
  };
  
  const Copy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard !" , "Success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text is cleared !" , "Success");
  };

  const handleReverse = () => {
    var splitString = text.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    setText(joinArray);
    props.showAlert("Text is Reversed !" , "Success");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleReverse}>
          Reverse
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSpaceClick}>
          Remove Spaces
        </button>
        <button className="btn btn-primary mx-3" onClick={handleIt}>
          𝑰
        </button>
  
        <button className="btn btn-primary mx-3" onClick={Copy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary:</h2>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
