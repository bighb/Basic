const coreMarkets = [
  { iso2: "33", name: "Austria" },
  { iso2: "44", name: "Switzerland" },
  { iso2: "55", name: "Germany" },
  { iso2: "66", name: "Spain" },
  { iso2: "77", name: "Finland" },
  { iso2: "88", name: "Great Britain" },
  { iso2: "99", name: "Italy" },
];
const marketFocus = ["77", "55", "33"];

const sortMarkets = (array, sortArray) => {
  sortArray.reverse();
  return [...array].sort(
    (a, b) => sortArray.indexOf(b.iso2) - sortArray.indexOf(a.iso2)
  );
};

let res = sortMarkets(coreMarkets, marketFocus);
console.log("res: ", res);
