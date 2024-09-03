import Home from "./components/pages/Home"; // Ajuste a importação de Home
import Logo from "./components/atoms/Image"; // Ajuste a importação do Logo

function App() {
  return (
    <div className="AppContainer">
      <Logo src="/assets/logo.svg" alt="Logo" style={{ width: "100px" }} /> {/* Ajuste para usar o componente Image */}
      <Home />
    </div>
  );
}

export default App;