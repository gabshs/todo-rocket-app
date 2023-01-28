import Logo from "./assets/logo.svg";
import { PlusCircle } from "phosphor-react";

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
      </main>
    </>
  );
}
