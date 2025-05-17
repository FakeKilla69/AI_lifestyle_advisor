import React, { useState } from "react";
import styles from "../styles/App.module.css";

function UserForm({ setUserData, setIsActive, adviceType }) {
  const [form, setForm] = useState({
    topic: "",
    age: "",
    profession: "",
    extra: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserDataState] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.topic && form.age && form.profession) {
        console.log("Данные формы перед отправкой:", form); // Отладка
        setUserData(form); // Убедитесь, что это правильно устанавливает данные
        setIsActive(true);
        setSubmitted(true);
    }
  };

  const handleAdviceTypeChange = (type) => {
    setAdviceType(type);
    console.log("Выбранный тип совета:", type); // Отладка
  };

  console.log("Текущий adviceType в UserForm:", adviceType); // Отладка
  
  return (
    <div className={styles.userform}>
      <h3>Персонализация</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Тема:
          <input
            type="text"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Возраст:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            min="10"
            max="120"
          />
        </label>
        <label>
          Профессия:
          <input
            type="text"
            name="profession"
            value={form.profession}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Доп. информация:
          <textarea
            name="extra"
            value={form.extra}
            onChange={handleChange}
            rows={3}
          />
        </label>
        <button type="submit" disabled={submitted}>
          {submitted ? "Данные сохранены" : "Сохранить"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;