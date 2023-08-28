console.group("Lars Karlsen");
//Opgave 1
let name = {name: "Lars"};
console.log(name);

//Opgave 2
let x = 5;
let y = 10;
let sum = x + y;
console.log(sum);

//Opgave 3
let alder = {age:40 + 5};
console.log(alder);

//Opgave 4

// Increment (forøgelse)
let a = 2;
console.log(a++);    // 2
console.log(a);      // 3

// Decrement (nedsættelse)
let b = 2;
console.log(b--);    // 2
console.log(b);      // 1

// Forklaring på a og b: 
// Når console.log(a og b) logger ud af værdien af a eller b,
// har ingen af dem ændret sig. Det skyldes, at den
// oprindelige værdi af operanden returneres, før 
// operanden ændres


// Increment (forøgelse)
let c = 1;
console.log(++c);    // 2
console.log(c);      // 2

// Decrement (nedsættelse)
let d = 1;
console.log(--d);    // 0
console.log(d);      // 0

// Forklaring på c og d: 
// Som du kan se i eksemplet, ved at 
// bruge ++ eller -- foer vores variabel,
// udføres operatioen og forøger/nedsætter
// 1 før returnering.

console.groupEnd("Lars Karlsen");
//test
