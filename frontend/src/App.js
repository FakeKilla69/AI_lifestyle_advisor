import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import UserForm from "./components/UserForm";
import styles from "./styles/App.module.css";

function App() {
  const [userData, setUserData] = useState({});
  const [adviceType, setAdviceType] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleSendMessage = (message) => {
    if (adviceType) {
      setChatHistory([...chatHistory, { role: "user", content: message }]);
    }
  };

  console.log("Текущие данные пользователя:", userData); // Отладка
  console.log("Текущий adviceType:", adviceType); // Отладка

  return (
    <div className={styles.container}>
      <Sidebar
        adviceType={adviceType}
        setAdviceType={setAdviceType}
        isActive={isActive}
      />
      <Chat
        chatHistory={chatHistory}
        isActive={isActive && adviceType}
        onSendMessage={handleSendMessage}
        userData={userData}
        adviceType={adviceType}
        setChatHistory={setChatHistory}
      />
      <UserForm
        setUserData={setUserData}
        setIsActive={setIsActive}
        setChatHistory={setChatHistory}
        adviceType={adviceType}
      />
    </div>
  );
}

export default App;