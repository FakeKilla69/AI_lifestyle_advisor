import React from "react";
import styles from "../styles/App.module.css";

const types = [
  { key: "Мотивация", label: "Мотивация" },
  { key: "Практичный", label: "Практичный" },
  { key: "Жесткий", label: "Жесткий" },
  { key: "С юмором", label: "С юмором" },
];

function Sidebar({ adviceType, setAdviceType, isActive }) {
  return (
    <div className={styles.sidebar}>
      <h3>Тип совета</h3>
      {types.map((type) => (
        <button
          key={type.key}
          className={adviceType === type.key ? styles.activeBtn : styles.typeBtn}
          onClick={() => {setAdviceType(type.key);}}
          disabled={!isActive}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}

export default Sidebar; 