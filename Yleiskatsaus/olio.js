const opsikelija = {
  nimi: "Matvei",
  ika: 22,
  kurssi: "Web234",
};

console.log("Opiskelija:", opsikelija.nimi, opsikelija.ika, opsikelija.kurssi);

class auto {
  constructor(merkki, malli, vuosimalli) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosimalli = vuosimalli;
  }
  autojenTiedot() {
    console.log(
      `Auton tiedot: ${this.merkki}, ${this.malli}, ${this.vuosimalli}`,
    );
  }
}

const mersu = new auto("mersu", 440, 2005);
mersu.autojenTiedot();
const bemari = new auto("bemari", 340, 1990);
bemari.autojenTiedot();

const kirjat = [
  { nimi: "Fantasia kirja", kirjailija: "Andrey Batya", vuosi: 2008 },
  { nimi: "Karhu kirja", kirjailija: "Vanya shvch", vuosi: 2008 },
  { nimi: "Draama kirja", kirjailija: "Sanya otech", vuosi: 2008 },
];

console.log("Kirjastojen valikoima:");

kirjat.forEach((kirja, index) => {
  console.log(
    `${index + 1}. Kirja: ${kirja.nimi}, Kirjailija: ${kirja.kirjailija}, Vuosi: ${kirja.vuosi}`,
  );
});
