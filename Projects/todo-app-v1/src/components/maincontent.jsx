import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function Main({ onAddItem }) {
  const [todoName, setTodoName] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (todoName && date) { // Ensure both values are provided
      onAddItem(todoName, date);
      setDate(''); // Reset to empty string
      setTodoName(''); // Reset to empty string
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          value={todoName}
          placeholder="Enter the todo here"
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButtonClick}
        >
          <MdAddComment />

        </button>
      </div>
    </div>
  );
}

export default Main;
