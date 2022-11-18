import { useState } from "react";
import "./MyInput.scss";

export function MyInput({ title, type = "text", ...props }) {
  return (
    <fieldset className="MyInput">
      <label className="MyInput-Label" htmlFor={title}>
        {title}
        <input className="MyInput-Input" type={type} {...props}></input>
      </label>
    </fieldset>
  );
}
