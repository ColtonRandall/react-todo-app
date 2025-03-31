import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]); // empty array for multiple todos to be added

  function handleInput(e) {
    return setNewItem(e.target.value);
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page from refreshing
    /*
      - spread out (unpack) todos since you can't change the state of the data structure
       (but can change the contents if you spread it out).
      - If youw ant to modify the existing state, you need to add a function `() => {}`
      - Function takes in one argument - the CURRENT state of the object (currentTodos)
    */
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={handleInput} type="text" id="item" />
        </div>
        <button className="btn">Add Todo</button>
      </form>
      <h1 className="header">Todo List</h1>
      <hr />
      <ul className="list">
        {todos.length === 0 && "All done 😊"}
        {/* loop through todos and render them in JSX using map */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
