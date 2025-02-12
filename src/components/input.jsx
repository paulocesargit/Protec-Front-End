import "../styles/input.css";

export const Input = (type = "text", placeholder, value, onChange) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};
