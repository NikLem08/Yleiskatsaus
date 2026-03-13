import Tervehdys from "./Tervehdys";
import Infolista from "./Infolista";

const Kayttajakortti = ({ nimi, lista }) => {
  return (
    <div>
      <Tervehdys nimi={nimi} />

      <Infolista taulukko={lista} />
    </div>
  );
};

export default Kayttajakortti;
