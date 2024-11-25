const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  "pes",
  "kočka",
  "králík",
  "had",
  "andulka",
  "morče",
  "krkavec",
];
const napoje = [
  { nazev: "Pivo", cena: 12, skladem: true },
  { nazev: "Rum", cena: 120, skladem: false },
  { nazev: "Víno", cena: 85, skladem: true },
  { nazev: "Whisky", cena: 450, skladem: true },
  { nazev: "Vodka", cena: 280, skladem: false },
  { nazev: "Becherovka", cena: 210, skladem: true },
  { nazev: "Kofola", cena: 40, skladem: true },
  { nazev: "Voda", cena: 15, skladem: false },
];

/*
Pomocí metody map vždy vytvořte pole dle zadání a vypište jej pro kontrolu do konzole (použijte console.log).
*/

// 1. Vytvořte nové pole, které bude obsahovat všechna čísla z pole cisla vynásobená dvěma.
const numMultipliedByTwo = cisla.map((num) => num * 2);
console.log(numMultipliedByTwo);

// 2. Vytvořte nové pole, které bude obsahovat délky všech řetězců z pole zvirata.
const stringLengths = zvirata.map((animal) => animal.length);
console.log(stringLengths);

// 3. Vytvořte nové pole, které bude obsahovat pouze názvy všech nápojů z pole napoje.
const drinkNames = napoje.map((drink) => drink.nazev);
console.log(drinkNames);

// 4. Vytvořte nové pole, které bude obsahovat pouze název nápoje z pole napoje, pokud je nápoj skladem, v opačném případě bude obsahovat řetězec Není skladem.
const drinkNamesOnStock = napoje.map((drink) => {
  if (drink.skladem) {
    return drink.nazev;
  }
  return "Není skladem";
});
console.log(drinkNamesOnStock);
