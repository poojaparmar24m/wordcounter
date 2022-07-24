import React  from "react";

export default function About(props) {

    // const [myStyle,setmyStyle]= useState({
    //     color:"black",
    //     backgroundColor:"white"
      
    // })

  //   const [btn,setBtn] =useState("Enable Dark Mode");

  //  const hadlestyle =()=>{
  //   if (myStyle.color==='black') {
  //    setmyStyle({
  //           color:"white",
  //           backgroundColor:"black"
  //       })
  //       setBtn("Enable Light Mode");
  //   }
  //   else{
  //       setmyStyle({
  //           color:"black",
  //           backgroundColor:"white"
  //       }) 
  //       setBtn("Enable Dark Mode");
  //   }
  //  }

const myStyle={
  color: props.mode==="dark"? 'white':"black",
  backgroundColor:props.mode==='dark'?'rgb(27 48 79)':"white"
}
   
  return (
    <div>
      <div className="container my-3" style={{color: props.mode==="dark"? 'white':"black"}}>
        <h3>About Us</h3>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button  style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong style={myStyle}> Analyze your</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Microsoft Word is a word processing software developed by Microsoft. It was first released on October 25, 1983, under the name Multi-Tool Word for Xenix systems.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong style={myStyle}>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Commercial versions of Word are licensed as a standalone product or as a component of Microsoft Office suite of software, which can be purchased either with a perpetual license or as part of a Microsoft 365 subscription. Word can also be acquired by purchasing Windows RT or the discontinued Microsoft Works suite.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong style={myStyle}>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Commercial versions of Word are licensed as a standalone product or as a component of Microsoft Office suite of software, which can be purchased either with a perpetual license or as part of a Microsoft 365 subscription. Word can also be acquired by purchasing Windows RT or the discontinued Microsoft Works suite.
      </div>
    </div>
  </div>
</div>

    {/* <button className="btn btn-primary my-3" onClick={hadlestyle}>{btn}</button> */}
        </div>
    </div>
  );
}
