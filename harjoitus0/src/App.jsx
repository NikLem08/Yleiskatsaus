import * as React from "react";
import OpiskelijaTiedot from "./opiskelijatiedot.jsx";

const opiskelija = {
  nimi: "Matti Meikäläinen",
  ika: 16,
  kurssi: "Reactin perusteet",
};

function App() {
  return (
    <div>
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
