import "./App.css";
import Linkkilista from "./Linkkilista";

function App() {
  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" },
  ];

  return <Linkkilista lista={linkit} />;
}

export default App;
