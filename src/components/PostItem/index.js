import React, { useEffect } from "react";
import "./index.scss";

export function PostItem({ author, text, deleteItem }) {
  useEffect(() => {
    console.log("Выполнится 1 раз на стадии монтирования компонента");
    const timer = setInterval(() => console.log("каждую секунду"), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="PostItem">
      <h3>author - {author}</h3>
      <p>{text}</p>
      <button onClick={deleteItem}>delete</button>
    </div>
  );
}
