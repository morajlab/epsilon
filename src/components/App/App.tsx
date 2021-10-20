import React from "react";
import { Cell } from "..";
import styles from "./App.module.css";

export const App = () => {
  // const innerWidth = window.innerWidth / 2;
  // const innerHeight = window.innerHeight / 2;
  // const cellCount = innerHeight * innerWidth;
  const cellCount = 2000;

  console.log(cellCount);

  return (
    <div className={styles.app}>
      {Array(cellCount)
        .fill(null)
        .map((_, key) => (
          <Cell key={key} />
        ))}
    </div>
  );
};

export default App;
