import React from "react";
import "./style.css";
import Todo from "./Todo";
import Form from "./Form";
import moment from "moment";
import { Actions } from "./Actions";
function reducer(todos, action) {
  // console.log(todos, action);
  switch (action.type) {
    case Actions.ADD: {
      const newTodos = [...todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    case Actions.TOGGLE: {
      const newTodos = todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    case Actions.DELETE: {
      const newTodos = todos.filter(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    default:
      return todos;
  }
}
export default function App() {
  const todosList = localStorage.getItem("todos");
  const [todos, dispatch] = React.useReducer(
    reducer,
    todosList ? JSON.parse(todosList) : []
  );
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState(
    moment(Date.now()).format("YYYY-MM-DD")
  );
  function handleSubmit(e) {
    e.preventDefault();
    if (date && name) {
      dispatch({
        type: Actions.ADD,
        payload: {
          id: Date.now(),
          name,
          status: false,
          date: new Date(date).getTime()
        }
      });
      setName("");
      setDate(moment(Date.now()).format("YYYY-MM-DD"));
    }
  }
  return (
    <div className="container p-2">
      <h4 style={{ textAlign: "center" }}>Todo List</h4>
      <Form
        name={name}
        date={date}
        setName={setName}
        setDate={setDate}
        handleSubmit={handleSubmit}
      />
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
