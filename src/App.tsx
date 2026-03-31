import "./App.css";
import { Button } from "./components/Button/Button";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header
          title="Meu Projeto"
          subtitle="Aprendendo Storybook com React + Vite"
        />
        <main
          style={{ flex: 1, padding: "32px", display: "flex", gap: "12px" }}
        >
          <Button
            label="Primário"
            variant="primary"
            onClick={() => alert("Primário")}
          />
          <Button
            label="Secundário"
            variant="secondary"
            onClick={() => alert("Secundário")}
          />
          <Button
            label="Desabilitado"
            disabled
            onClick={() => alert("Desabilitado")}
          />
        </main>
        <Footer text="© 2024 Meu Projeto. Todos os direitos reservados." />
      </div>
    </>
  );
}

export default App;
