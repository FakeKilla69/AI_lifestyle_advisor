export async function fetchAdvice({ style, topic, age, profession, extra, user_message }) {
  console.log("Отправляемые данные на сервер:", { style, topic, age, profession, extra, user_message }); // Отладка
  const res = await fetch("http://localhost:8000/api/advice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ style, topic, age, profession, extra, user_message })
  });
  if (!res.ok) throw new Error("Ошибка при получении совета");
  const data = await res.json();
  return data.advice;
} 