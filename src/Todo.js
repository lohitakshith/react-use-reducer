import React from "react";
import "./style.css";
import { Actions } from "./Actions";
import moment from "moment";
const isComplete = () => {
  return todo.status ? "todo complete" : "todo incomplete";
};
const Todo = ({ todo, dispatch }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <p
          className="card-text"
          style={
            todo.status
              ? { color: "green", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          {todo.name}
        </p>
        <p>{moment(todo.date).format("DD-MM-YYYY")}</p>
        {todo.status ? <button className="btn btn-success disabled">Completed</button>:<button
          className="btn btn-secondary"
          onClick={() =>
            dispatch({ type: Actions.TOGGLE, payload: { id: todo.id } })
          }
        >
          Complete
        </button>
        }
        <button
          className="btn btn-danger ml-2"
          onClick={() =>
            dispatch({ type: Actions.DELETE, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;
