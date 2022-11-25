import React, { useEffect } from "react";
import "./index.scss";

export function PostItem({ title, body, deleteItem }) {
  useEffect(() => {
    console.log("Выполнится 1 раз на стадии монтирования компонента");
    const timer = setInterval(() => console.log("каждую секунду"), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="PostItem">
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={deleteItem}>delete</button>
    </div>
  );
}
