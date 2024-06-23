
import Chai from "./chai"
import Button from "./button"
import Hello from "./hello"
import Container from "./Container"
import Input from "./input"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

<hello></hello>
function App() {

  
  // let foo =['apple','dal','banana','chawal']
  // let [TextValue, setTextValue]= useState("mera fav khana yahan aayega"); 
  // //humey code  chota kaney key liye destructure kardiya

 

  //let targetState=useState("mera fav khanana yahan aayega")
  // let e1= textState[0];  //current value
  // let e2= textState[1]; //method


  // console.log(TextValue);
  // console.log(setTextValue);

  const handleOnChange = (event) =>{
    // console.log(event.target.value);

    // e2(event.target.value);
  };
  let [foodItems, setFoodItems]=   useState(["rice", "pizza", "quesadella", "tacos"]);

  const handleOnKeyDown = (event) => {
    if(event.key== 'Enter'){
      let newFoodItem= event.target.value;
      let newItems = [...foodItems ,newFoodItem] //... is spread operator When we want to copy the elements of a particular array into a new array without affecting the original array, we can use the spread operator.
      setFoodItems(newItems);

    }
  };




  return (
    <>
    
   <Container>
    {/* <Hello/> */}
    
    <Input handleOnKeyDown={handleOnKeyDown} ></Input> 
    <Button/>

  

   <Chai items = {foodItems}> </Chai>
             

   </Container>


 
   </>

   
  )

  
}

export default App
