import styles from  "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react";

function App() {
  
  let calVal = useState()

  return (
    <center>
       <div className={styles.calculator}>
          <Display></Display>
          <ButtonsContainer></ButtonsContainer>
       </div>
 
    </center>
   
  )
}

export default App
