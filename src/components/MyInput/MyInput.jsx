import { useState } from "react";
import { MyButton } from "../MyButton";
import "./MyInput.scss";

export function MyInput() {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    setValue("");
  };

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
      ></input>
      <MyButton id={45} onClick={handleClick} disabled={false}>
        Button
      </MyButton>
    </>
  );
}
