import "./App.css";
import Kayttajakortti from "./Kayttajakortti";

function App() {
  const nimi = "Niko";

  const kurssit = ["React", "Javascript"];
  return (
    <div>
      <h1>Käyttäjäkortti</h1>
      <Kayttajakortti nimi={nimi} lista={kurssit} />
    </div>
  );
}

export default App;
