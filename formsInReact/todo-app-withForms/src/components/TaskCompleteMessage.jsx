const Message =({todoItems}) => {

  return(
     todoItems.length==0 && <h1> Your tasks are completed </h1>
  )

}
export default Message;