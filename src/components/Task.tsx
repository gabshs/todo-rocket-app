import { Check, Trash } from "phosphor-react";
import { ITask } from "../types/ITask";
import styles from "./Task.module.css";

interface TaskProps {
  task: ITask;
  onChangeTask: (task: ITask) => void;
}

export function Task({ task, onChangeTask }: TaskProps) {
  const { isCompleted, content } = task;

  function handleChangeTask() {
    onChangeTask(task);
  }

  return (
    <div className={styles.task}>
      <button onClick={handleChangeTask} className={`${styles.taskRadio} ${isCompleted && styles.completed}`}>
        <Check />
      </button>
      <p className={`${isCompleted && styles.completed}`}>{content}</p>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
