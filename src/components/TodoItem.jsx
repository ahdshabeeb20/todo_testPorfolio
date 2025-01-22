import styles from "./todoitem.module.css";

export default function TodoItem({ item, setTodos, todos }) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.todoName === name ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  //condition for styles
  const markText = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={markText} onClick={() => handleClick(item.todoName)}>
          {item.todoName}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => {
              handleDelete(item);
            }}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
