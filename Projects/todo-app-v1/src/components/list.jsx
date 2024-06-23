import { AiFillDelete } from "react-icons/ai";

function List({ todoItems, onDeleteClick }) {
  return (
    <div>
      {todoItems.map((item) => (
        <div className="row" key={item.name}>
          <div className="col-6">
            <h4>{item.name}</h4>
          </div>
          <div className="col-4">
          <h4>  {item.date}</h4>
          </div>
          <div className="col-2 mt-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDeleteClick(item.name)}

            >
              <AiFillDelete />

            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
