console.log('kintamieji');

const pirmas = 5;
const antras = 7;

console.log(pirmas);
console.log(antras);

const vardas = "Zilvinas";
const pavarde = "Svirskas";

console.log(vardas);
console.log(pavarde);

const adresas = "Gedvydziu g.7-33, Vilnius, Lietuva";
console.log(adresas);

console.log('-----------');


let pinigine = 0 ;
console.log("Pinigineje yra:",pinigine);

const pirmaspinigas = 5;
const antraspinigas = 30;
const treciaspinigas = 40 

console.log("Pirmas pinigas:",pirmaspinigas);
console.log("antras pinigas:",antraspinigas);
console.log("trecias pinigas:",treciaspinigas);

pinigine = pinigine + pirmaspinigas;
console.log("Pinigineje yra:", pinigine);

pinigine = pinigine + pirmaspinigas + antraspinigas + treciaspinigas;
console.log("Pinigineje yra:",pinigine);

const pinigineislaida1 = 25 
const pinigineislaida2 = 15

console.log("Pinigine islaida1:",pinigineislaida1)
console.log("Pinigine islaida2:",pinigineislaida2)

pinigine = pinigine - pinigineislaida1 - pinigineislaida2;
console.log("pinigineje yra:", pinigine);

console.log("_________")


const pirmasZodis = 'Senis';
const antrasZodis = 'besmegenis';

const sakinys = pirmasZodis + ' ' + antrasZodis + '.';
console.log(1, pirmasZodis);
console.log(2, antrasZodis);
console.log(3, sakinys);



const kabutes1 = "It's my name";
console.log(kabutes1);

const kabutes2 = 'Tai vadinasi "Ciaplinas" ar kazkaip panasiai';
console.log(kabutes2);

const kabutes12 = 'Cia yra vienguba(\'), o cia yra dvyguba (") kabutes.';
const kabutes21 = "Cia yra vienguba('), o cia yra dvyguba (\") kabutes.";
console.log(kabutes12);
console.log(kabutes21);

const kabutes120 = 'Cia yra vienguba(\'), o cia yra dvyguba (\") kabutes.';
const kabutes210 = "Cia yra vienguba(\'), o cia yra dvyguba (\") kabutes.";
console.log(kabutes12);
console.log(kabutes21);

console.log('- - - - - - --  - -');

// Pagrindinis aktorius yra Chuck Norris filme "Volkeris. Teksaso reidzeris".
const aktoriausVardas = 'Chuck';
const aktoriausPavarde = 'Norris';
const filmoPavadinimas = 'Volkeris. Teksaso reidzeris';

const filmas1 = 'Pagrindinis aktorius yra ' + aktoriausVardas + ' ' + aktoriausPavarde + ' filme "' + filmoPavadinimas + '".';
console.log(1, filmas1);

const filmas2 = "Pagrindinis aktorius yra " + aktoriausVardas + " " + aktoriausPavarde + " filme \"" + filmoPavadinimas + "\".";
console.log(2, filmas2);

const filmas3 = "Pagrindinis aktorius yra " + aktoriausVardas + " " + aktoriausPavarde + ' filme "' + filmoPavadinimas + '".';
console.log(3, filmas3);

const filmas4 = `Pagrindinis aktorius yra ${aktoriausVardas} ${aktoriausPavarde} filme "${filmoPavadinimas}".`;
console.log(4, filmas4);

console.log('-------------');
// Viengubos ('), dvygubos (") ir backtick'as (`).
const kabuciuCombo1 = 'Viengubos (\'), dvygubos (") ir backtick\'as (`).';
const kabuciuCombo2 = "Viengubos ('), dvygubos (\") ir backtick'as (`).";
const kabuciuCombo3 = `Viengubos ('), dvygubos (") ir backtick'as (\`).`;
console.log(kabuciuCombo1);
console.log(kabuciuCombo2);
console.log(kabuciuCombo3);