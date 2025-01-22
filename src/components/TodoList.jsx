import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodo = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <>
      {todos.length > 0 ? (
        <div className={styles.list}>
          {sortedTodo.map((item) => (
            <TodoItem
              key={item.todoName}
              item={item}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        </div>
      ) : (
        <p>To do list is empty</p>
      )}
    </>
  );
}
