import "./App.css";
import fuzz from "./assets/img/fuzz.png";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const buttonClick1On = () => {
    setSwitch1(true);
  };
  const buttonClick1Off = () => {
    setSwitch1(false);
  };

  const buttonClick2On = () => {
    setSwitch2(true);
  };
  const buttonClick2Off = () => {
    setSwitch2(false);
  };
  const buttonClick3On = () => {
    setSwitch3(true);
  };
  const buttonClick3Off = () => {
    setSwitch3(false);
  };

  return (
    <>
      <div className="fuse">
        <img id="fuzz" src={fuzz} alt="" />
      </div>
      <div className="ready">
        <div className="btn">
          <div className="button">
            <button
              className={switch1 ? "activated" : ""}
              onClick={buttonClick1On}
            >
              ON
            </button>
            <button
              className={switch1 ? "" : "activated"}
              onClick={buttonClick1Off}
            >
              OFF
            </button>
          </div>
          <div className="button">
            <button
              className={switch2 ? "activated" : ""}
              onClick={buttonClick2On}
            >
              ON
            </button>
            <button
              className={switch2 ? "" : "activated"}
              onClick={buttonClick2Off}
            >
              OFF
            </button>
          </div>
          <div className="button">
            <button
              className={switch3 ? "activated" : ""}
              onClick={buttonClick3On}
            >
              ON
            </button>
            <button
              className={switch3 ? "" : "activated"}
              onClick={buttonClick3Off}
            >
              OFF
            </button>
          </div>
        </div>
        <div className={switch1 && switch2 && switch3 ? "go": "noWay" }>
          <p>{switch1 && switch2 && switch3 ? "Go" : "NoWay!"}</p>
          {switch1 && switch2 && switch3 ? moveImg() : ""}
        </div>
      </div>
    </>
  );
}

export default App;
const moveImg = () => {
  let image = document.getElementById("fuzz");
  let pos = 0;
  let largeur = window.innerWidth
 
  const frame = () =>{
     
    if(pos === largeur){ 
      clearInterval(id)
  }
  else{
    pos ++;
    image.style.left = pos + "px";
    
  }
  
  
  if (pos===largeur) {
      image.style.left = 0 + "px";
      
  }
}

let id = setInterval(frame,1);
};

// console.log(moveImg());