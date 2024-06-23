
const Input = ({  handleOnKeyDown } ) => {
  return(
    <input type= 'text'
     placeholder="Enter you fav food"
    //  onChange= {handleOnChange}
     onKeyDown={handleOnKeyDown}
     
     >
    </input>
  )
}

export default Input;
