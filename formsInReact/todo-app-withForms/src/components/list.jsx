import { AiFillDelete } from "react-icons/ai";

function List({ todoItems, onDeleteClick }) {
  return (
    <div>
      {todoItems.map((item) => (
        <div classNameName="row" key={item.name}>
          <div classNameName="col-6">
            <h4>{item.name}</h4>
          </div>
          <div classNameName="col-4">
          <h4>  {item.date}</h4>
          </div>
          <div classNameName="col-2 mt-2">
            <button
              type="button"
              classNameName="btn btn-danger"
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
