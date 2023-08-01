type ButtonProps = {
  onClick(): void;
  children: React.ReactNode;
  style: React.CSSProperties;
};

const Button = ({ children, ...props }: ButtonProps) => {
  const { onClick, style } = props;

  return (
    <button style={style} onClick={onClick}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
