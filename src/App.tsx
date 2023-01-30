import { Check, PlusCircle, Trash } from "phosphor-react";
import Logo from "./assets/logo.svg";

import styles from "./App.module.css";
import { Task } from "./components/Task";
import { ITask } from "./types/ITask";
import { ChangeEvent, FormEvent, useState } from "react";

export function App() {
  const [tasks, setTasks] = useState([] as ITask[]);
  const [content, setContent] = useState("");

  function handleCreateTask(event: FormEvent) {
    event?.preventDefault();

    const task: ITask = {
      content,
      isCompleted: false,
    };

    setTasks([...tasks, task]);

    setContent("");
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="todo logo" />
      </header>
      <main className={styles.container}>
        <form className={styles.taskForm} onSubmit={handleCreateTask}>
          <input
            type="text"
            name="content"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setContent(event.target.value);
            }}
            value={content}
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            Criar <PlusCircle size={16} />
          </button>
        </form>
        <div className={styles.tasksContent}>
          <div className={styles.tasksInfo}>
            <div>
              <h3>Tarefas criadas</h3>
              <span>{tasks.length}</span>
            </div>
            <div>
              <h3>Concluídas</h3>
              <span>0</span>
            </div>
          </div>
          {tasks.map((task) => (
            <Task task={task} key={task.content} />
          ))}
        </div>
      </main>
    </>
  );
}
