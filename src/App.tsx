import { Check, PlusCircle, Trash } from "phosphor-react";
import Logo from "./assets/logo.svg";

import styles from "./App.module.css";
import { Task } from "./components/Task";
import { ITask } from "./types/ITask";

const tasks: ITask[] = [
  {
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus consequatur aut ut",
    isCompleted: false,
  },
  {
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus consequatur aut ut",
    isCompleted: false,
  },
  {
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minus consequatur aut ut",
    isCompleted: false,
  },
];

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
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </div>
      </main>
    </>
  );
}
