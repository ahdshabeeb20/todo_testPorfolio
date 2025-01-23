import Styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={Styles.footer}>
      <span className={Styles.content}>Completed todos: {completedTodos}</span>
      <span className={Styles.content}>Total todos listed: {totalTodos}</span>
    </div>
  );
}
