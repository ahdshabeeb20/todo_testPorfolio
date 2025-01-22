import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./todo.module.css";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div className={styles.bodyTodo}>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
