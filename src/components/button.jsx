import "../styles/button.css";
export const Button = (onClick, children, className) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};
