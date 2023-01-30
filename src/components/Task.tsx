import { Check, Trash } from "phosphor-react";
import { ITask } from "../types/ITask";
import styles from "./Task.module.css";

interface TaskParams {
  task: ITask;
}

export function Task({ task }: TaskParams) {
  const { isCompleted, content } = task;
  return (
    <div className={styles.task}>
      <button className={`${styles.taskRadio} ${isCompleted && styles.completed}`}>
        <Check />
      </button>
      <p className={`${isCompleted && styles.completed}`}>{content}</p>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
