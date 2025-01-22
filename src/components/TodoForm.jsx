import { useState } from "react";
import styles from "./todoform.module.css";

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ todoName: "", done: false });
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.todoName.trim() === "") {
      alert("Todo cannot be empty!");
      return;
    }
    setTodos([...todos, todo]);
    setTodo({ todoName: "", done: false });
  };
  return (
    <form onSubmit={handleChange} className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="enter the todo..."
          value={todo.todoName}
          onChange={(e) => {
            setTodo({ todoName: e.target.value, done: false });
          }}
        />
        <button className={styles.modernButton} ontype="submit">
          Add
        </button>
      </div>
    </form>
  );
}
