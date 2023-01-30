import { Check, PlusCircle, Trash } from "phosphor-react";
import Logo from "./assets/logo.svg";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="todo logo" />
      </header>
      <main className={styles.container}>
        <form className={styles.taskForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <PlusCircle size={16} />
          </button>
        </form>
        <div className={styles.tasksContent}>
          <div className={styles.tasksInfo}>
            <div>
              <h3>Tarefas criadas</h3>
              <span>0</span>
            </div>
            <div>
              <h3>Concluídas</h3>
              <span>1 de 2</span>
            </div>
          </div>
          <div className={styles.task}>
            <button className={`${styles.taskRadio}`}>
              <Check />
            </button>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus consequatur aut ut</p>
            <button className={styles.deleteTask}>
              <Trash size={24} />
            </button>
          </div>
          <div className={styles.task}>
            <button className={`${styles.taskRadio} ${styles.completed}`}>
              <Check />
            </button>
            <p className={`${styles.completed}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus consequatur aut ut
            </p>
            <button className={styles.deleteTask}>
              <Trash size={24} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
