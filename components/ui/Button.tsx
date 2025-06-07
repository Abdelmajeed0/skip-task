type ButtonVariant = "default" | "selected" | "disabled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "default",
  ...props
}: ButtonProps) => {
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    selected: "bg-green-600 hover:bg-green-700 text-white",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  const currentVariant = disabled ? "disabled" : variant;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${variants[currentVariant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
