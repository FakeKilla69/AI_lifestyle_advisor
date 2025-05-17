import React, { useState } from "react";
import styles from "../styles/App.module.css";
import { fetchAdvice } from "../api";

function Chat({ chatHistory, isActive, onSendMessage, userData, adviceType, setChatHistory }) {
  const [input, setInput] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() && userData) {
      console.log("Отправляемое сообщение:", input); // Отладка
      console.log("Данные пользователя в Chat:", userData); // Отладка
      onSendMessage(input);
      setInput("");

      // Получаем совет от AI
      try {
        const advice = await fetchAdvice({
          style: adviceType,
          topic: userData.topic,
          age: parseInt(userData.age),
          profession: userData.profession,
          extra: userData.extra,
          user_message: input
        });
        setChatHistory((prev) => [...prev, { role: "ai", content: advice }]);
      } catch (error) {
        console.error("Ошибка при получении совета:", error);
      }
    } else {
      console.error("userData не определен или отсутствует");
    }
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chatHistory}>
        {chatHistory.map((msg, idx) => (
          <div
            key={idx}
            className={msg.role === "user" ? styles.userMsg : styles.aiMsg}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form className={styles.chatInputForm} onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите сообщение..."
          disabled={!isActive}
          className={styles.chatInput}
        />
        <button type="submit" disabled={!isActive || !input.trim()} className={styles.sendBtn}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Chat; 