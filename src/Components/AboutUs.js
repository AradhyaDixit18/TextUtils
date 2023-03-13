import React from "react";

export default function AboutUs(props) {
 
 const  myStyle = {
    color : props.mode === "dark" ? 'white' : 'black',
    backgroundColor : props.mode === "dark" ? 'black' : 'white',
  }

 
  
  return (
    <div className="container my-3" style={myStyle}>
      <h1>About Us</h1>
      <div class="accordion" id="accordionExample" style={myStyle}>
        <div class="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
            <strong>  Analyze your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             TextUtils is a utility which provides you an easy and quick way to enhance the beauty of your text by changing some of its properties.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
           <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a utility that is completely free to all users so that everyone can save their time and make their works look attractive to others. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter app is perfectly compatible with all the browsers such as Chrome, Brave, Firefox, Internet Explorer, Safari, Opera etc.   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
