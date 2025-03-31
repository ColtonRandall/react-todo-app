import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "All done 😊"}
      {/* loop through todos and render them in JSX using map */}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo} // pass in ALL props from component so you don't have to write out the following
            // id={id}
            // completed={completed}
            // title={title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
