import { useRef } from "react";
import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function Main({ onAddItem }) {
  // const [todoName, setTodoName] = useState('');
  // const [date, setDate] = useState('');
  const todoname = useRef(); 
  const duedate = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  // };

  const handleAddButtonClick = (event) => {

    console.log(event);
    event.preventDefault();
    const todoName= todoname.current.value;
    const date= duedate.current.value;
   
    alert(todoName);
    alert(date);
    // if (todoName && date) { // Ensure both values are provided
    todoname.current.value="";
    duedate.current.value="";
    onAddItem(todoName, date);
     
  
      // setDate(''); // Reset to empty string
      // setTodoName(''); // Reset to empty string
    // }
  };

  return (
    <form classNameName="row"
          onSubmit={handleAddButtonClick}
    
    >
      <div classNameName="col-6">
        <input
          ref= {todoname}
          type="text"
          placeholder="Enter the todo here"
          // onChange={handleNameChange}
        />
      </div>
      <div classNameName="col-4">
        <input
         ref= {duedate}
          type="date"
          // onChange={handleDateChange}
        />
      </div>
      <div classNameName="col-2">
        <button
          type="submit"
          classNameName="btn btn-success"
        >
          <MdAddComment />

        </button>
      </div>
    </form>
  );
}

export default Main;
