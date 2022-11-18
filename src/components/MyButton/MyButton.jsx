import "./MyButton.scss";

export function MyButton({ children, icon, ...props }) {
  return (
    <button className="MyButton" {...props}>
      <i className="MyButton-Icon">
        <img src={icon} alt="" />
      </i>
      <span className="MyButton-Text">{children}</span>
    </button>
  );
}
