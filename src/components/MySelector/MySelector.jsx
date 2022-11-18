import "./MySelector.scss";

export function MySelector({ options, onChange }) {
  return (
    <select onChange={onChange}>
      <option>Первый</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
