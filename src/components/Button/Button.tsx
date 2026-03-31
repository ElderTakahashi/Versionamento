interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  size,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding:
          size === "small"
            ? "4px 8px"
            : size === "large"
              ? "12px 24px"
              : "8px 16px",
        background: variant === "primary" ? "#6366f1" : "transparent",
        color: variant === "primary" ? "#fff" : "#6366f1",
        border: "2px solid #6366f1",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontSize: "14px",
      }}
    >
      {label}
    </button>
  );
};
