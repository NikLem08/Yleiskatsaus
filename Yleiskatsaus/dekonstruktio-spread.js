//Tehtävä 1
const numerot = [10, 20, 30, 40];
const [eka, ...loput] = numerot;

console.log("Tehtävä 1:");
console.log("Ensimmäinen:", eka);
console.log("Loput numerot:", loput);
console.log("-----------------------");

//Tehtävä 2
const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};
const { nimi, ika, ...muutTiedot } = opiskelija;

console.log("Tehtävä 2:");
console.log("Nimi:", nimi);
console.log("Ikä:", ika);
console.log("Muut tiedot:", muutTiedot);
console.log("-----------------------");

//Tehtävä 3
const backend = ["Node.js", "SQL"];
const frontend = ["HTML", "CSS", "JavaScript"];
const fullstack = [...backend, ...frontend, "Git"];

console.log("Tehtävä 3:");
console.log(fullstack);
console.log("-----------------------");

//Tehtävä 4
const perusTiedot = {
  nimi: "Anna",
  ika: 19,
};

const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi",
};

const opiskelijaProfiili = { ...perusTiedot, ...lisatiedot, aktiivinen: true };

console.log("Tehtävä 4:");
console.log(opiskelijaProfiili);
