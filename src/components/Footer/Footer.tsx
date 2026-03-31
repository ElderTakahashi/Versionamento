interface FooterProps {
  text?: string;
}

export function Footer({ text = "© 2025 Meu Projeto" }: FooterProps) {
  return (
    <footer
      role="contentinfo"
      className="app-footer"
      style={{
        padding: "16px 32px",
        background: "#f1f5f9",
        color: "#64748b",
        fontSize: "14px",
        textAlign: "center",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      {text}
    </footer>
  );
}
