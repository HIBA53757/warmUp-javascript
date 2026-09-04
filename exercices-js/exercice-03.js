for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Decollage");
let somme = 0;
for (let i = 1; i <= 100; i++) {
    somme = somme + i;
}
console.log("Somme de 1 a 100 : " + somme);

let nombresPairs = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        nombresPairs = nombresPairs + i + " ";
    }
}
console.log("Nombres pairs : " + nombresPairs);

let compteur = 10;
while (compteur >= 1) {
    console.log(compteur);
    compteur--;
}
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}