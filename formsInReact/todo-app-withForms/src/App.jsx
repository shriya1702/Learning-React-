import { useState } from 'react';
import Appname from './components/appname';
import Main from './components/AddTodo';
import List from './components/list';
import Message from './components/TaskCompleteMessage';

import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleOnAdd = (itemName, itemDueDate) => {
    console.log(`New item added : ${itemName} Date:${itemDueDate}`);
    const newTodoItem = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center classNameName='todo'>
      <div classNameName="container text-center">
        <Appname />
        <Main onAddItem={handleOnAdd} />
      <Message todoItems={todoItems} />
        <List todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
