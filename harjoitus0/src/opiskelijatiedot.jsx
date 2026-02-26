function OpiskelijaTiedot({ opiskelija }) {
  return (
    <div>
      <p>Nimi: {opiskelija.nimi}</p>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}

export default OpiskelijaTiedot;
