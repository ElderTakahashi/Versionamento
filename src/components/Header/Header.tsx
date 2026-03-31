interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header
      style={{
        padding: "24px 32px",
        background: "#6366f1",
        color: "#fff",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>{title}</h1>
      {subtitle && (
        <p style={{ margin: "4px 0 0", fontSize: "14px", opacity: 0.8 }}>
          {subtitle}
        </p>
      )}
    </header>
  );
};
