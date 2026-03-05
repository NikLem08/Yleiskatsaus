import "./App.css";
import Infolista from "./Infolista";

function App() {
  const tiedot = ["React", "Javascript", "CSS"];
  return (
    <div>
      <h1>Infolista</h1>
      <Infolista taulukko={tiedot} />
    </div>
  );
}

export default App;
