import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleInput(e) {
    return setNewItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page from refreshing

    if (newItem === "") return;
    /*
        - spread out (unpack) todos since you can't change the state of the data structure
        (but can change the contents if you spread it out).
        - If youw ant to modify the existing state, you need to add a function `() => {}`
        - Function takes in one argument - the CURRENT state of the object (currentTodos)
    */

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={handleInput} type="text" id="item" />
      </div>
      <button className="btn">Add Todo</button>
    </form>
  );
}
