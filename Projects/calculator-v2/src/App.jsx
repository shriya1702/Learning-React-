import styles from  "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react";

function App() {
  
  const [calVal, setCalVal]= useState("");
  const onButtonClick = (buttonText) => {
    
    // alert(buttonText)}
    if (buttonText === "C") {
      setCalVal("");

    }
    else if (buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);

    }
    else {
      const newDisplayVal= calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <center>
       <div className={styles.calculator}>
          <Display displayValue = {calVal}></Display>
          <ButtonsContainer onButtonClick ={onButtonClick}></ButtonsContainer>
       </div>
 
    </center>
   
  )
}

export default App
