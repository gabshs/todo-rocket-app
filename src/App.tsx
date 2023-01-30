import { Check, Clipboard, PlusCircle, Trash } from "phosphor-react";
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

  function countCompletedTasks() {
    if (tasks.length === 0) {
      return tasks.length;
    }

    const completedTasks = tasks.filter((task) => task.isCompleted);

    return `${completedTasks.length} de ${tasks.length}`;
  }

  function onChangeTask(currentTask: ITask) {
    const updatedTasks = tasks.map((task) => {
      if (currentTask === task) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function onDeleteTask(currentTask: ITask) {
    const filteredTasks = tasks.filter((task) => task !== currentTask);

    setTasks(filteredTasks);
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
              <span>{countCompletedTasks()}</span>
            </div>
          </div>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} key={task.content} />
            ))
          ) : (
            <div className={styles.emptyList}>
              <img src="./src/assets/clipboard.svg" alt="Imagem de uma prancheta" />
              <h2>Você ainda não tem tarefas cadastradas</h2>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
